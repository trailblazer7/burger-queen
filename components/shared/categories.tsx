'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const categories = [
  'Burgers',
  'Vegetables',
  'Beconators',
  'Double',
  'Triple',
  'Queens',
];

const Categories: React.FC<Props> = ({ className }) => {
  const categoryId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map((category, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryId === index + 1 &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={category.replaceAll(' ', '-').toLowerCase()}
          href={`/#${category}`}
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default Categories;
