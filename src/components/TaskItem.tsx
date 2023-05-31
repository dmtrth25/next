'use client';

import { FC } from 'react';

type TaskItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleItem: (id: string, completed: boolean) => void;
};

const TaskItem: FC<TaskItemProps> = ({ id, title, completed, toggleItem }) => {
  return (
    <li className="flex gap-2 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => toggleItem(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-400 cursor-pointer">
        {title}
      </label>
    </li>
  );
};

export default TaskItem;
