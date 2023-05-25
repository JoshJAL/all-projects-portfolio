import { ToDo } from '@/types/toDoTypes';
import React from 'react';

interface Props {
  toDo: ToDo;
  handleCompleted: (toDo: ToDo, index: number) => void;
  index: number;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>, toDo: ToDo, index: number) => void;
}

export default function IndividualTodo({ toDo, handleCompleted, index, handleDelete }: Props) {
  return (
    <div className='flex flex-col items-center w-full gap-2 py-3 text-lg md:grid md:grid-cols-5'>
      <h3 className={`${toDo.completed ? 'line-through' : ''} underline underline-offset-2 pr-2 text-center`}>
        {toDo.title}
      </h3>
      <div className='hidden md:col-span-2 md:block'>
        {toDo.description ? <p className={`${toDo.completed ? 'line-through' : ''}`}>{toDo.description}</p> : <div />}
      </div>

      <div className='flex w-full text-center md:hidden'>
        <div className='w-[80%]'>
          {toDo.description ? <p className={`${toDo.completed ? 'line-through' : ''}`}>{toDo.description}</p> : <div />}
        </div>
        <div className='block w-[20%] md:hidden'>
          <input type='checkbox' checked={toDo.completed} onChange={() => handleCompleted(toDo, index)} />
        </div>
      </div>

      <div className='hidden md:block'>
        <input
          className='cursor-pointer'
          type='checkbox'
          checked={toDo.completed}
          onChange={() => handleCompleted(toDo, index)}
        />
      </div>
      <div>
        <button
          type='button'
          className='px-3 py-2 transition bg-red-500 rounded-md hover:bg-red-600'
          onClick={(e) => handleDelete(e, toDo, index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
