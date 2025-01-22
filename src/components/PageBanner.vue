<script lang="ts">
export default {
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>{{ name }}</h3>
          <div class="breadcrumbs">
            <RouterLink :to="{ name: 'home' }">
              Home
            </RouterLink>
            <span>></span>
            <span>{{ name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.breadcrumbs * {
  color: white;
}
</style>
