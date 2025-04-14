import { useRouter } from "next/navigation";
import { Filters } from "./use-filters";
import QueryString from "qs";
import React from "react";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const newQuery = QueryString.stringify(params, { arrayFormat: "comma" });
    const currentQuery = window.location.search.slice(1); // или из Next.js router.query

    if (newQuery !== currentQuery) {
      router.push(`/?${newQuery}`, { scroll: false });
    }
  }, [filters, router]);
};
