import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';

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
    <div className=" w-full justify-center items-center px-4 bg-background">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {coinPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="bg-background text-btn border-btn p-4 py-6 flex flex-col items-center justify-center gap-2 rounded-xl  transition-colors cursor-pointer"
          >
            <Image
              height={960}
              width={960}
              className="size-12"
              src="/Coin/Coins.png"
              alt="logo"
            />
            <span className="text-lg font-titan">{pkg.amount} moedas</span>
            <span className="text-btn font-inter">{pkg.price}</span>
            <Button
              className="mt-2 w-full border bg-btn hover:bg-btn/80 font-inter text-background text-sm px-4 py-1 rounded-lg"
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
