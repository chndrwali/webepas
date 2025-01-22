import { getCurrentUser } from '@/actions/getCurrentUser';
import ExamplePerubahanSection from '@/components/materi/perubahan/examplePerubahanSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <ExamplePerubahanSection currentUser={currentUser} />;
};

export default Page;
