import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { log } from "console";
import React from "react";

interface ReturnProps {
  items: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll;
        return ingredients;
      } catch (err) {
        console.log(err);
      }
    }

    fetchIngredients();
  }, []);
};
