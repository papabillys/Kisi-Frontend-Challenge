<!-- 
    This component is used for the display of icon > on each card. 
    It is created to avoid the code of svg/path and be more readable on card.vue.

    To position it to the bottom right corner of every card, its position was set to absolute
    while parents position is relative. 
 -->

<template>
    <div>
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00009 0.360229L0.590088 1.77023L5.17009 6.36023L0.590088 10.9502L2.00009 12.3602L8.00009 6.36023L2.00009 0.360229Z" fill="white"/>
        </svg>
    </div>
</template>
      
      
<script>
    export default {
        name: 'Icon',
    }
</script>
      
<style scoped>

div{ 
    width: fit-content;
    position:absolute;
    bottom: 10px;
    right: 10px;
}

</style>
      