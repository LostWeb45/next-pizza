"use client";

import React from "react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "..";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModel: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "min-w-[1060px] p-0 min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            image={product.image}
            name={product.name}
            ingredients={[]}
          />
        ) : (
          <ChooseProductForm image={product.image} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
