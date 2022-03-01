<template>
  <div id="screen">
    <router-view/>
  </div>
  <router-view name="bar"></router-view>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

</style>
