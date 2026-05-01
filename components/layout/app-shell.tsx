import Link from 'next/link';
import { ReactNode } from 'react';
import { logout } from '@/lib/actions';
import { Button } from '@/components/ui/button';

export function AppShell({ children, admin = false }: { children: ReactNode; admin?: boolean }) {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='border-b bg-white'>
        <div className='mx-auto flex max-w-6xl items-center justify-between p-4'>
          <Link href='/' className='font-semibold'>SaaS Starter Kit</Link>
          <nav className='flex items-center gap-2'>
            <Link href='/dashboard' className='text-sm'>Dashboard</Link>
            <Link href='/dashboard/projects' className='text-sm'>Projects</Link>
            <Link href='/dashboard/settings' className='text-sm'>Settings</Link>
            {admin && <Link href='/admin' className='text-sm'>Admin</Link>}
            <form action={logout}><Button size='sm' variant='outline' type='submit'>Logout</Button></form>
          </nav>
        </div>
      </header>
      <main className='mx-auto max-w-6xl p-4'>{children}</main>
    </div>
  );
}
