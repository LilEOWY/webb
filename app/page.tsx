import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-slate-100'>
      <div className='mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center'>
        <h1 className='text-5xl font-bold tracking-tight'>SaaS Starter Kit</h1>
        <p className='mt-6 max-w-2xl text-lg text-slate-600'>Next.js App Router, Supabase Auth + RLS, admin panel, user dashboard, and deploy-ready foundation.</p>
        <div className='mt-8 flex gap-3'>
          <Link href='/register'><Button>Get Started</Button></Link>
          <Link href='/login'><Button variant='outline'>Sign In</Button></Link>
        </div>
      </div>
    </div>
  );
}
