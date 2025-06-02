'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/types_db';
import { BlurFade } from '../magicui/blur-fade';

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

      console.log('Iniciando inserção de lead:', { email });

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
    <div>
      <form
        className="flex w-full flex-wrap items-center gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Seu melhor e-mail…"
          className="flex-1 bg-subbackground/80 p-3 border-2 border-btn rounded-xl text-text min-w-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button
          className="rounded-lg text-text font-inter bg-btn hover:bg-btn/80 transition-all px-3 py-4 text-md max-md:text-sm text-base"
          type="submit"
          disabled={loading || isButtonDisabled}
        >
          {loading ? 'Enviando cadastro...' : 'Quero entrar'}
        </Button>
      </form>
      <div className="flex w-full items-center justify-center mt-10 gap-2 px-1">
        <hr className="w-full border-btn" />

        <span className="w-full text-nowrap text-text/70 font-inter lg:text-sm text-xs">
          Garanta seu acesso antecipado!
        </span>

        <hr className="w-full border-btn" />
      </div>
    </div>
  );
};
