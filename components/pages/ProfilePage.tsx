'use client';
import { useState } from 'react';
import { CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { User } from '@supabase/supabase-js';
import { Pencil } from 'lucide-react';
import NavbarAll from '../All/Navbar';
import { Footer } from '../landing/Footer';

export default function Profile({ user }: { user: User }) {
  const [name, setName] = useState('Jeferson code');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [id, setId] = useState('123456');

  // Função para editar os dados
  const handleEdit = (field: string, value: string) => {
    if (field === 'name') setName(value);
    if (field === 'phone') setPhone(value);
  };

  return (
    <div className=" w-full mx-auto bg-background min-h-screen touch-pan-x touch-pan-y">
      <div className=" w-full">
        <NavbarAll />
      </div>

      <div className="flex justify-center max-sm:px-4 mt-7  text-green-50 bg-background touch-pan-x touch-pan-y">
        <div className="w-full h-full max-w-4xl max-md:max-w-full  border border-zinc-700 bg-subbackground rounded-lg touch-pan-x touch-pan-y">
          <CardHeader>
            <h2 className="text-xl font-inter text-text">Editar perfil</h2>
          </CardHeader>

          <CardContent>
            {/* Image */}
            <div className="flex flex-col items-center space-x-4 mb-6">
              <img src="/Bronk.png" alt="" className="size-28" />
              <div className="flex items-center">
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    handleEdit('name', prompt('Editar apelido:', name) || name)
                  }
                  className="text-sm px-1"
                >
                  <span className="mr-2 font-inter text-lg">Editar Foto</span>

                  <Pencil className="size-5" />
                </Button>
              </div>
            </div>

            {/* Name */}
            <div className="flex justify-between items-center space-x-4 p-2 rounded-lg border border-gray-600/70 mb-4">
              <Label htmlFor="name" className="text-lg">
                Nome:
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-gray-100">{name}</span>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    handleEdit('name', prompt('Enter new name:', name) || name)
                  }
                  className="text-sm px-1"
                >
                  <Pencil className="size-4" />
                </Button>
              </div>
            </div>

            {/* Name */}
            <div className="flex justify-between items-center space-x-4 p-2 rounded-lg border border-gray-600/70 mb-4">
              <Label htmlFor="name" className="text-lg">
                Apelido:
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-gray-100">{name}</span>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    handleEdit('name', prompt('Editar apelido:', name) || name)
                  }
                  className="text-sm px-1"
                >
                  <Pencil className="size-4" />
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex justify-between items-center space-x-4 p-2 rounded-lg border border-gray-600/70 mb-4">
              <Label htmlFor="phone" className="text-lg">
                Telefone:
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-gray-100">{phone}</span>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    handleEdit(
                      'phone',
                      prompt('Enter new phone number:', phone) || phone
                    )
                  }
                  className="text-sm px-1"
                >
                  <Pencil className="size-4" />
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center space-x-4 p-2 rounded-lg border border-gray-600/70 mb-4">
              <Label htmlFor="email" className="text-lg">
                Email:
              </Label>
              <span className="text-gray-100">{email}</span>
            </div>

            {/* ID */}
            <div className="flex justify-between items-center space-x-4 p-2 rounded-lg border border-gray-600/70  mb-4">
              <Label htmlFor="id" className="text-lg">
                ID:
              </Label>
              <span className="text-gray-100">{id}</span>
            </div>
          </CardContent>

          <CardFooter className="flex w-full justify-between gap-6 items-center">
            <Button className="w-full md:w-auto mt-4 border-none bg-red-600 hover:bg-red-600 text-gray-50 hover:text-gray-100 ">
              Cancelar Alterações
            </Button>
            <Button className="w-full md:w-auto mt-4 border border-opacity-35 bg-btn hover:bg-btn text-gray-50 hover:text-gray-100 ">
              Salvar Alterações
            </Button>
          </CardFooter>
        </div>
      </div>
      <div className="w-full border-t border-zinc-700 mt-6">
        <Footer />
      </div>
    </div>
  );
}
