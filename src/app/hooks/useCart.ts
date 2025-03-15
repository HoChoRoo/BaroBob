"use client";

import { useContext } from "react";
import { CartContext } from "./CartProvider";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider } from "./CartProvider";
