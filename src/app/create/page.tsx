import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div>Page</div>
      <Link href="/">Back</Link>
    </>
  );
};

export default Page;
