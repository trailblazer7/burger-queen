import { Title, Container, TopBar, Filters } from '@/components/shared';
import ProductsListGroup, {
  ProductsListGroupType,
} from '@/components/shared/products-list-group';

const products_groups: ProductsListGroupType[] = [
  {
    title: 'Burgers',
    categoryId: 1,
    items: [
      {
        id: 1,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/texas-beef-desktop-07c6b01478eb4243f0e35564a4efe75a.webp',
      },
      {
        id: 2,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/long-cheeseburger-desktop-4873be6f16012072977c3ae73d32e985.webp',
      },
      {
        id: 3,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/chili-cheese-double-beef-desktop-ab557a3215b42dffd7cfffd66b8bd4af.webp',
      },
      {
        id: 4,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/bacon-king-desktop-f82f4dfe6e9e09616a5e4acb449ee4e8.webp',
      },
      {
        id: 5,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/cheeseburger-desktop-328f089351dae21d4d0df2d6c1eb32a3.webp',
      },
      {
        id: 6,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/texas-beef-desktop-07c6b01478eb4243f0e35564a4efe75a.webp',
      },
      {
        id: 7,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/long-cheeseburger-desktop-4873be6f16012072977c3ae73d32e985.webp',
      },
      {
        id: 8,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/chili-cheese-double-beef-desktop-ab557a3215b42dffd7cfffd66b8bd4af.webp',
      },
      {
        id: 9,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/bacon-king-desktop-f82f4dfe6e9e09616a5e4acb449ee4e8.webp',
      },
      {
        id: 10,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/cheeseburger-desktop-328f089351dae21d4d0df2d6c1eb32a3.webp',
      },
    ],
  },
  {
    title: 'Vegetables',
    categoryId: 2,
    items: [
      {
        id: 11,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/texas-beef-desktop-07c6b01478eb4243f0e35564a4efe75a.webp',
      },
      {
        id: 12,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/long-cheeseburger-desktop-4873be6f16012072977c3ae73d32e985.webp',
      },
      {
        id: 13,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/chili-cheese-double-beef-desktop-ab557a3215b42dffd7cfffd66b8bd4af.webp',
      },
      {
        id: 14,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/bacon-king-desktop-f82f4dfe6e9e09616a5e4acb449ee4e8.webp',
      },
      {
        id: 15,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/cheeseburger-desktop-328f089351dae21d4d0df2d6c1eb32a3.webp',
      },
      {
        id: 16,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/texas-beef-desktop-07c6b01478eb4243f0e35564a4efe75a.webp',
      },
      {
        id: 17,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/long-cheeseburger-desktop-4873be6f16012072977c3ae73d32e985.webp',
      },
      {
        id: 18,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/chili-cheese-double-beef-desktop-ab557a3215b42dffd7cfffd66b8bd4af.webp',
      },
      {
        id: 19,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/bacon-king-desktop-f82f4dfe6e9e09616a5e4acb449ee4e8.webp',
      },
      {
        id: 20,
        name: 'Bekonator',
        price: 200,
        imageUrl:
          'https://www.burgerking.lv/images/optimized/products/cheeseburger-desktop-328f089351dae21d4d0df2d6c1eb32a3.webp',
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Container className="mt-6">
        <Title size="lg" text="All Burgers" className="font-extrabold"></Title>
      </Container>
      <TopBar />
      <Container className="mt-4 flex gap-6">
        <div className="w-[250px]">
          <Filters />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          {products_groups.map((group) => (
            <ProductsListGroup
              key={group.categoryId}
              title={group.title}
              categoryId={group.categoryId}
              items={group.items}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
