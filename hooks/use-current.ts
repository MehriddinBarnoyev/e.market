import { IProduct } from "@/Types";
import create from "zustand";
type Store = {
    currentProduct:IProduct | null;
    setCurrentProduct: (product: IProduct | null) => void;
}

export const useCurrentProduct = create  <Store>()((set) => ({
    currentProduct: null,
    setCurrentProduct: (product) => set({ currentProduct: product }),
  }));
  