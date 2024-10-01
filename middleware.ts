import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

import { parse, splitCookiesString } from 'set-cookie-parser'
// Захищені маршрути, які вимагають авторизації
const protectedRoutes = ['/dashboard', '/setting'];

export async function middleware(req: NextRequest) {
    const { pathname, origin } = req.nextUrl

    const locale = pathname.split('/')[1]
    const headers = new Headers(req.headers)
    const response = NextResponse.next({
        request: {
          headers,
        },
      })
    const Cookie = headers.get('cookie')
    const pathnameAuth = pathname.includes(`/login`)
    if (Cookie) {
      const res = await fetch(`${origin}/v1/user/login-refresh`, {
        method: 'GET',
        headers: {
          Cookie,
        },
        credentials: 'include',
      })
      const status = (await res.json()).status
  
      if (status === 400 && pathnameAuth) {
        return NextResponse.redirect(new URL(`/login`, req.url))
      }
  
      if (status === 401 && !pathnameAuth) {
        return NextResponse.redirect(new URL(`/login`, req.url))
      }
      parse(splitCookiesString(res.headers.get('set-cookie')!)).forEach(async (cookie) => {
        response.cookies.set(cookie.name, cookie.value, {
          domain: cookie.domain,
          expires: cookie.expires,
          httpOnly: cookie.httpOnly,
          maxAge: cookie.maxAge,
          path: cookie.path,
          sameSite: cookie.sameSite as any,
          secure: cookie.secure,
        })
      })
    } else {
      if (!pathnameAuth) {
        return NextResponse.redirect(new URL(`/login`, req.url))
      }
    }

  const token = req.cookies.get('cookie')?.value;

  // Перевіряємо, чи користувач авторизований
  if (!token && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    const url = req.nextUrl.clone();
    url.pathname = '/login'; // Перенаправляємо на сторінку логіну
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Визначаємо, для яких шляхів застосовувати middleware
export const config = {
  matcher: ['/dashboard/:path*', '/dashboard/setting/:path*','/dashboard/todo-customer/:path*' ],
};


