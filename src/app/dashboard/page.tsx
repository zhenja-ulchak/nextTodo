// app/dashboard/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // Якщо токена немає, редиректимо на сторінку входу
  if (!token) {
    redirect('/login');
  }
  if (token) {
    redirect('/');
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Ви авторизовані і бачите цю сторінку.</p>
    </div>
  );
}
