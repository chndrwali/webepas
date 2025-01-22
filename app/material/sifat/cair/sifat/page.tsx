import { getCurrentUser } from '@/actions/getCurrentUser';
import SifatCairSection from '@/components/materi/sifatCairSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <SifatCairSection currentUser={currentUser} />;
};

export default Page;
