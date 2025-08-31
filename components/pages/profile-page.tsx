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
  Star
} from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import NavbarAll from '../All/Navbar';

export default function ProfilePage({ user }: { user: User }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(true);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}
      <div>
        <NavbarAll />
      </div>

      <div className="flex-1 p-4">
        {/* Estatísticas da conta */}
        <div className="mb-6">
          <h3 className="text-xl font-titan px-1 mb-4">
            Estatísticas da Conta
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-subbackground rounded-xl p-4">
              <div className="text-btn font-titan text-sm">
                Total de Transações
              </div>
              <div className="text-xl font-inter mt-1">247</div>
            </div>

            <div className="bg-subbackground rounded-xl p-4">
              <div className="text-btn font-titan text-sm">Membro desde</div>
              <div className="text-xl font-inter mt-1">Jan 2023</div>
            </div>

            <div className="bg-subbackground rounded-xl p-4">
              <div className="text-btn font-titan text-sm">
                Nível de Verificação
              </div>
              <div className="text-xl font-inter mt-1 flex items-center">
                <Shield className="h-5 w-5 text-btn mr-1" />
                Completo
              </div>
            </div>

            <div className="bg-subbackground rounded-xl p-4">
              <div className="text-btn font-titan text-sm">
                Pontos de batalha
              </div>
              <div className="text-xl font-inter mt-1 flex items-center">
                <Star className="h-5 w-5 text-btn mr-1" />
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
              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-btn" />
                  <span>Notificações</span>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  className="data-[state=checked]:bg-btn"
                />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-btn" />
                  <span>Autenticação Biométrica</span>
                </div>
                <Switch
                  checked={biometricAuth}
                  onCheckedChange={setBiometricAuth}
                  className="data-[state=checked]:bg-btn"
                />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-btn" />
                  <span>Ocultar Saldo</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-btn" />
                  <span>Preferências</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>
            </div>
          </div>

          {/* Segurança */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold px-1 mb-4">Segurança</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-btn" />
                  <span>Alterar Senha</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground  rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-btn" />
                  <span>Autenticação de 2 Fatores</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-btn" />
                  <span>Métodos de Pagamento</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>
            </div>
          </div>

          {/* Suporte */}
          <div className="mb-6">
            <h3 className="text-lg px-1 font-semibold mb-4">Suporte</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground  rounded-xl">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-btn" />
                  <span>Central de Ajuda</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>

              <div className="flex items-center justify-between text-sm font-inter p-3 bg-subbackground rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-btn" />
                  <span>Histórico de Atividades</span>
                </div>
                <ChevronRight className="h-5 w-5 text-btn" />
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Logout */}
        <div className="mb-7">
          <Button
            variant="outline"
            className="w-full font-inter text-sm border-red-500 bg-red-500/20 text-white hover:text-white hover:bg-red-500/10 mt-4"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  );
}
