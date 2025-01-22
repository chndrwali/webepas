import { getCurrentUser } from '@/actions/getCurrentUser';
import ExampleGasSection from '@/components/materi/exampleGasSection';

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <ExampleGasSection currentUser={currentUser} />;
};

export default Page;
