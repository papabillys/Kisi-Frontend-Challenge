<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import * as helper from './helpers/loadInfo'

export default {
  name: 'App',
  components: {  }
  ,
  async mounted(){ 
    console.log('Mounted'); 
    await this.loadBaseImages(); 
  },  
  data(){ 
    return { 
      images: [], 
    }
  },
  methods: {
    async loadBaseImages(){ 
      let qty = 7; 
      let res = await helper.loadImagesNew(qty);
      //* Add check for error 
      this.images = res.data;       
    },
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
