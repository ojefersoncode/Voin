import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function Pageback() {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={() => router.back()}
        className="text-text hover:text-btn px-2 py-0 bg-background hover:bg-background transition-all duration-300 cursor-pointer"
      >
        <ArrowLeft className="size-7" />
      </Button>
    </div>
  );
}
