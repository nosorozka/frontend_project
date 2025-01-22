import { defineStore } from 'pinia';
import data from '../data.json';

interface CategoriesState {
  categories: Category[];
}

interface Category {
  id: string | number;
  name: string;
  image: string;
}

export const useCategoryStore = defineStore('categories', {
  state: (): CategoriesState => ({
    categories: data.categories || [],
  }),
});
