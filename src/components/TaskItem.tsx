import React, { FC } from 'react';

type TaskItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TaskItem: FC<TaskItemProps> = ({ id, title, completed }) => {
  return (
    <li className="flex gap-2 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-400 cursor-pointer">
        {title}
      </label>
    </li>
  );
};

export default TaskItem;
