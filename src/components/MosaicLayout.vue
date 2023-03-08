<template>
    <div class="mosaic">

        <!-- TODO: Create mosaic layout based on the needs of the project -->
        <!-- TODO: Make the layout responsice -->

        <div class="header">
            <h1>Kisi Project</h1>
        </div>

        <!-- Calling Card component with v-for -->
        <div v-for="(image, index) in images" :key="index">
            <Card :image="image" />
        </div>

        <div>
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

        // This function is used for Button click and loads 3 more images from the api. 
        async loadMoreImages() {
            let qty = 3;
            let res = await helper.loadImagesNew(qty);
            // TODO: Add error check and notification
            res.data.forEach((el) => {
                this.images.push(el);
            })
        }
    }
}
</script>
 
<style scoped>
.mosaic {
    padding-top: 5%;
    margin: 0px 5%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-auto-rows: 120px;
}

.btnClass {
    background: #4A52FF;
    color: white;
    font-size: 12px;
    border-radius: 25px;
    padding: 5px;
}

.header {
    margin-bottom: 10px;
}
</style>