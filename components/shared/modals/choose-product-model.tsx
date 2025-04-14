"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModel: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "min-w-[1060px] p-0 min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ChooseProductForm
          image={product.image}
          name={product.name}
          ingredients={[]}
        />
      </DialogContent>
    </Dialog>
  );
};
