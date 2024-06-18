import AuthForm from '@/components/auth-form';

export default async function Home({ searchParams }) {
  const fromMode = searchParams.mode || 'login';

  return <AuthForm mode={fromMode} />;
}
