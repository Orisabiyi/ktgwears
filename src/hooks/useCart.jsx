import { useContext } from "react";
import { CartContext } from "@/context/cartcontext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a cartProvider");
  }
  return context;
};
