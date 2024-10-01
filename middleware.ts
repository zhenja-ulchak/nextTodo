
// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   // Отримуємо шлях запиту
//   const path = req.nextUrl.pathname;

//   // Перевіряємо, чи кука 'auth' існує
//   const isAuthenticated = Boolean(req.cookies.get('auth')); // Змініть 'auth' на назву вашої куки

//   // Дозволяємо доступ до сторінок логіна, якщо користувач вже авторизований
//   if (isAuthenticated && path === '/login') {
//     return NextResponse.redirect(new URL('/dashboard', req.url));
//   }

//   // Забороняємо доступ до сторінки дашборду, якщо користувач не авторизований
//   if (!isAuthenticated && path.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Продовжуємо обробку запиту
//   return NextResponse.next();
// }

// // Визначте, на яких шляхах використовувати middleware
// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };
