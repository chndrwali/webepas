import { getCurrentUser } from '@/actions/getCurrentUser';
import MacamPerubahanSection from '@/components/materi/perubahan/macamPerubahanSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <MacamPerubahanSection currentUser={currentUser} />;
};

export default Page;
