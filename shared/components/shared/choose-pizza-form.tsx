import { cn } from "@/shared/lib/utils";
import React from "react";
import { GroupVariants, IngredientItem, PizzaImage } from ".";
import { Button } from "../ui";
import { DialogTitle } from "../ui/dialog";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { useSet } from "react-use";

interface Props {
  image: string;
  name: string;
  //   ingredients: IProduct["ingredients"];
  //   items?: IProduct["items"];
  ingredients: Ingredient[];
  items: ProductItem[];
  className?: string;
  onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  image,
  ingredients,
  onClickAddCart,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

  const pizzaPrice = items.find(
    (item) => item.pizzaType == type && item.size == size
  )!.price;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totlaPrice = pizzaPrice + totalIngredientsPrice;

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log(handleClickAdd);
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage image={image} size={size} />

      <div className="w-[490px] bg-[#f9f8f8] p-7">
        <DialogTitle className="text-[26px] font-extrabold mb-1">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-2 mt-3">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-3">
          <div className="grid grid-cols-3 gap-2">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={String(ingredient.price)}
                image={ingredient.image}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          //   loading={loading}
          //   onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totlaPrice} ₽
        </Button>
      </div>
    </div>
  );
};
