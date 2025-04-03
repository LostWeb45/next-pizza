"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title, RangeSlider } from "./";
import { Input } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { CheckboxFilterGroup } from "./checkbox-filters-group";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [prices, setPrice] = React.useState<PriceProps>({});

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, { arrayFormat: "comma" });

    router.push(`/?${query}`);
  }, [prices, pizzaTypes, sizes, ingredients, selectedIngredients, router]);

  return (
    <div className={cn(className)}>
      {/* Чекбоксы */}
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFilterGroup
        title="Тип теста"
        name="types"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selectedIds={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFilterGroup
        name="sizes"
        className="mb-5"
        title="Размеры"
        onClickCheckbox={toggleSizes}
        selectedIds={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      {/* Слайдер с ценами */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="0"
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />

        <CheckboxFilterGroup
          title="Ингридиенты"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={onAddId}
          selectedIds={selectedIngredients}
        />
      </div>
    </div>
  );
};
