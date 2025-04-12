import React from "react";

interface Props {
  image: string;
  name: string;
  // ingredients: IProduct
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
