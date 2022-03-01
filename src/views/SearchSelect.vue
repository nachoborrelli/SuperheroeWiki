<template>
  <div class="home">
    <p>Super hero wiki</p>
    <div v-if="searchItems" id="data">
      <div v-for="(item, index) in searchItems" :key="item.id">
        <div v-on:click="get_detail(item.id)" >
          <SearchElement :index=index+1 :image=item.image.url :name=item.name :item_id=item.id> 
          </SearchElement>
        </div>
      </div>
    </div>
    <div id="notFound" v-else>
        No se han encontrado superheroes.
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SearchElement from '@/components/SearchElement.vue'
import axios from "axios";
export default {
  name: 'Search',
  components: {
    SearchElement,
  },
  data: function(){
    return{
      searchItems:[]
    }
  },
  methods:{
    get_detail: function (id) {
      this.$router.push({ name: 'superheroDetail', params: { id: id } })
    }
  },
  created(){
    console.log(this.$route.params.mode)
    if(this.$route.params.mode == "1"){
      axios.get(`https://superheroapi.com/api.php/2496364390592143/search/${this.$route.params.input}`, {
      headers: {
          'Content-Type': 'application/json'
      }
      }).then((result) => {
        this.searchItems = result.data.results
      })
    }
    else{
      this.$router.push({ name: 'superheroDetail', params: { id: this.$route.params.input } })
    }
    
  }
}

</script>

<style>

  #home{
    height:100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  #notFound{
    margin-top: 20%;
  }

  #data{
    margin: 3rem;
  }

  @media (max-width: 750px) {
    #data{
      margin: 1.5rem;
    }
  }

</style>