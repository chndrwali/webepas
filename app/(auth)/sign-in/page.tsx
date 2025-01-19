import { LoginForm } from '@/components/form/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masuk',
};

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">Masuk</h1>
      <p className="text-muted-foreground">Gunakan email dan password yang valid untuk mendapatkan akses</p>
      <LoginForm />
    </div>
  );
};

export default Page;
