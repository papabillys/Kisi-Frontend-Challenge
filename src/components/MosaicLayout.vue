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
  
       <div class="btnContainer">
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
  
        if(this.images.length>=38){
            alert(`We reached the max limit on images.\nI can load 40 images only.\nThank you :) `)
            return;
        }
  
        let qty = 3; 
        let res = await helper.loadImagesNew(qty);
        
        if (res.errors != null || res.data.length == 0){ 
            console.log(res.errors); 
            alert(`There was an error.\nPlease reload the page :)`)
            return; 
        }
        
        res.data.forEach((el)=> { 
          this.images.push(el); 
        })      
       } 
     }
  }
  </script>
  
<style scoped>

    
.btnContainer{ 
    grid-area: b;
    align-self: center;
}

.btnClass{ 
   background: #4A52FF;
   color: white; 
   border-radius: 25px;
   padding: 5px;
   /* grid-area: b; */
  }
  
  .header{ 
   grid-area: t;
  }
  
  /* .mosaicBasic{ 
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
  } */


  .mosaicBasic{ 
    height: 90vh;
    width: 90%;
    margin: 0px auto;
    display: grid;
  }










@media (min-width: 120px) {
  .btnClass{
    font-size: 10px;
  }
  .header{ 
    margin: 10px auto;
    font-size: 12px;
  }
  .mosaicBasic {
    padding: 5px;
    padding-top: 20px;
    grid-template-rows: repeat(10,8%);
    gap: 0.3rem;
  }
  .mosaicLess{ 
    grid-template-columns: repeat(3,30%);
    grid-template-areas:
      't      t      t    '
      'img1   img2   img2 '
      'img1   img3   b    '
      'img4   img5   img5 '
      'img7   img6   img8 '
      'img7   img9   img9 '
      'img13  img10  img11'
      'img15  img14  img12'
      'img15  img16  img17'
      'img19  img18  img17'
    ;
  }
  .mosaicMore{ 
    grid-template-columns: repeat(5,18%);
    grid-template-areas:
      't      t      t      t      t'
      'img1   img2   img2   img5   img6'
      'img1   img3   img4   b      img7'
      'img8   img9   img11  img10  img12'
      'img14  img9   img13  img15  img15'
      'img19  img16  img17  img18  img20'
      'img25  img21  img22  img24  img23'
      'img26  img29  img27  img28  img30'
      'img33  img32  img34  img35  img31'
      'img39  img38  img37  img40  img36'
  }
}

@media (min-width: 320px) {
  .btnClass{
    font-size: 10px;
  }
  .header{ 
    margin: 10px auto;
    font-size: 12px;
  }
  .mosaicBasic {
    padding: 5px;
    padding-top: 20px;
    gap: 0.4rem;
  }
  .mosaicLess{ 
    grid-template-columns: repeat(4,22%);
    grid-template-rows: repeat(9,10%);
    grid-template-areas:
      't      t      t     t'
      'img1   img1   img1  img1'
      'img2   img2   img2    b'
      'img3   img3   img4  img4'
      'img5   img6   img7  img8'
      'img10  img10  img9  img9'
      'img11  img12  img13 img14'
      'img15  img16  img16 img19'
      'img15  img17  img18 img19'
    ;
  }
  .mosaicMore{ 
    grid-template-columns: repeat(5,18%);
    grid-template-rows: repeat(10,9%);

    grid-template-areas:
      't      t      t      t      t'
      'img1   img2   img2   img5   img6'
      'img1   img3   img4   b      img7'
      'img8   img9   img11  img10  img12'
      'img14  img9   img13  img15  img15'
      'img19  img16  img17  img18  img20'
      'img25  img21  img22  img24  img23'
      'img26  img29  img27  img28  img30'
      'img33  img32  img34  img35  img31'
      'img39  img38  img37  img40  img36'
  }
}

@media (min-width: 640px) {
  .btnClass{
    font-size: 12px;
  }
  .header{ 
    margin: 10px auto;
    font-size: 1em;
  }
  .mosaicBasic {
    padding: 5px;
    padding-top: 20px;
    gap: 0.5rem;
    grid-template-rows: repeat(6,16%);
    grid-template-columns: repeat(12,7%);
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

}

</style>