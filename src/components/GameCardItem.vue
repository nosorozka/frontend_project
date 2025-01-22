<script lang="ts">
import { RouterLink } from 'vue-router';
import { Icon } from "@iconify/vue";

export default {
  components: {
    RouterLink,
    Icon
  },
  props: {
    game: {
      type: Object,
      required: true
    },
    isAlt: { type: Boolean, default: false }
  },
}

</script>
<template>
  <div v-if="isAlt" class="col-lg-2 col-md-6 col-sm-6">
    <div class="item">
      <div class="thumb">
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          <img :src="game.image" alt="" class="image">
        </RouterLink>
      </div>
      <div class="down-content">
        <span class="category">{{ game.category.name }}</span>
        <h4>{{ game.name }}</h4>
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          Explore
        </RouterLink>
      </div>
    </div>
  </div>
  <div v-else class="col-lg-3 col-md-6">
    <div class="item">
      <div class="thumb">
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          <img :src="game.image" alt="" class="image">
        </RouterLink>
        <span class="price"><em>${{ game.price }}</em><span v-if="game.discountPrice || game.discountPrice === 0">${{
          game.discountPrice
        }}</span></span>
      </div>
      <div class="down-content">
        <span class="category">{{ game.category.name }}</span>
        <h4>{{ game.name }}</h4>
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          <Icon icon="ic:round-shopping-bag" :width="24"></Icon>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  object-fit: cover;
  max-height: 100%;
}
</style>
