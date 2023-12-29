import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "~/api/products";

export interface FavoritesStore {
  setFavorites(favorites: Product[]): void;
  favorites: Product[];
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      setFavorites: (favorites: Product[]) => {
        set(() => ({ favorites }));
      },
    }),
    {
      name: "useFavoritesStore",
    }
  )
);
