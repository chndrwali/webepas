import Header from '@/components/header';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-mobile md:bg-desktop bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <div className="mt-10 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
