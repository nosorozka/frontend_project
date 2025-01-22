<script lang="ts">
import { RouterLink } from 'vue-router';
export default {
  components: {
    RouterLink,
  },
  data() {
    return {}
  },
}
</script>


<template>
  <header class="header-area background-header header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <RouterLink :to="{ name: 'home' }" class="logo">
              <img src="/images/logo.png" alt="" style="width: 158px;">
            </RouterLink>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li>
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'shop' }">Our Shop</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
              </li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
