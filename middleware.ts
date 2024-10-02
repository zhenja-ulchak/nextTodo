import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


// Захищені маршрути, які вимагають авторизації
const protectedRoutes = ['/dashboard', '/dashboard/setting','/dashboard/todo-customer'];

export async function middleware(req: NextRequest) {
  console.log('Middleware is running');
  const token = req.cookies.get('cookie')?.value;

  console.log('cookie:',req);
  
  // Перевіряємо, чи користувач авторизований
  if (!token && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    // const url = req.nextUrl.clone();
    // url.pathname = '/login'; // Перенаправляємо на сторінку логіну
    // return NextResponse.redirect(url);
  }
  // if (token) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = '/dashboard'; // Перенаправляємо на сторінку логіну
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

// Визначаємо, для яких шляхів застосовувати middleware
export const config = {
   matcher: ['/dashboard/:path*', '/dashboard/setting/:path*','/dashboard/todo-customer/:path*','/login/:path*','/:path*'  ],

};


