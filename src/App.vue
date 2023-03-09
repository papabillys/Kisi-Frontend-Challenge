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
      //* TODO: Add check for error and notifications
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
