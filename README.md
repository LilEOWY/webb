# saas-starter-kit

Production-ready SaaS starter built with Next.js App Router + Supabase.

## 1) Kurulum Planı
1. Next.js + TypeScript + Tailwind temelini kur.
2. shadcn/ui temelli UI primitive'lerini ekle.
3. Supabase browser/server/middleware client ayrımını kur.
4. Auth akışını (login/register/logout/protected routes) tamamla.
5. Dashboard + Settings + Admin panellerini kur.
6. Projects CRUD modülünü RLS ile entegre et.
7. SQL schema + trigger + policy'leri uygula.
8. .env.example, deploy ve entegrasyon dokümantasyonunu tamamla.

## 2) Klasör Yapısı
- `app/` route'lar (landing, auth, dashboard, admin)
- `components/ui/` yeniden kullanılabilir UI bileşenleri
- `components/layout/` shell/navigation
- `components/shared/` feature-level bileşenler
- `lib/supabase/` browser/server client
- `lib/types/` DB tipleri
- `supabase/schema.sql` tablo + RLS + trigger

## 3) Supabase Tablo Şeması
- `profiles`: user metadata + role (`user` | `admin`)
- `projects`: owner bazlı CRUD data
- Trigger: `auth.users` insert => `profiles` auto create
- RLS: user kendi kayıtlarını, admin tüm kayıtları görür/yönetir.

## 4) Environment Değişkenleri
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 5) GitHub / Vercel / Supabase Bağlantı Adımları
1. Supabase'de proje oluştur, `schema.sql` çalıştır.
2. GitHub repo'ya push et.
3. Vercel'de repo'yu import et.
4. Vercel Project Settings > Environment Variables'a `.env.example` değerlerini gir.
5. Redeploy et.
6. İlk admin ataması için SQL çalıştır:
   `update public.profiles set role='admin' where email='you@example.com';`

## Local Development
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production Checklist
- RLS aktif
- Admin role atandı
- Vercel env eklendi
- Build başarılı (`npm run build`)
