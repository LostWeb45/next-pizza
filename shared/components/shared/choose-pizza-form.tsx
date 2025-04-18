import { cn } from "@/shared/lib/utils";
import React from "react";
import { GroupVariants, PizzaImage } from ".";
import { Button } from "../ui";
import { DialogTitle } from "../ui/dialog";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";

interface Props {
  image: string;
  name: string;
  //   ingredients: IProduct["ingredients"];
  //   items?: IProduct["items"];
  ingredients: any[];
  items?: any[];
  className?: string;
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  image,
  ingredients,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetails = "30 см, традиционное тесто 30";
  const totlaPrice = "350";

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
