<script lang="ts">
import { mapState } from 'pinia';
import { useGameStore } from '@/stores/game';

import GameCardItem from './GameCardItem.vue';
import { RouterLink } from 'vue-router';

export default {
  components: {
    GameCardItem,
    RouterLink
  },
  data() { return {} },
  computed: {
    ...mapState(useGameStore, ['trendingGames'])
  }
}
</script>
<template>
  <div class="section trending">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Trending</h6>
            <h2>Trending Games</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <RouterLink :to="{ name: 'shop' }">View All</RouterLink>
          </div>
        </div>
        <GameCardItem v-for="game in trendingGames" :key="game.id" :game="game" :isAlt="false" />
      </div>
    </div>
  </div>
</template>
