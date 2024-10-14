import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px] px-6', className)}>
      {children}
    </div>
  );
};

export default Container;
