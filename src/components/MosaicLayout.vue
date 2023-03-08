<template>
    <div class="mosaic">
 
     <div class="header">
       <h1>Kisi Project</h1>
     </div>
 
 
       <div>
         <div class="btnClass" @click="loadMoreImages()">
           <p>Button</p>
         </div>
       </div>
 
        
    </div>
 </template>
 
 <script>
 import * as helper from '../helpers/loadInfo'
 
 export default {
     name: 'MosaicLayout',
     components: { },
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
        console.log(this.images)
     }, 
     mounted(){ 
 
     }, 
     methods: {  
       async loadMoreImages(){ 
        let qty = 3; 
        let res = await helper.loadImagesNew(qty);
        res.data.forEach((el)=> { 
            this.images.push(el); 

        })
        console.log(this.images)
       } 
     }
 }
 </script>
 
 <style scoped>
 .mosaic {
    border: 2px solid blueviolet;
 }
  
 .btnClass{ 
   background: #4A52FF;
   color: white; 
   font-size: 12px;
   border-radius: 25px;
   padding: 5px;
 }
 
 .header{ 
   /* padding: 10px; */
   margin-bottom: 10px;
 }
 
 </style>