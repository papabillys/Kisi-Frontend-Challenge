<template>

  <MosaicLayout :images="images"/>

</template>

<script>
import MosaicLayout from './components/MosaicLayout.vue'
import * as helper from './helpers/loadInfo'

export default {
  name: 'App',
  components: {
    MosaicLayout,
  }, 
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
      console.log(this.images)   
    },
  }
}
</script>


<style>
*{ 
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
