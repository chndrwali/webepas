import { getCurrentUser } from '@/actions/getCurrentUser';
import HomeSection from '@/components/section/homeSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <HomeSection currentUser={currentUser} />;
};

export default Page;
