'use client';

import AddToDoForm from '@/components/toDoAppcomponents/form/AddToDoForm';
import IndividualTodo from '@/components/toDoAppcomponents/inidvidualToDo/IndividualTodo';
import { createToDo, deleteToDo, getToDos, updateCompleted } from '@/functions/toDoAppFunctions';
import { ToDo } from '@/types/toDoTypes';
import React, { useState, useEffect } from 'react';

export default function ToDoApp() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    async function setToDoList() {
      const currentToDos = await getToDos();
      currentToDos.sort((a, b) => {
        const aDate = Date.parse(a.created_at);
        const bDate = Date.parse(b.created_at);
        return aDate - bDate;
      });
      setToDos(currentToDos);
    }

    setToDoList();
  }, []);

  async function handleCompleted(toDo: ToDo, index: number) {
    await updateCompleted(toDo.id, toDo.completed);
    const updatedToDos = [...toDos];
    updatedToDos[index].completed = !updatedToDos[index].completed;
    setToDos(updatedToDos);
  }

  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>, toDo: ToDo, index: number) {
    e.preventDefault();
    await deleteToDo(toDo.id);
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);
    setToDos(updatedToDos);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const updatedToDos = [...toDos];
    const newToDo = await createToDo(title, description);
    updatedToDos.push(newToDo[0]);
    updatedToDos.sort((a, b) => {
      const aDate = Date.parse(a.created_at);
      const bDate = Date.parse(b.created_at);
      return aDate - bDate;
    });
    setToDos(updatedToDos);
    setTitle('');
    setDescription('');
    setSubmitting(false);
  }

  return (
    <div className='px-5 py-3 border-2 rounded-lg border-slate-300'>
      <h2 className='text-2xl text-center'>Your To Do List</h2>
      <AddToDoForm
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        submitting={submitting}
      />
      {toDos.map((toDo, index) => {
        return (
          <div key={toDo.id}>
            <IndividualTodo toDo={toDo} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}
