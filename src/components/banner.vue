<template>
<div class="banner">
  <img v-if="d" src="../assets/banner1.svg" alt="Banner">
  <img v-if="l" src="../assets/banner2.svg" alt="Banner">
  <img v-if="h" src="../assets/banner3.svg" alt="Banner">
</div>  
</template>

<script>
export default {
  props:[
    'd',
    'l',
    'h'
  ],
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.banner{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner img{
  height: 120px;
  width: 100%;
}
</style>
