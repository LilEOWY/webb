import { AppShell } from '@/components/layout/app-shell';
import { requireAdmin } from '@/lib/auth';

export default async function AdminProjectsPage() {
  const { supabase } = await requireAdmin();
  const { data: projects } = await supabase.from('projects').select('id,name,description,status,owner_id').order('created_at', { ascending: false });
  const typedProjects = (projects ?? []) as { id: string; name: string; description: string | null; status: string; owner_id: string }[];
  return <AppShell admin><h1 className='mb-4 text-2xl font-bold'>All Projects</h1><div className='space-y-2'>{typedProjects.map((p)=><div key={p.id} className='rounded border bg-white p-3'><p className='font-medium'>{p.name}</p><p className='text-sm text-slate-500'>{p.owner_id}</p></div>)}</div></AppShell>;
}
