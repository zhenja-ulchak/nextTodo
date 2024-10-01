// app/dashboard/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function DashboardPage() {




  return (
    <div>
      <h1>Dashboard</h1>
      <p>Ви авторизовані і бачите цю сторінку.</p>
    </div>
  );
}
