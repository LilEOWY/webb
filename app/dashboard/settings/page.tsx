import { AppShell } from '@/components/layout/app-shell';
import { requireUser } from '@/lib/auth';

export default async function SettingsPage() {
  const { supabase, user } = await requireUser();
  const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).single();

  return <AppShell admin={profile?.role === 'admin'}><h1 className='text-2xl font-bold'>Settings</h1><p className='mt-2 text-slate-600'>Email: {user.email}</p><p>Role: {profile?.role}</p></AppShell>;
}
