'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui/input';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Top */}
      <CheckboxFiltersGroup
        title="Dough types"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={() => {}}
        selected={new Set()}
        items={[
          { text: 'Slim', value: '1' },
          { text: 'Tradicional', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={() => {}}
        selected={new Set()}
        items={[
          { text: '20 sm', value: '20' },
          { text: '30 sm', value: '30' },
          { text: '40 sm', value: '40' },
        ]}
      />

      {/* Price Filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={''}
            onChange={() => {}}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={''}
            onChange={() => {}}
          />
        </div>

        {/* <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[]}
          onValueChange={{}}
        /> */}
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[]}
        items={[]}
        loading={false}
        onClickCheckbox={() => {}}
        selected={new Set()}
      />
    </div>
  );
};

export default Filters;
