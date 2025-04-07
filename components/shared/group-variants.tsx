import React from "react";
import { cn } from "@/lib/utils";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant["value"]) => void;
  selecteValue?: Variant["value"];
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  selecteValue,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map((item) => (
        <button key={item.name} onClick={() => onClick?.(item.value)}></button>
      ))}
    </div>
  );
};
