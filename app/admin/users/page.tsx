import { AppShell } from '@/components/layout/app-shell';
import { requireAdmin } from '@/lib/auth';

export default async function AdminUsersPage() {
  const { supabase } = await requireAdmin();
  const { data: users } = await supabase.from('profiles').select('id,email,full_name,role,created_at').order('created_at', { ascending: false });
  const typedUsers = (users ?? []) as { id: string; email: string; full_name: string | null; role: string; created_at: string }[];
  return <AppShell admin><h1 className='mb-4 text-2xl font-bold'>Users</h1><div className='space-y-2'>{typedUsers.map((u)=><div key={u.id} className='rounded border bg-white p-3'><p>{u.email} - {u.role}</p></div>)}</div></AppShell>;
}
