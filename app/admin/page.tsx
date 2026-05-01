import Link from 'next/link';
import { AppShell } from '@/components/layout/app-shell';
import { requireAdmin } from '@/lib/auth';

export default async function AdminPage() {
  await requireAdmin();
  return <AppShell admin><h1 className='text-2xl font-bold'>Admin Panel</h1><div className='mt-4 flex gap-4'><Link href='/admin/users' className='underline'>Users</Link><Link href='/admin/projects' className='underline'>All Projects</Link></div></AppShell>;
}
