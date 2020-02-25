<template>
  <div class="home container">
    <BeerCatalog>
    </BeerCatalog>
  </div>
</template>

<script>
import BeerCatalog from '@/components/BeerCatalog.vue'

export default {
  name: 'home',
  components: {
    BeerCatalog
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }
</style>
