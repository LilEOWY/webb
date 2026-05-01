'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

type Project = { id: string; name: string; description: string | null; status: 'active' | 'archived' };

export function ProjectsCrud({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const supabase = createClient();

  const refresh = async () => {
    const { data } = await supabase.from('projects').select('id,name,description,status').order('created_at', { ascending: false });
    setProjects((data ?? []) as Project[]);
  };

  const create = async () => {
    const { error } = await supabase.from('projects').insert({ name, description });
    if (error) return toast.error(error.message);
    setName(''); setDescription(''); toast.success('Project added.'); refresh();
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) return toast.error(error.message);
    toast.success('Deleted.'); refresh();
  };

  return <div className='space-y-4'>
    <div className='rounded-lg border bg-white p-4 space-y-2'>
      <Input placeholder='Project name' value={name} onChange={(e)=>setName(e.target.value)} />
      <Textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      <Button onClick={create}>Add Project</Button>
    </div>
    {projects.length === 0 ? <div className='rounded-lg border border-dashed p-8 text-center text-slate-500'>No projects yet.</div> :
      <div className='space-y-2'>{projects.map((p)=><div key={p.id} className='flex items-center justify-between rounded border bg-white p-3'><div><p className='font-medium'>{p.name}</p><p className='text-sm text-slate-500'>{p.description}</p></div><Button variant='destructive' size='sm' onClick={()=>remove(p.id)}>Delete</Button></div>)}</div>}
  </div>;
}
