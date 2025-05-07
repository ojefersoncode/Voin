import { createClient as createSupabaseClient } from '@supabase/supabase-js'; // Use a importação correta
import { Database } from '@/types_db';

// Função para criar o cliente do Supabase apenas no navegador
export const createClient = () => {
  // Verifica se estamos no navegador

  // Logs de variáveis de ambiente para diagnóstico (remover em produção)
  if (process.env.NODE_ENV === 'development') {
    console.log(
      'URL do Supabase:',
      process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Definida' : 'Indefinida'
    );
    console.log(
      'Chave anônima do Supabase:',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Definida' : 'Indefinida'
    );
  }

  // Verifique se as variáveis de ambiente estão definidas corretamente
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Variáveis de ambiente do Supabase não definidas');
  }

  try {
    // Cria o cliente Supabase
    const client = createSupabaseClient<Database>(supabaseUrl, supabaseKey);

    // Testa se o cliente foi criado corretamente
    if (!client) {
      throw new Error('Cliente Supabase não foi criado');
    }

    return client;
  } catch (error) {
    console.error('Erro ao criar cliente Supabase:', error);
    throw error;
  }
};
