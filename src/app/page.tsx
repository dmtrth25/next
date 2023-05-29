import Link from 'next/link';
import { prisma } from '@/db';
import TaskItem from '@/components/TaskItem';

const getData = () => {
  return prisma.taskManager.findMany();
};

const Home = async () => {
  const data = await getData();
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">Task Manager</h1>
        <Link
          href="/create"
          className="border border-slate-300 px-2 py-2 rounded-md hover:bg-slate-500 transition-all duration-300">
          Create
        </Link>
      </div>
      <ul className="ml-2">
        {data.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default Home;
