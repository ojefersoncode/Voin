'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Paperclip,
  Mic,
  Smile,
  EllipsisVertical,
  ArrowLeft
} from 'lucide-react';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottomChat from './NavBottomChat';

// Tipo para as mensagens
interface Message {
  id: number;
  text: string;
  isSent: boolean; // true para mensagens enviadas, false para recebidas
  timestamp: Date;
}

export default function Mensagem({ user }: { user: User }) {
  // Estado para armazenar mensagens
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá, tudo bem?',
      isSent: false,
      timestamp: new Date(Date.now() - 60000 * 15) // 15 minutos atrás
    },
    {
      id: 2,
      text: 'Tudo ótimo! E com você?',
      isSent: true,
      timestamp: new Date(Date.now() - 60000 * 14) // 14 minutos atrás
    },
    {
      id: 3,
      text: 'Também estou bem! Vamos nos encontrar hoje?',
      isSent: false,
      timestamp: new Date(Date.now() - 60000 * 10) // 10 minutos atrás
    },
    {
      id: 4,
      text: 'Claro! Que horas?',
      isSent: true,
      timestamp: new Date(Date.now() - 60000 * 5) // 5 minutos atrás
    },
    {
      id: 5,
      text: 'Às 18h no café perto do shopping?',
      isSent: false,
      timestamp: new Date(Date.now() - 60000 * 2) // 2 minutos atrás
    }
  ]);

  // Input para nova mensagem
  const [newMessage, setNewMessage] = useState('');

  // Ref para rolagem automática
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Função para enviar mensagem
  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg: Message = {
      id: Date.now(),
      text: newMessage,
      isSent: true,
      timestamp: new Date()
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  // Função para formatar timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Função para agrupar mensagens por data
  const groupMessagesByDate = () => {
    const groups: { [date: string]: Message[] } = {};

    messages.forEach((message) => {
      const dateStr = message.timestamp.toLocaleDateString();
      if (!groups[dateStr]) {
        groups[dateStr] = [];
      }
      groups[dateStr].push(message);
    });

    return groups;
  };

  // Efeito para rolar para a última mensagem quando uma nova mensagem é adicionada
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Lidar com envio ao pressionar Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const groupedMessages = groupMessagesByDate();

  return (
    <div className="flex flex-col h-screen touch-pan-x touch-pan-y">
      {/* Header - área do contato */}
      <div className="flex w-full items-center justify-between py-2 bg-background">
        <div className="flex items-center text-green-50 gap-3 px-3">
          <div className="sm:p-1 hover:cursor-pointer">
            <ArrowLeft className="size-7" />
          </div>
          <div className="flex justify-center items-center rounded-full">
            <img src="/Voin.png" alt="jeferson" className="size-16" />
          </div>
          <div>
            <h1 className="text-base">Jeferson</h1>
            <span className="text-xs">Online</span>
          </div>
        </div>

        <div className="text-green-50 px-3">
          <EllipsisVertical className="size-5" />
        </div>
      </div>

      {/* Área de mensagens - use flex-1 para ocupar o espaço disponível e adicione padding-bottom */}
      <div className="flex-1 overflow-y-auto bg-blue-950/40 pb-20">
        <div className="flex flex-col space-y-4 p-4">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              {/* Separador de data */}
              <div className="flex justify-center my-2">
                <div className="bg-white px-2 py-1 rounded-lg text-xs text-gray-500 shadow-sm">
                  {new Date(date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  })}
                </div>
              </div>

              {/* Mensagens do dia */}
              {groupedMessages[date].map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`relative max-w-xl px-4 py-2 mt-4 rounded-lg shadow ${
                      message.isSent
                        ? 'bg-green-100 rounded-tr-none'
                        : 'bg-white rounded-tl-none'
                    }`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-700">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Área de entrada de mensagem - fixada na parte inferior */}
      <div className="w-full h-20 fixed bottom-0 border-t bg-background border-btn">
        <div className="flex items-center mt-5 gap-2 px-2">
          <button className="py-2 px-4 text-gray-100 rounded-full">
            <Smile size={24} />
          </button>

          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite uma mensagem"
              className="w-full p-3 bg-white rounded-xl focus:outline-none resize-none max-h-32 min-h-10"
              rows={1}
              style={{
                height: '45px',
                maxHeight: '120px',
                overflowY: newMessage.split('\n').length > 2 ? 'auto' : 'hidden'
              }}
            />
          </div>

          {newMessage.trim() ? (
            <button
              className="py-2 px-2 text-white rounded-full"
              onClick={sendMessage}
            >
              <Send className="text-gray-50 size-5" />
            </button>
          ) : (
            <button className="py-2 px-2 text-gray-100 rounded-full">
              <Mic size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
