<template>
  <div class="home">
    <p>Super hero wiki</p>
    <div v-if="exist">
      <h2 v-if="shName !== '-'" id="shName">{{ this.shName }}</h2>
      <div id="sections">
        <div id="section1">
          <img class="image" :src="shImageURL">
          <div id="icons">
            <div v-if="!isFavorite">
              <img class="star icon" src="/icons/star.ico" v-on:click="make_favorite()" >
            </div>
            <div v-else>
              <img class="star icon" src="/icons/star_yellow.ico" v-on:click="delete_favorite()">
            </div>
            <twitter-button v-bind:isBlank="false" btnText class="twitterico"
              url="www.superherowiki.com"
              description="He buscado a mi superheroe favorito en esta pagina. ¿Qué esperas para ver el tuyo?"
            />
          </div>
        </div>
        <div id="section2">
          <p class="title"><b>General information</b> </p>
          <p v-if="shRealName !== '-'" ><b> Real name:</b> {{ this.shRealName }}</p>
            <p v-if="shBirthPlace !== '-'" ><b>Birth place:</b> {{ this.shBirthPlace }}</p>
            <p v-if="shPublisher !== '-'" ><b>Publisher:</b> {{ this.shPublisher }}</p>
            <p v-if="shWork !== '-'" ><b>Work:</b> {{ this.shWork }}</p>
            <div v-if="!shAppearance.length">
              <br>
              <p class="title"><b>Super Powers</b> </p>
              <div v-for="key in Object.keys(this.shAppearance)" :key="key">
                <div class="item"> 
                  <p class="capitalize"><b>{{ key }}:</b> </p>
                  <p>{{ this.shAppearance[key] }}</p>
                </div>
              </div>
            </div>
            <div v-if="!shPowerStats.length">
              <p class="title"><b>Apparence</b> </p>
              <div v-for="key in Object.keys(this.shPowerStats)" :key="key">
                <div class="item"> 
                  <p class="capitalize"><b>{{ key }}: </b> </p>
                  <p>{{ this.shPowerStats[key] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    <div id="notFound" v-else>
      There is no superhereo with this ID
    </div>
    
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import PouchDB from 'pouchdb-browser'
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
export default {
  name: 'Search',
  components: {
    TwitterButton
  },
  data: function(){
    return{
      exist:false,
      shName:String,
      shRealName:String,
      shBirthPlace:String,
      shPublisher:String,
      shImageURL:String,
      shAppearance:[],
      shPowerStats:[],
      shWork:String,
      isFavorite:false,
    }
  },
  methods:{
    cleanDic: function (data) {
      var dict = {}
      Object.keys(data).forEach( key =>
        dict[key.replace("-", " ")] = data[key]
      )
      return dict
    },

    parseData: function (data) {
      this.shName = data.name || "-"
      this.shImageURL = data.image['url']
      this.shRealName= data.biography['full-name'] || "-"
      this.shBirthPlace= data.biography['place-of-birth'] || "-"
      this.shPublisher = data.biography['publisher'] || "-"
      this.shWork = data.work.occupation || "-"
      this.shAppearance = this.cleanDic(data.appearance)
      this.shPowerStats = this.cleanDic(data.powerstats)
    },

    is_favorite: function () {
      const localDB = new PouchDB('HeroesDB');
      localDB.get(this.$route.params.id).then(() => {
        this.isFavorite=true
      })
      .catch(function () {
        // pass
        // console.log(err);
      });

    },

    make_favorite: function () {
      const localDB = new PouchDB('HeroesDB');
      localDB.put({
        _id: this.$route.params.id,
        image: this.shImageURL, 
        name: this.shName,
      }).then(() => {
        this.isFavorite= true
      }).catch(function (err) {
        console.log(err);
      });
      this.isFavorite= true
    },

    delete_favorite: function () {
      const localDB = new PouchDB('HeroesDB');
      localDB.get(this.$route.params.id).then(function(doc) {
        return localDB.remove(doc);
      }).then(() => {
        this.isFavorite= false
      }).catch(function (err) {
        console.log(err);
      });
      
    },


  },
  created(){
    axios.get(`https://superheroapi.com/api.php/2496364390592143/${this.$route.params.id}`, {
    headers: {
        'Content-Type': 'application/json'
    }
    }).then((result) => {
      // console.log(result.data)
      if (result.data.response !== "error") {this.parseData(result.data); this.exist=true}
    })
    this.is_favorite()
  }
}

</script>

<style>

  #shName{
    font-size: xx-large;
  }

  #sections{
    display: flex;
    justify-content: space-evenly;
  }

  #section1{
      display: flex;
      flex-direction: column;
      align-items: center;
   }

  #icons{
     display: flex;
     padding: 1rem;
   }

  .image{
    max-width: 15rem;
    height: auto;
  }

  .star{
    width: 3rem;
    cursor: pointer;
    margin-right: 1rem;
  }

  .twitterico{
    width: 2.9rem;
  }

  .item{
    display: flex;
    justify-content: center;
  }

  .title{
    font-size: x-large;
  }

  .capitalize{
    text-transform: capitalize;
  }

  @media (max-width: 750px) {
    #sections{
      display: flex;
      flex-direction: column;
    }
  }

</style>