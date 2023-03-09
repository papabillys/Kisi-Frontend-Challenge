<!-- 
  App Components is the main screen/container. 
  Loads MosaicLayout component with data as props an array of images. 
  Images are loaded from loadInfo.js function which is called when App.vue is mounted. 
 -->

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
      
      let qty = 7; // Set limit of the first images to load in the screen to 7
      let res = await helper.loadImagesNew(qty);

      // Check if there was error on loading data 
      if (res.errors != null || res.data.length == 0){ 
        console.log(res.errors); 
        alert(`There was an error.\nPlease reload the page :)`)
        return; 
      }

      this.images = res.data;    
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
  text-align: center;
  color: #C9CBFF; 
  background: linear-gradient(#222647, #191919);
  height: 100vh;
}
</style>
