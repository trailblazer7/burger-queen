'use client';
import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import ProductCard, { Product } from './product-card';
import { Title } from './title';
import { useCategoryStore } from '@/store/category';

export type ProductsListGroupType = {
  title: string;
  categoryId: number;
  items: Product[];
};

type Props = ProductsListGroupType & {
  title: string;
  categoryId: number;
  items: Product[];
};

const ProductsListGroup: React.FC<Props> = ({ categoryId, title, items }) => {
  const setCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setCategoryId]);

  return (
    <div id={title} ref={intersectionRef} className="flex flex-col">
      <Title text={title} size="md" className="mb-2 font-bold" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(({ id, imageUrl }) => (
          <ProductCard
            key={id}
            id={Number(imageUrl)}
            name="Burger Queen Bekonator"
            price={200}
            imageUrl={imageUrl}
            className="grid"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsListGroup;
