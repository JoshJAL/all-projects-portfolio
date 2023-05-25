import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.NEXT_PUBLIC_TODO_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_TODO_SUPABASE_API_KEY;

export const supabaseToDo = createClient(supabaseURL as string, supabaseKey as string);
