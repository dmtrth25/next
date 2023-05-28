import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-around items-center mb-5">
        <h1 className="text-2xl">Task Manager</h1>
        <Link
          href="/create"
          className="border border-slate-300 px-2 py-2 rounded-md hover:bg-slate-500 transition-all duration-300">
          Create
        </Link>
      </div>
    </>
  );
};

export default Home;
