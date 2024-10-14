import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup } from './';

interface Props {
  className?: string;
}

const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-2 bg-white', className)}>
      <Container className="flex justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
