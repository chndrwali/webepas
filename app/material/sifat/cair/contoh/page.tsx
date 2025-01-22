import { getCurrentUser } from '@/actions/getCurrentUser';
import ExampleCairSection from '@/components/materi/exampleCairSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <ExampleCairSection currentUser={currentUser} />;
};

export default Page;
