'use client';

import { useState } from 'react';

export default function Store() {
  const [selected, setSelected] = useState<string>('pix');
  const [agreed, setAgreed] = useState(false);

  const handleSelect = (method: string) => setSelected(method);
  const handleContinue = () => {
    if (!agreed) return alert('Você precisa aceitar os termos');
    alert(`Método selecionado: ${selected}`);
  };

  return (
    <div className="w-full flex-1 h-screen bg-background text-white flex flex-col">
      {/* Conteúdo que pode rolar */}
      <div className="p-4 space-y-6">
        {/* Tabs */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 bg-[#1c1c1e] rounded-full w-fit overflow-hidden pt-4">
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                selected !== 'withdraw'
                  ? 'bg-white text-black font-medium'
                  : 'text-white'
              }`}
              onClick={() => setSelected('pix')}
            >
              Depositar
            </button>
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                selected === 'withdraw'
                  ? 'bg-white text-black font-medium'
                  : 'text-white'
              }`}
              onClick={() => setSelected('withdraw')}
            >
              Sacar
            </button>
          </div>

          <div className="text-sm text-white/60">BRL ▾</div>
        </div>

        <h2 className="text-base font-medium">Selecione um método de depósito</h2>

        {/* Recomendado */}
        <div className="space-y-2">
          <p className="text-sm text-white/60">Recomendado</p>
          <div
            onClick={() => handleSelect('pix')}
            className={`border rounded-xl p-4 bg-[#1c1c1e] flex justify-between items-center cursor-pointer ${
              selected === 'pix' ? 'border-blue-400' : 'border-transparent'
            }`}
          >
            <div>
              <p className="font-medium">Transferência Bancária (PIX)</p>
              <div className="flex gap-2 mt-1 text-xs text-white/60">
                <span className="bg-white/10 px-2 py-0.5 rounded">Taxa 0</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Instantâneo</span>
              </div>
            </div>
            <span className="text-xs text-text bg-blue-900 px-2 py-0.5 rounded">
              Mais usado
            </span>
          </div>
        </div>

        {/* Outros */}
        <div className="space-y-2">
          <p className="text-sm text-white/60">Outros</p>

          <div
            onClick={() => handleSelect('picpay')}
            className={`border rounded-xl p-4 bg-[#1c1c1e] flex justify-between items-center cursor-pointer ${
              selected === 'picpay' ? 'border-blue-400' : 'border-transparent'
            }`}
          >
            <div>
              <p className="font-medium">PicPay</p>
              <p className="text-sm text-white/60 mt-1">
                Basta concluir o pagamento com seu aplicativo PicPay
              </p>
              <div className="flex gap-2 mt-2 text-xs text-white/60">
                <span className="bg-white/10 px-2 py-0.5 rounded">Taxa 0</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">Instantâneo</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleSelect('ted')}
            className={`border rounded-xl p-4 bg-[#1c1c1e] flex justify-between items-center cursor-pointer ${
              selected === 'ted' ? 'border-blue-400' : 'border-transparent'
            }`}
          >
            <div>
              <p className="font-medium">Transferência Bancária (TED)</p>
              <div className="flex gap-2 mt-1 text-xs text-white/60">
                <span className="bg-white/10 px-2 py-0.5 rounded">Taxa 0</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">1–2 dias úteis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé fixo */}
      <div className="w-full p-4 fixed bottom-0 border-t border-zinc-700 p-4 space-y-4 bg-[#0f0f0f]">
        <label className="flex items-center text-sm gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          Eu li e concordo com os
          <span className="text-blue-600 underline"> Termos e Condições</span>
        </label>
        <button
          onClick={handleContinue}
          className="bg-btn w-full py-3 rounded-lg font-medium text-text hover:bg-btn/80"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
