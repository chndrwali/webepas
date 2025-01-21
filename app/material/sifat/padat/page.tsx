import { getCurrentUser } from '@/actions/getCurrentUser';
import Header from '@/components/header';
import DescPadatSection from '@/components/materi/descPadatSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-mobile md:bg-desktop bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Header currentUser={currentUser} />
        <div className="mt-4 pb-20">
          <DescPadatSection />
        </div>
      </div>
    </main>
  );
};

export default Page;
