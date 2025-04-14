import { cn } from "@/lib/utils";
import React from "react";
import { PizzaImage } from "./";
import { Button } from "../ui";
import { DialogTitle } from "../ui/dialog";

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
  const textDetails = "30 см, традиционное тесто 30";
  const totlaPrice = "350";
  const size = 30;
  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage image={image} size={30} />

      <div className="w-[490px] bg-[#f9f8f8] p-7">
        <DialogTitle className="text-[26px] font-extrabold mb-1">
          {name}
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>
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
