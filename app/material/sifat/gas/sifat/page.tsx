import { getCurrentUser } from '@/actions/getCurrentUser';
import SifatGasSection from '@/components/materi/sifatGasSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <SifatGasSection currentUser={currentUser} />;
};

export default Page;
