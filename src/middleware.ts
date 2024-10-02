import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


// Захищені маршрути, які вимагають авторизації
const protectedRoutes = ['/dashboard', '/dashboard/setting','/dashboard/todo-customer'];

export function middleware(req: NextRequest) {
  console.log('Middleware is running');
  const token = req.cookies.get('cookie')?.value;

  // Перевіряємо, чи користувач авторизований
  if (!token && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    const url = req.nextUrl.clone();
    url.pathname = '/login'; // Перенаправляємо на сторінку логіну
    return NextResponse.redirect(url);
  }
  if (!token && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url)); // редирект на сторінку логіна
  }


  return NextResponse.next();
}

// Визначаємо, для яких шляхів застосовувати middleware
export const config = {
   matcher: ['/dashboard/:path*', '/dashboard/setting/:path*','/dashboard/todo-customer/:path*', '/login' ],

};


