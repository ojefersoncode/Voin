'use client';

import { useState } from 'react';
import { Search, MoreVertical, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import NavBottomChat from './NavBottomChat';

// Tipo para os chats/conversas
interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unreadCount: number;
  isGroup: boolean;
  isOnline?: boolean;
  isTyping?: boolean;
}

export default function Mensagems() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Dados de exemplo para chats
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      name: 'João Silva',
      avatar: '👨',
      lastMessage: 'Bom dia! Como vai o projeto?',
      timestamp: new Date(Date.now() - 5 * 60000), // 5 minutos atrás
      unreadCount: 2,
      isGroup: false,
      isOnline: true
    },
    {
      id: '2',
      name: 'Maria Costa',
      avatar: '👩',
      lastMessage: 'Vamos almoçar hoje?',
      timestamp: new Date(Date.now() - 30 * 60000), // 30 minutos atrás
      unreadCount: 0,
      isGroup: false,
      isTyping: true
    },
    {
      id: '3',
      name: 'Família',
      avatar: '👪',
      lastMessage: 'Pai: Não esqueçam do almoço de domingo',
      timestamp: new Date(Date.now() - 2 * 60 * 60000), // 2 horas atrás
      unreadCount: 5,
      isGroup: true
    },
    {
      id: '4',
      name: 'Carlos Eduardo',
      avatar: '🧔',
      lastMessage: 'Você: Valeu, até amanhã!',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60000), // 1 dia atrás
      unreadCount: 0,
      isGroup: false
    },
    {
      id: '5',
      name: 'Grupo de Trabalho',
      avatar: '💼',
      lastMessage: 'Ana: Compartilhei os documentos no drive',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000), // 2 dias atrás
      unreadCount: 0,
      isGroup: true
    },
    {
      id: '6',
      name: 'Pedro Almeida',
      avatar: '👨‍🦱',
      lastMessage: 'Oi, tudo bem? Preciso falar com você sobre...',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60000), // 3 dias atrás
      unreadCount: 0,
      isGroup: false,
      isOnline: true
    },
    {
      id: '7',
      name: 'Amigos da Faculdade',
      avatar: '🎓',
      lastMessage: 'Lucas: Quem vai na festa de sábado?',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60000), // 4 dias atrás
      unreadCount: 0,
      isGroup: true
    },
    {
      id: '8',
      name: 'Suporte Técnico',
      avatar: '🛠️',
      lastMessage: 'Seu chamado #4523 foi atualizado',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60000), // 5 dias atrás
      unreadCount: 0,
      isGroup: false
    },
    {
      id: '9',
      name: 'Julia Mendes',
      avatar: '👱‍♀️',
      lastMessage: 'Você: Pode me enviar o endereço?',
      timestamp: new Date(Date.now() - 6 * 24 * 60 * 60000), // 6 dias atrás
      unreadCount: 0,
      isGroup: false
    },
    {
      id: '10',
      name: 'Entrega de Comida',
      avatar: '🍕',
      lastMessage: 'Seu pedido foi entregue. Aproveite!',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60000), // 7 dias atrás
      unreadCount: 0,
      isGroup: false
    }
  ]);

  // Filtra os chats com base na busca
  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Formata a data para exibição
  const formatTime = (date: Date) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date >= today) {
      // Se for hoje, mostra a hora
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    } else if (date >= yesterday) {
      // Se for ontem
      return 'Ontem';
    } else {
      // Caso contrário, mostra a data
      return date.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
    }
  };

  // Navega para o chat específico
  const openChat = (chatId: string) => {
    router.push(`/mensagem/`);

    const navigateToHomePage = () => router.push('/menssenger');
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Área de pesquisa */}
      <div className="py-2 px-6 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-50" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar ou começar nova conversa"
            className="w-full pl-10 pr-4 py-2 bg-blue-950/40 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-green-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de chats */}
      <div className="flex-1 overflow-y-auto px-4">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center py-4 px-3 hover:bg-blue-950/20 rounded-lg cursor-pointer"
              onClick={() => openChat(chat.id)}
            >
              {/* Avatar */}
              <div className="relative mr-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                  {chat.avatar}
                </div>
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Conteúdo da conversa */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm text-green-50 font-semibold truncate">
                    {chat.name}
                  </h3>
                  <span
                    className={`text-xs ${chat.unreadCount > 0 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}
                  >
                    {formatTime(chat.timestamp)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p
                    className={`text-sm truncate ${chat.unreadCount > 0 ? 'text-green-50' : 'text-gray-300'}`}
                  >
                    {chat.isTyping ? (
                      <span className="text-blue-500">digitando...</span>
                    ) : (
                      chat.lastMessage
                    )}
                  </p>
                  <div className="flex items-center ml-2">
                    {chat.unreadCount > 0 ? (
                      <div className="w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center">
                        {chat.unreadCount}
                      </div>
                    ) : chat.id === '4' || chat.id === '9' ? (
                      <Check className="w-4 h-4 text-gray-400" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-6 text-gray-500">
            Nenhuma conversa encontrada
          </div>
        )}
      </div>

      <div>
        <NavBottomChat />
      </div>
    </div>
  );
}
