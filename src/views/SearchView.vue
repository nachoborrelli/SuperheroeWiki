<template>
  <div id="app">
    <div class="home">
      <p>Super hero wiki</p>
      <div>
        <div class="inputandbutton">
          <input id="input" type="text" ref="input" v-on:keyup.enter="search" placeholder="Search a superheroe.." > 
          <button v-on:click="search" id="buttonbuscar"  > > </button>
        </div>
        
        <div class="buttons">
          <button class="button target" id="buttonName" v-on:click="searchMode(1)">Name</button>
          <button class="button" id="buttonID" v-on:click="searchMode(2)">ID</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SearchView',
  data: function(){
    return{
      mode:1
    }
  },
  components: {
  },
  methods: {
    search: function () {
      let input = this.$refs.input.value
      if (input !== ""){
        this.$router.push({ name: 'searchSelect', params: { input: input, mode:this.mode } })
      }
    },
    searchMode: function (num) {
      const buttonName = document.getElementById("buttonName")
      const buttonID = document.getElementById("buttonID")
      if (num==1){
        this.mode=1
        buttonName.classList.add('target');
        buttonID.classList.remove('target');
      }
      else{
        this.mode=2
        buttonID.classList.add('target');
        buttonName.classList.remove('target');
      }
    }
  }
}
</script>

<style scoped>
  #app{
      display: flex;
      height: calc(100vh - 60px);
      justify-content: center;
    }

  .home{
    width:100%;
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .inputandbutton{
    display: flex;
    align-items: baseline;
    width: calc(100vw - 4rem);
    justify-content: center;
  }

  #buttonbuscar{
    background: none;
    margin-left: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: 0.3rem;
    border-color: #80808096;
  }

  #input{
    width: 100vh;
    height: 1.5rem;
    border-radius: 0.5rem;
    border-color: #80808087;
    padding: 0.25rem;
  }
  

  /* .buttons{
    margin:1rem;
  } */

  .button{
    background: none;
    width: 5rem;
    height: 2rem;
    border-radius: 3rem;
    margin:1rem
  }

  .target {
    background-color: #87878762;
  }

</style>