<template>
  <div id="app"> 
    <div class="home">
      <h2 id="title">Super hero wiki</h2>
      <p id="contentData">Esta app esta desararollada para la facultad de Informatica de La Plata, 
          para la materia "Enfoques para el Desarrollo de Aplicaciones Móviles Multiplataforma"</p>
      <p id="student">Alumno: Juan Ignacio Borrelli</p>
      <p id="year">2022</p>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Search',
  data: function(){
    return{
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

  #home{
    height:100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  #title{
    font-size: xxx-large;
  }

  #contentData{
    font-size: larger;
    margin-left: 15rem;
    margin-right: 15rem;
  }

  #student{
    font-size: large;
  }

  @media (max-width: 1200px) {
    #contentData {
      margin-left: 8rem !important;
      margin-right: 8rem !important;
    }
  }

  @media (max-width: 750px) {
    #contentData {
      margin-left: 4rem !important;
      margin-right: 4rem !important;
    }
  }

</style>