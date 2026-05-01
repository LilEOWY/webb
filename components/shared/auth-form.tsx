'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const fn = mode === 'login' ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { error } = await fn({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success(mode === 'login' ? 'Giriş başarılı.' : 'Kayıt başarılı.');
    router.push('/dashboard');
    router.refresh();
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-50 p-4'>
      <form onSubmit={onSubmit} className='w-full max-w-md space-y-4 rounded-lg border bg-white p-6'>
        <h1 className='text-2xl font-semibold'>{mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</h1>
        <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type='password' placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button className='w-full' disabled={loading}>{loading ? 'Yükleniyor...' : mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</Button>
      </form>
    </div>
  );
}
