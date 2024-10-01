import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('cookie'); // Приклад: перевірка токену авторизації

  if (!token && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
   
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Вказати шляхи, на яких застосовувати middleware
};
