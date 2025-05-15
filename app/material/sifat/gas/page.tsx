import Header from '@/components/header';
import DescGasSection from '@/components/materi/descGasSection';

const Page = async () => {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-mobile md:bg-desktop bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <div className="mt-4 pb-20">
          <DescGasSection />
        </div>
      </div>
    </main>
  );
};

export default Page;
