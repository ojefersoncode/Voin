'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useToast } from '@/components/ui/use-toast';

type Lead = {
  id?: string;
  email: string;
};

export const CaptureLeads = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedEmail = localStorage.getItem('lead_email');
    if (savedEmail) {
      toast({
        title: 'Aviso',
        description: 'Você já se cadastrou anteriormente.',
        variant: 'destructive'
      });
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: 'Erro',
        description: 'Digite um email válido.',
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

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 30000);

    const supabase = createClient();
    const lead: Lead = { email };

    const { data, error } = await supabase.from('leads' as any).insert([lead]);

    if (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao salvar. Tente novamente.',
        variant: 'destructive'
      });
      console.error('Supabase error:', error);
    } else {
      toast({
        title: 'Sucesso',
        description: 'Email cadastrado com sucesso!'
      });
      localStorage.setItem('lead_email', email);
      setEmail('');
    }

    setLoading(false);
  };

  return (
    <form
      className="flex w-full items-center max-md:justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        className="bg-muted/50 dark:bg-muted/80 w-72 p-3 max-md:w-60"
        aria-label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button
        className="p-3 max-md:text-sm"
        type="submit"
        disabled={loading || isButtonDisabled}
      >
        {loading ? 'Enviando...' : 'Inscrever'}
      </Button>
    </form>
  );
};
