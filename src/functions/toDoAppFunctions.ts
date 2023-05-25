import { ToDo } from '@/types/toDoTypes';
import { supabaseToDo } from '../utils/toDoSupabase';

export async function getToDos() {
  let { data: toDos, error } = await supabaseToDo.from('toDos').select('*');
  if (error) {
    console.error(error);
  }

  return toDos as ToDo[];
}

export async function updateCompleted(id: number, completed: boolean) {
  let { data: toDos, error } = await supabaseToDo
    .from('toDos')
    .update({ completed: !completed })
    .eq('id', id)
    .select('*');

  if (error) {
    console.error(error);
  }

  return toDos as ToDo[];
}

export async function deleteToDo(id: number) {
  let { data: toDos, error } = await supabaseToDo.from('toDos').delete().eq('id', id).select('*');

  if (error) {
    console.error(error);
  }

  return toDos as ToDo[];
}

export async function createToDo(title: string, description: string) {
  let { data: toDos, error } = await supabaseToDo.from('toDos').insert([{ title, description }]).select('*');
  if (error) {
    console.error(error);
  }

  return toDos as ToDo[];
}
