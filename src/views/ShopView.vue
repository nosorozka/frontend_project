<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useGameStore, type Game } from '@/stores/game';
import { useCategoryStore } from '@/stores/categories';

import GameCardItem from '@/components/GameCardItem.vue';
import PageBanner from '@/components/PageBanner.vue';


export default {
  components: {
    PageBanner,
    GameCardItem
  },
  computed: {
    ...mapState(useCategoryStore, ['categories']),
  },
  data() {
    return {
      games: [] as Game[],
      activeCategory: 0 as string | number
    }
  },
  methods: {
    ...mapActions(useGameStore, ['filteredGames']),

    changeCategory(categoryId: number | string) {
      this.activeCategory = categoryId;
    }
  },
  mounted() {
    console.log(this.$route.query);

    const categoryFromQuery = this.$route.query.category as string;

    if (categoryFromQuery) {
      this.activeCategory = categoryFromQuery;
    }

    this.games = this.filteredGames(+this.activeCategory)
  },
  watch: {
    activeCategory() {
      this.games = this.filteredGames(+this.activeCategory)
    }
  }
}
</script>

<template>
  <main>
    <PageBanner name="Our Shop" />
    <div class="section trending">
      <div class="container">
        <ul class="trending-filter">
          <li @click="changeCategory(0)">
            <span :class="{ 'is_active': activeCategory === 0 }">Show All</span>
          </li>
          <li v-for="category in categories" :key="category.id" @click="changeCategory(category.id)">
            <span :class="{ 'is_active': category.id == activeCategory }"> {{ category.name }}</span>
          </li>
        </ul>
        <div class="row trending-box" v-auto-animate>
          <!-- <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
            <div class="item">
              <div class="thumb">
                <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt=""></a>
                <span class="price"><em>$36</em>$24</span>
              </div>
              <div class="down-content">
                <span class="category">Action</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
              </div>
            </div>
          </div> -->
          <GameCardItem v-for="game in games" :key="game.id" :game />
        </div>
      </div>
    </div>
  </main>

</template>
