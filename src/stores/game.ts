import { defineStore } from 'pinia';
import data from '../data.json';

interface GameState {
  games: Game[];
}

export interface Game {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
  discountPrice?: number | string;
  mostPlayed?: boolean;
  isTrending?: boolean;
  category: {
    id: string | number;
    name: string;
  };
  tags?: string[] | string;
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    games: data.games || [],
  }),
  getters: {
    trendingGames: (state) => state.games.filter((game) => game.isTrending),
    mostPlayed: (state) => state.games.filter((game) => !game.isTrending),
  },
  actions: {
    filteredGames(categoryId: number | string) {
      if (categoryId === 0) return this.games;

      return this.games.filter((game) => game.category.id === categoryId);
    },
  },
});
