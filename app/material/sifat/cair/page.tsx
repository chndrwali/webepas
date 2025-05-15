import Header from '@/components/header';
import DescCairSection from '@/components/materi/descCairSection';

const Page = async () => {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-mobile_cair md:bg-desktop_cair bg-cover bg-center bg-no-repeat px-5 xs:px-10 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <div className="mt-4 pb-20">
          <DescCairSection />
        </div>
      </div>
    </main>
  );
};

export default Page;
