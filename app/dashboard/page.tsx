import { AppShell } from '@/components/layout/app-shell';
import { requireUser } from '@/lib/auth';

export default async function DashboardPage() {
  const { supabase, user } = await requireUser();
  const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).single();
  const { count } = await supabase.from('projects').select('*', { count: 'exact', head: true });

  return <AppShell admin={profile?.role === 'admin'}><div className='space-y-2'><h1 className='text-2xl font-bold'>Dashboard</h1><p>Welcome {profile?.full_name ?? user.email}</p><p>Total visible projects: {count ?? 0}</p></div></AppShell>;
}
