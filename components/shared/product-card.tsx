import Image from 'next/image';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type Props = Product & {
  className?: string;
};

const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  // TODO: Remove it
  if (id) {
  }
  return (
    <div className={cn('bg-gray-50 p-4 rounded-md', className)}>
      <Link href="/product/1">
        <div className="flex justify-center">
          <Image
            width={230}
            height={230}
            alt="Burger Queen Product"
            src={imageUrl}
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-grey-400">Ingredients</p>
        <div className="flex justify-between items-center mt-4">
          <span>
            from <b>{price} $</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
