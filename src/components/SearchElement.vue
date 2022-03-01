<template>
  <div class="container">
    <h4 class="item">{{ index }}.</h4>
    <img class="image item" :src="image">
    <h3 class="item">{{ name }}</h3>
    <p>></p>
    
  </div>
</template>

<script>
export default {
  name: 'SearchElement',
  props: {
    index: Number,
    name: String,
    image: String,
    item_id: String
  }
}
</script>

<style scoped>
  .container{
      display:flex;
      align-items: center;
  }
  .image{
      height: 40px;
      width: 40px;
      /* los siguientes valores son independientes del tamaño del círculo */
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      background-size: 100% auto;
  }
  .item{
      margin: 10px;
  }

</style>