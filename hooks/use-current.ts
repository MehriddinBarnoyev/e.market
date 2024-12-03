import { IProduct } from "@/Types";
type Store = {
    currentProduct:IProduct | null;
    setCurrentProduct: (product: IProduct | null) => void;
}

export const useCurrentProduct = cre  <Store>()((set) => ({
    currentProduct: null,
    setCurrentProduct: (product) => set({ currentProduct: product }),
  }));
  