<template>
  <div class="favorite">
    <h2>Favorites</h2>
    <div v-if="favoritesHeroes.length" id="data">
        <div v-for="(item, index) in favoritesHeroes" :key="item.id">
            <div v-on:click="get_detail(item.id)" >
                <SearchElement :index=index+1 :image=item.doc.image :name=item.doc.name :item_id=item.id> 
                </SearchElement>
            </div>
        </div>
    </div>
    <div id="notFound" v-else>
      You haven`t save any superhero
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PouchDB from 'pouchdb-browser'
import SearchElement from '@/components/SearchElement.vue'
export default {
  name: 'Search',
  components: {
    SearchElement,
  },
  data: function(){
    return{
      favoritesHeroes:[],
    }
  },
  methods:{
    get_detail: function (id) {
      this.$router.push({ name: 'superheroDetail', params: { id: id } })
    }
  },
  created(){
    const localDB = new PouchDB('HeroesDB');
    localDB.allDocs({
        include_docs: true,
        attachments: true
    }).then((result) =>{
        this.favoritesHeroes = result.rows
    }).catch(function (err) {
    console.log(err);
    });
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
    font-size: large;
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