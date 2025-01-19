import { auth } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect('/home');

  return (
    <main className="relative flex flex-col-reverse sm:flex-row">
      <section className="my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-[#16191E] px-5 py-10">
        <div className="gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10">
          <div>{children}</div>
        </div>
      </section>
      <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
        <Image src="/images/auth-illustration.png" alt="auth" width={1000} height={1000} className="size-full object-cover" />
      </section>
    </main>
  );
};

export default AuthLayout;
