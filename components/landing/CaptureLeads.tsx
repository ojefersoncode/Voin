'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/types_db';

type Lead = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

export const CaptureLeads = () => {
  const router = useRouter();

  // Tipagem correta para o cliente Supabase
  const [supabase, setSupabase] = useState<SupabaseClient<Database> | null>(
    null
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { toast } = useToast();

  // Inicializa o cliente Supabase apenas uma vez no lado do cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const client = createClient();
        setSupabase(client);
        console.log('Supabase client initialized successfully');
      } catch (err) {
        console.error('Error initializing Supabase client:', err);
        toast({
          title: 'Erro',
          description: 'Erro ao inicializar o cliente Supabase',
          variant: 'destructive'
        });
      }
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Campos:', { name, email, phone });

    if (!email.trim() || !name.trim() || !phone.trim()) {
      toast({
        title: 'Erro',
        description: 'Preencha todos os campos.',
        variant: 'destructive'
      });
      return;
    }

    const savedEmail = localStorage.getItem('lead_email');
    if (savedEmail === email) {
      toast({
        title: 'Aviso',
        description: 'Este email já foi cadastrado!',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    setIsButtonDisabled(true);

    try {
      // Verificar se o cliente Supabase foi inicializado corretamente
      if (!supabase) {
        throw new Error('Cliente Supabase não inicializado');
      }

      console.log('Iniciando inserção de lead:', { name, email, phone });

      // Tentativa de inserção com melhor depuração
      const { data, error, status } = await supabase
        .from('leads')
        .insert([
          {
            name,
            email,
            phone
          }
        ])
        .select(); // Retorna os dados inseridos, caso precise de confirmação

      console.log('Resposta do Supabase:', { data, error, status });

      if (error) {
        toast({
          title: 'Erro',
          description: `Erro ao salvar: ${error.message || 'Erro desconhecido'}`,
          variant: 'destructive'
        });
        console.error('Detalhes do erro Supabase:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
      } else {
        toast({
          title: 'Sucesso',
          description: 'Lead cadastrado com sucesso!'
        });
        localStorage.setItem('lead_email', email);
        setName('');
        setEmail('');
        setPhone('');
      }
    } catch (err) {
      // Melhor tratamento de erros
      const errorMessage =
        err instanceof Error ? err.message : 'Erro desconhecido';
      toast({
        title: 'Erro',
        description: `Ocorreu um erro ao processar seu cadastro: ${errorMessage}`,
        variant: 'destructive'
      });
      console.error('Erro completo:', err);
    } finally {
      setLoading(false);
      setTimeout(() => setIsButtonDisabled(false), 30000);
    }
  };

  return (
    <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite seu nome"
        className="bg-background/80 border-2 border-btn p-3 w-full rounded-xl text-text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        className="bg-background/80 border-2 border-btn p-3 w-full rounded-xl text-text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Digite seu telefone (ex: 31999999999)"
        className="bg-background/80 border-2 border-btn p-3 w-full rounded-xl text-text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button
        className="w-full rounded-xl text-background font-inter bg-btn hover:bg-btn/80 transition-colors shadow-btn shadow-md drop-shadow-md border-3 border-orange-800/40 p-3 text-md max-md:text-sm"
        type="submit"
        disabled={loading || isButtonDisabled}
      >
        {loading ? 'Enviando cadastro...' : 'Cadastrar'}
      </Button>
    </form>
  );
};
