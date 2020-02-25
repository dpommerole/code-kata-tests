<template>
  <div class="beer-catalog container">
    <div class="beer-catalog--list">
      <div class="columns is-multiline">
        <BeerItem
          class="beer-catalog__item column is-one-fifth"
          v-for="beer in beerList" 
          :key="beer.id" 
          :beer="beer">
        </BeerItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerItem from '@/components/BeerItem.vue'
export default {
  name: 'BeerCatalog',
  components: {
    BeerItem
  },
  computed: {
    ...mapGetters({
      beerList: 'getBeerList'
    })
  },
  methods: {
    ...mapActions({
      fetchBeers: 'fetchBeersList'
    })
  },
  async mounted () {
    await this.fetchBeers()
  }
}
</script>

<style scoped lang="scss">

  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/base/helpers.sass";
  @import "bulma/sass/grid/_all.sass";


  .beer-catalog__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>
