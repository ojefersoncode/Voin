'use client';

import { useState } from 'react';
import {
  Bell,
  ChevronRight,
  Clock,
  CreditCard,
  Eye,
  Lock,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  Star,
  UserCircle
} from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import NavBottom from '../All/NavBottom';
import NavbarAll from '../All/Navbar';

export default function ProfilePage({ user }: { user: User }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(true);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col">
      {/* Header */}
      <div>
        <NavbarAll />
      </div>

      <div className="flex-1 p-4 pb-24">
        {/* Perfil do usuário */}
        <div className="border-2 border-green-500 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <UserCircle className="w-16 h-16 text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sr Jeferson</h2>
              <div className="flex items-center mt-1">
                <img src="/patente/Bronze.png" alt="" className="size-8" />
                <span>Bronze nível 5</span>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-400">ID: 12345678</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto bg-transparent hover:bg-transparent hover:text-green-500 border-green-500 text-green-500"
            >
              Editar
            </Button>
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-3">
              <span className="text-sm">Progresso para Nível 6</span>
              <span className="text-sm">28%</span>
            </div>
            <Progress
              value={28}
              className="h-3 z-0 bg-white [&>div]:bg-green-600"
            ></Progress>
            <div className="mt-3 text-xs text-green-100 text-opacity-90 text-center">
              Falta 72% para atingir o próximo nível
            </div>
          </div>
        </div>

        {/* Estatísticas da conta */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold px-1 mb-4">
            Estatísticas da Conta
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#181818] rounded-xl p-4">
              <div className="text-gray-400 text-sm">Total de Transações</div>
              <div className="text-xl font-bold mt-1">247</div>
            </div>

            <div className="bg-[#181818] rounded-xl p-4">
              <div className="text-gray-400 text-sm">Membro desde</div>
              <div className="text-xl font-bold mt-1">Jan 2023</div>
            </div>

            <div className="bg-[#181818] rounded-xl p-4">
              <div className="text-gray-400 text-sm">Nível de Verificação</div>
              <div className="text-xl font-bold mt-1 flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-1" />
                Completo
              </div>
            </div>

            <div className="bg-[#181818] rounded-xl p-4">
              <div className="text-gray-400 text-sm">Pontos de Fidelidade</div>
              <div className="text-xl font-bold mt-1 flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                1,250
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Configurações */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold px-1 mb-4">Configurações</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-green-500" />
                  <span>Notificações</span>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span>Autenticação Biométrica</span>
                </div>
                <Switch
                  checked={biometricAuth}
                  onCheckedChange={setBiometricAuth}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-green-500" />
                  <span>Ocultar Saldo</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-green-500" />
                  <span>Preferências</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Segurança */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold px-1 mb-4">Segurança</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span>Alterar Senha</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Autenticação de 2 Fatores</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-green-500" />
                  <span>Métodos de Pagamento</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Suporte */}
          <div className="mb-6">
            <h3 className="text-lg px-1 font-semibold mb-4">Suporte</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-green-500" />
                  <span>Central de Ajuda</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#181818] rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>Histórico de Atividades</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Logout */}
        <div className="mt-3">
          <Button
            variant="outline"
            className="w-full border-red-500 bg-red-500/20 text-white hover:text-white hover:bg-red-500/10 mt-4"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>

      <div>
        <NavBottom />
      </div>
    </div>
  );
}
