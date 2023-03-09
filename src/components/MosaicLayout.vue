<!-- 
    This component is used for the mosaic layout of the cards/images. 
    It is called from App component with props an array of images. 
    When user clicks on the button, it loads 3 more images and supports up to 40 total cards. 
    
    It uses grid layout in order to appear as mosaic. Also there is a breakpoint on rearranging 
    the layout. When images are less than 19, they fill up to cover whole page, but when images are 
    more than 19, up to 40, layout rearranges to fit more cards.
 -->
<template>
    
    <!-- 
        apply the grid layout based on the number of cards
     -->
    <div 
        class="mosaicBasic" 
        :class="{
            mosaicLess: images.length <= 19 ? true : false,
            mosaicMore: images.length > 19 ? true : false
        }"
    >

        <!-- Project title -->
        <div class="header">
            <h1>Kisi Project</h1>
        </div>

        <!-- Card of images -->
        <div v-for="(image, index) in images" :key="index" :style="`grid-area: img${index + 1};`">
            <!-- grid areas are named like img1, img2 etc so use :style to apply the grid-area to each card -->
            <Card :image="image" />
        </div>

        <!-- Button to load more images -->
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
        return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {
        async loadMoreImages() {

            // The max limit of images loaded is 40.
            // Initial number of images is 7 and after that, every button click loads 3 more images

            // Check images max limit
            if (this.images.length >= 38) {
                alert(`We reached the max limit on images.\nI can load 40 images only.\nThank you :) `)
                return;
            }

            // Load images 
            let qty = 3;
            let res = await helper.loadImagesNew(qty);

            // check for errors
            if (res.errors != null || res.data.length == 0) {
                console.log(res.errors);
                alert(`There was an error.\nPlease reload the page :)`)
                return;
            }

            // Add the images to the existing array of images
            res.data.forEach((el) => {
                this.images.push(el);
            })
        }
    }
}
</script>
  
<style scoped>
/* ======================================== */
/* Css rules for button (more rules on @media)*/
.btnContainer {
    grid-area: b;
    align-self: center;
}
.btnClass {
    background: #4A52FF;
    color: white;
    border-radius: 25px;
    padding: 5px;
}
/* ======================================== */

/* ======================================== */
/* Css rules for page title (more rules on @media)*/
.header {
    grid-area: t;
    margin: 10px auto;
}
/* ======================================== */


/* ======================================== */
/* Css rules for mosaic layout combined with @media rules 
    to achive a responsive layout that supports adding 
    more cards within the layout 
*/
.mosaicBasic {
    height: 90vh;
    width: 90%;
    margin: 0px auto;
    display: grid;
    padding: 5px;
    padding-top: 20px;
}
/* ======================================== */


@media (min-width: 120px) {
    /* Adjust font-size */
    .btnClass {
        font-size: 10px;
    }

    /* Adjust font-size */
    .header {
        font-size: 12px;
    }

    /* Adjust row-size and gap */
    .mosaicBasic {
        grid-template-rows: repeat(10, 8%);
        gap: 0.3rem;
    }
    /* Adjust columns and grid-template */
    /* At 120-319px, based on the card number we got 3 or 5 columns*/
    .mosaicLess {
        grid-template-columns: repeat(3, 30%);
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
    /* Adjust columns and grid-template */
    .mosaicMore {
        grid-template-columns: repeat(5, 18%);
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
    /* font-size of button and header, are same as above. they will change on 640px */

    /* Adjust gap size */
    .mosaicBasic {
        gap: 0.4rem;
    }
    /* At 320-639px, based on card numbers, we use 9x4 or 10x5 grid */
    .mosaicLess {
        grid-template-rows: repeat(9, 10%);
        grid-template-columns: repeat(4, 22%);
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
    .mosaicMore {
        grid-template-rows: repeat(10, 9%);
        grid-template-columns: repeat(5, 18%);
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
    /* Adjust font-size */
    .btnClass {
        font-size: 12px;
    }

    /* Adjust font-size */
    .header {
        font-size: 16px;
    }

    /* Adjust gap size and use a 12x6 grid, only images rearrange based on number of cards */
    .mosaicBasic {
        gap: 0.5rem;
        grid-template-columns: repeat(12, 7%);
        grid-template-rows: repeat(6, 16%);
    }
    .mosaicLess {
        grid-template-areas:
            't     t     t    t     img1  img1  img1  img1  img1  img8  img14 img16'
            'img2  img2  img2 img2  img1  img1  img1  img1  img1  img8  img11 img11'
            'img2  img2  img2 img2  img1  img1  img1  img1  img1  img18 img11 img11'
            'img3  img3  img3 img4  img4  img5  img5  img5  img5  img7  img7  img19'
            'img10 img10 img6 img6  img6  img5  img5  img5  img5  b     img9  img9'
            'img10 img10 f3   img12 img12 img15 img15 img15 img13 img17 img17 img17'
        ;
    }
    .mosaicMore {
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