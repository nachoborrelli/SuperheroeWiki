<template>
  <div class="container">
    <img class="item" id="houseIco" src="/icons/house.ico" v-on:click="this.$router.push({ name: 'home'})" >|
    <img class="item" id="lupaIco" src="/icons/lupa.ico" v-on:click="this.$router.push({ name: 'searchView'})">|
    <img class="item" id="starIco" src="/icons/star.ico" v-on:click="this.$router.push({ name: 'favorites'})">

  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  // mounted(){
  //   let ids = ["houseIco","lupaIco","starIco"]
  //   let img = document.getElementById(ids[this.selected])
  //   console.log(img.src)
  // }
}
</script>

<style scoped>
    .container{
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        position: fixed;
        bottom: 0px;
        width: 100%;
        background: white;
        border-top: 1px solid #f4f4f4;
    }

    .item{
        margin: 10px;  
    }

    #houseIco{
        width: 2rem;
    }

    #lupaIco {
        width: 1.9rem;
    }

    #starIco{
        width: 2.3rem;
    }

</style>