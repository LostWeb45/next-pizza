import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { DialogTitle } from "../ui/dialog";

interface Props {
  image: string;
  name: string;
  //   ingredients: IProduct["ingredients"];
  //   items?: IProduct["items"];
  className?: string;
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  image,
  onClickAdd,
  className,
}) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totlaPrice = "350";
  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={image}
          alt={name}
          className="relative left-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

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
