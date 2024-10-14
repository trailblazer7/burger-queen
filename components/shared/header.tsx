import Image from 'next/image';
import Container from './container';
import { Button } from '../ui/button';
import { CircleUserRound, ShoppingCart } from 'lucide-react';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = () => {
  return (
    <header className="border-b-[1px]">
      <Container className="flex justify-between">
        {/* Left side */}
        <div className="flex p-4">
          <Image
            alt="Burger Queen"
            src="/images/burger-icon.png"
            width={100}
            height={100}
          />
          <div className="flex flex-col ml-4 justify-center">
            <h1 className="font-black uppercase text-2xl leading-5">
              Burger Queen
            </h1>
            <p>Tasty burger in your city</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button className="gap-2" variant="outline">
            <CircleUserRound width={16} />
            Log In
          </Button>
          <Button className="gap-2">
            <b>12 $</b>
            <div className="h-full w-[1px] mx-1 bg-gray-300"></div>
            <ShoppingCart />2
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
