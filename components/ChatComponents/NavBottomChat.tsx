'use client';

import {
  MessageCircleMore,
  Users,
  UserRoundCog,
  NotebookText
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NavBottomChat() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/menssenger');
  const navigateToGroup = () => router.push('/group');
  const navigateToContacts = () => router.push('/contacts');
  const navigateToProfilechat = () => router.push('/profile-chat');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0e0e] z-50">
      <div className="flex justify-around items-center h-16">
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300 "
          onClick={navigateToHomePage}
        >
          <MessageCircleMore className="h-5 w-5" />
          <span className="text-xs mt-1">Início</span>
        </button>

        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={navigateToGroup}
            className="flex flex-col items-center justify-center w-1/5 py-1 bg-[#181818] text-gray-100 relative"
          >
            <Users className="h-5 w-5" />
            <span className="text-xs mt-1 text-white">Grupos</span>
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300"
          onClick={navigateToContacts}
        >
          <NotebookText className="h-5 w-5" />
          <span className="text-xs mt-1">Contatos</span>
        </button>

        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300"
          onClick={navigateToProfilechat}
        >
          <UserRoundCog className="h-5 w-5" />
          <span className="text-xs mt-1">Perfil</span>
        </button>
      </div>
    </div>
  );
}
