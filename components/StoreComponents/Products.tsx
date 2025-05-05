import { Coins } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export default function Store() {
  const coinPackages = [
    { id: 1, amount: 100, price: 'R$ 1,99' },
    { id: 2, amount: 500, price: 'R$ 6,99' },
    { id: 3, amount: 1200, price: 'R$ 14,99' },
    { id: 4, amount: 2500, price: 'R$ 27,99' },
    { id: 5, amount: 5000, price: 'R$ 49,99' },
    { id: 6, amount: 10000, price: 'R$ 89,99' }
  ];

  const handlePurchase = (pkg: (typeof coinPackages)[number]) => {
    alert(`Você comprou ${pkg.amount} moedas por ${pkg.price}`);
    // Aqui futuramente: chamada para API de pagamento ou Supabase
  };

  return (
    <div className="w-full px-4 bg-[#0e0e0e] ">
      <h2 className="text-xl font-semibold text-white mb-4">
        Lojinha de Moedas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {coinPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="bg-[#181818] text-white p-4 flex flex-col items-center justify-center gap-2 rounded hover:bg-[#222222] transition-colors cursor-pointer"
          >
            <Coins className="size-6 text-yellow-400" />
            <span className="text-lg font-bold">{pkg.amount} moedas</span>
            <span className="text-green-500">{pkg.price}</span>
            <Button
              className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded-lg"
              onClick={() => handlePurchase(pkg)}
            >
              Comprar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
