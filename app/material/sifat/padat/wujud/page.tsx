import { getCurrentUser } from '@/actions/getCurrentUser';
import WujudPadatSection from '@/components/materi/wujudPadatSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <WujudPadatSection currentUser={currentUser} />;
};

export default Page;
