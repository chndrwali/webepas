import { getCurrentUser } from '@/actions/getCurrentUser';
import ExamplePadatSection from '@/components/materi/examplePadatSection';

const Page = async () => {
  const currentUser = await getCurrentUser();

  return <ExamplePadatSection currentUser={currentUser} />;
};

export default Page;
