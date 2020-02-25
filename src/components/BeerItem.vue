<template>
  <div class="card is-shady">
    <div class="card-image">
      <img class="image" :src="beer.image_url"/>
    </div>
    <div class="card-content">
      <div class="content">
      {{beer.name}}
      </div>
    </div>
    <div class="card-footer">
      <span class="card-footer--button" @click="goToDetail(beer.id)"> Découvrir </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeerItem',
  props: {
    beer: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push({name: 'beer', params: { id: id}})
    }
  }
}
</script>

<style scoped lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/helpers.sass";
@import "bulma/sass/components/card.sass";
@import "bulma/sass/elements/image.sass";

  .image {
    width: 30%;
    margin: auto;
  }

  .card {
    &-image {
      margin: auto;
    }
  }

  .card-footer{
    justify-content: center;
    background-color: aliceblue;

    &--button {
      text-decoration: underline;
    }
  }
  
</style>