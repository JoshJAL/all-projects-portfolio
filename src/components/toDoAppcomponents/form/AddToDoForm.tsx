import React from 'react';

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function AddToDoForm({ title, setTitle, description, setDescription, submitting, handleSubmit }: Props) {
  return (
    <form className='flex flex-col w-full gap-2' onSubmit={(e) => handleSubmit(e)}>
      <label className='text-lg underline underline-offset-2' htmlFor='title'>
        Title:
      </label>
      <input
        name='title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='px-2 py-3 text-lg text-black rounded-lg outline-none'
      />
      <label className='text-lg underline underline-offset-2' htmlFor='description'>
        Description:
      </label>
      <textarea
        name='description'
        value={description}
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        className='px-2 py-3 text-lg text-black rounded-lg outline-none'
      />
      <button
        type='submit'
        className='px-3 py-2 transition bg-blue-500 rounded-lg hover:bg-blue-600'
        disabled={title.trim().length === 0}
      >
        {submitting ? 'Adding...' : 'Add To Do'}
      </button>
    </form>
  );
}
