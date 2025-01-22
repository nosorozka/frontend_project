<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  },
  props: {
    category: {
      type: Object,
      required: true
    },
  },
  mounted() {
    console.log(this.category);
  },
  data() { return {} },
}
</script>
<template>
  <div class="col-lg col-sm-6 col-xs-12">
    <div class="item">
      <h4>{{ category.name }}</h4>
      <div class="thumb">
        <!-- <a href="product-details.html"><img src="/images/categories-01.jpg" alt=""></a> -->
        <RouterLink :to="{
          name: 'shop', query: {
            category: category.id,
          }
        }">
          <img :src="category.image" alt="">
        </RouterLink>
      </div>
    </div>
  </div>
</template>
