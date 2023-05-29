import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Create Page</h1>
      </div>
      <form className="flex flex-col gap-1">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent px-2 py-2 rounded-md outline-none focus-within:bg-slate-700 transition-all duration-500"
        />
        <div className="flex justify-end gap-2">
          <Link
            href="/"
            className="border border-slate-300 px-2 py-1 rounded-md hover:bg-slate-500 transition-all duration-300">
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 px-2 py-1 rounded-md hover:bg-slate-500 transition-all duration-300">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
