import { AppShell } from '@/components/layout/app-shell';
import { ProjectsCrud } from '@/components/shared/projects-crud';
import { requireUser } from '@/lib/auth';

export default async function ProjectsPage() {
  const { supabase, user } = await requireUser();
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  const { data: projects } = await supabase.from('projects').select('id,name,description,status').order('created_at', { ascending: false });

  return <AppShell admin={profile?.role === 'admin'}><h1 className='mb-4 text-2xl font-bold'>Projects</h1><ProjectsCrud initialProjects={(projects ?? []) as { id: string; name: string; description: string | null; status: "active" | "archived" }[]} /></AppShell>;
}
