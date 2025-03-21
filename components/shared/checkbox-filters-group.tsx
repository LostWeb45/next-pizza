import React from "react";
import { cn } from "@/lib/utils";
import { FilterChecboxProps } from "./filter-checkbox";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <p className="font-bold mb-3">{title}</p>
    </div>
  );
};
