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
  data() {
    return {}
  },
  computed: {
    ...mapState(useGameStore, ['mostPlayed'])
  }
}

</script>
<template>
  <div class="section most-played">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>TOP GAMES</h6>
            <h2>Most Played</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <RouterLink :to="{ name: 'shop' }">View All</RouterLink>
          </div>
        </div>
        <GameCardItem v-for="game in mostPlayed" :key="game.id" :game="game" :isAlt="true" />
        <!-- <GameCardItem :isAlt="true" /> -->
        <!-- <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="/images/top-game-02.jpg" alt=""></a>
            </div>
            <div class="down-content">
              <span class="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="/images/top-game-03.jpg" alt=""></a>
            </div>
            <div class="down-content">
              <span class="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="/images/top-game-04.jpg" alt=""></a>
            </div>
            <div class="down-content">
              <span class="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="/images/top-game-05.jpg" alt=""></a>
            </div>
            <div class="down-content">
              <span class="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="/images/top-game-06.jpg" alt=""></a>
            </div>
            <div class="down-content">
              <span class="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
