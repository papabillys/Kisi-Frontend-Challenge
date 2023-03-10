<!-- 
    This component is used for every card.
    It is called from MosaicLayout component and gets as props a object which contains 
    { name, description, image, isHover } 
 -->

<template>

    <!-- 
        -Style to dispay image or color based on if the image is hovered
        is applied with v-bind. 
        -Description is displayed with v-if  
        -mouseOver and mouseLeave to keep track if the image is hovered or not
    -->
    <div 
        class="card"
        :style="
            image.isHover ? 
            `background: #4A52FF; transition: background 1000ms ease-out;` :
            `background-image: url(${image.image});`
        "
        @mouseover="mouseOver()"
        @mouseleave="mouseLeave()"
    >
        <p class="cardTitle">{{ image.name }}</p>
        <p v-if="image.isHover" class="cardInfo">
            {{ image.description }}
        </p>
        <Icon/>
    </div>

</template>
      
      
<script>
import Icon from './Icon.vue'

    export default {
        name: 'Card',
        components: {Icon}, 
        props: {
            image: {
                type: Object,
                required: true
            }
        },
        created() {  },
        data() {
            return {    }
        },
        methods: {  

            // These functions are used to update the isHover value of the image 
            // in order to keep track of image's state
            mouseOver(){
                this.image.isHover = true;
            },
            mouseLeave() {
                this.image.isHover = false; 
            }
        },
        computed: {  },
    }
</script>
      
<style scoped>


/* ======================================== */
/* Css rules for card component*/
.card {
  height: 100%;
  width: 100%;
  position: relative;

  transition: all 500ms;
 
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 5px;
  box-shadow: rgba(201, 203, 255, 0.35) 0px 5px 15px;
  
  text-align: start;
  color: #FFFFFF;
}
/* ======================================== */

/* ======================================== */
/* Css rules for card's title*/
.cardTitle{ 
    border-radius: 5px;
    font-weight: bold;
    padding: 5px 0px 0px 5px;
}
/* ======================================== */

/* ======================================== */
/* Css rules for card's description that is displayed on hover*/
.cardInfo{ 
    font-size: 10px;
    padding: 5px 0px 0px 5px;
    margin: 0px 20px 10px 0px;

    /* These rules display description in max 2 lines and 
    if there is more text it ends description with '...'  */
    display: -webkit-box;
    max-width: 80%; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* ======================================== */


@media (min-width: 120px) {
    /* Adjust font-size */
    .cardTitle {
        font-size: 12px;
    }
}

@media (min-width: 640px) {
    /* Adjust font-size */
    .cardTitle {
        font-size: 14px;
    }
}
</style>      