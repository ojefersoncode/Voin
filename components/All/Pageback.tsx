import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function Pageback() {
  const router = useRouter();

  return (
    <div className="px-4 ">
      <Button
        onClick={() => router.back()}
        className="text-text hover:text-btn bg-background hover:bg-background transition-all duration-200 cursor-pointer"
      >
        <ArrowLeft className="size-7 hover:size-8 transition-all duration-300" />
      </Button>
    </div>
  );
}
