'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { any, z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

// Tipos para os itens das fontes
type FontItem = {
  id: string;
  label: string;
  fontFamily: string;
};

// Tipos para opções de ícones
type IconOption = {
  value: string;
  label: string;
};
type Step3Props = {
  font: string;
  icons: string;
  onChangeFont: (font: string) => void;
  onChangeIcons: (icons: string) => void;
};

// Lista de fontes disponíveis
const items: readonly FontItem[] = [
  { id: 'Arial', label: 'Arial', fontFamily: 'Arial, sans-serif' },
  { id: 'Poppins', label: 'Poppins', fontFamily: 'Poppins, sans-serif' },
  { id: 'Roboto', label: 'Roboto', fontFamily: 'Roboto, sans-serif' },
  { id: 'Georgia', label: 'Georgia', fontFamily: 'Georgia, sans-serif' },
  { id: 'System', label: 'System', fontFamily: 'system-ui, sans-serif' },
  { id: 'Inter', label: 'Inter', fontFamily: 'Inter, sans-serif' },
  { id: 'Lato', label: 'Lato', fontFamily: 'Lato, sans-serif' },
  {
    id: 'Montserrat',
    label: 'Montserrat',
    fontFamily: 'Montserrat, sans-serif'
  }
] as const;

const iconOptions: readonly IconOption[] = [
  { value: 'lucide', label: 'Lucide Icons' },
  { value: 'material', label: 'Material Icons' }
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).length(3, {
    message: 'Você deve selecionar exatamente 3 fontes.'
  }),
  icons: z
    .string()
    .min(1, { message: 'Por favor, selecione um conjunto de ícones.' })
});

type FormValues = z.infer<typeof FormSchema>;

export function Step3({
  font,
  icons,
  onChangeFont,
  onChangeIcons
}: Step3Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['Arial', 'Poppins', 'Roboto'],
      icons: 'lucide'
    }
  });

  function onSubmit(data: FormValues) {
    toast({
      title: 'Você enviou os seguintes valores:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo de fontes */}
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-lg font-semibold">Fontes</FormLabel>
                <FormDescription className="pt-2">
                  Escolha exatamente 3 fontes que você irá usar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-center space-x-3 space-y-0 py-1"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== item.id)
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal text-black dark:text-white flex items-center space-x-2">
                    <span>{item.label}</span>
                    <span
                      style={{ fontFamily: item.fontFamily }}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      (Exemplo)
                    </span>
                  </FormLabel>
                </FormItem>
              ))}
              <FormMessage />
              {form.watch('items')?.length > 0 && (
                <div className="mt-4 border p-3 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                  Fontes selecionadas:{' '}
                  {form
                    .watch('items')
                    ?.map((id) => {
                      const selectedItem = items.find((item) => item.id === id);
                      return (
                        <span
                          key={id}
                          style={{ fontFamily: selectedItem?.fontFamily }}
                        >
                          {selectedItem?.label}
                        </span>
                      );
                    })
                    .reduce((prev, curr, i) => (
                      <>
                        {prev}
                        {i > 0 ? ', ' : ''}
                        {curr}
                      </>
                    ))}
                  {form.watch('items')?.length !== 3 && (
                    <span className="text-red-500 ml-2">
                      (Selecione exatamente 3 fontes)
                    </span>
                  )}
                </div>
              )}
            </FormItem>
          )}
        />

        {/* Campo de ícones */}
        <FormField
          control={form.control}
          name="icons"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-gray-300 font-medium">
                Ícones
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full p-2 text-black dark:text-white rounded border">
                    <SelectValue placeholder="Escolha um conjunto de ícones" />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
