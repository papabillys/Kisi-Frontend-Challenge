<template>

    <!-- TODO: Make the layout responsive -->

    <div 
      class="mosaicBasic"
      :class="{
        mosaicLess : images.length<=19 ? true : false,
        mosaicMore: images.length>19 ? true : false 
      }"
    >
  
     <div class="header">
       <h1>Kisi Project</h1>
     </div>
  
       <div 
         v-for="(image, index) in images" 
         :key="index"
         :style=" `grid-area: img${index+1};`"
       >
         <Card :image="image" />
       </div>
  
       <div style="grid-area: b">
         <div class="btnClass" @click="loadMoreImages()">
           <p>Button</p>
         </div>
      </div>
  
        
    </div>
  </template>
  
  <script>
  import Card from './Card.vue'
  import * as helper from '../helpers/loadInfo'
  
  export default {
     name: 'MosaicLayout',
     components: { Card },
     props: {
       images: {
         type: Array,
         required: true
       }
     }, 
     data() {
         return {  }
     },
     created(){ 
  
     }, 
     mounted(){ 
  
     }, 
     methods: {  
       async loadMoreImages(){ 
  
        if(this.images.length>=38)
          return;

        // Add notif to not load more images
  
        let qty = 3; 
        let res = await helper.loadImagesNew(qty);
        res.data.forEach((el)=> { 
          this.images.push(el); 
        })      
       } 
     }
  }
  </script>
  
  <style scoped>
  
  .mosaicBasic{ 
    border: 2px solid greenyellow;
    height: 90vh;
    width: 90%;
    margin: 0px auto;
    padding: 20px;
    display: grid;
    gap: 0.5rem;
  
    grid-template-rows: repeat(6,16%);
    grid-template-columns: repeat(12,7.5%);
  
  }
  
  .mosaicLess{ 
    grid-template-areas:
      't     t     t    t     img1  img1  img1  img1  img1  img8  img14 img16'
      'img2  img2  img2 img2  img1  img1  img1  img1  img1  img8  img11 img11'
      'img2  img2  img2 img2  img1  img1  img1  img1  img1  img18 img11 img11'
      'img3  img3  img3 img4  img4  img5  img5  img5  img5  img7  img7  img19'
      'img10 img10 img6 img6  img6  img5  img5  img5  img5  b     img9  img9'
      'img10 img10 f3   img12 img12 img15 img15 img15 img13 img17 img17 img17'
    ;
  }
  
  .mosaicMore{
    grid-template-areas:
      't     t     t     t     img1  img1  img1  img33 img13 img36 img31 img12'
      'img10 img27 img2  img2  img1  img1  img1  img20 img20 img24 img19 img12'
      'img29 img8  img2  img2  img1  img1  img1  img7  img7  img22 img22 img26'
      'img18 img3  img3  img4  img5  img5  img28 img23 img39 img21 img11 img26'
      'img9  img9  img37 img25 img5  img5  img6  img17 img15 b     img11 img32'
      'img34 img14 img14 img25 img38 img30 img6  img35 img35 img16 img16 img40'
    ;
  }
  
  .btnClass{ 
   background: #4A52FF;
   color: white; 
   font-size: 12px;
   border-radius: 25px;
   padding: 5px;
  
   grid-area: b;
  }
  
  .header{ 
   margin-bottom: 10px;
   grid-area: t;
  }
  
  </style>