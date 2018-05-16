<template>
<div>
  <div class="items" v-for="item in items" v-bind:key="item.id">
    <ca-rd :item="item" ></ca-rd>
  </div>
</div>  
</template>

<script>
import card from './card'
export default {
  props:['items'],
   data(){
    return{
    }
  },
  components:{
    'ca-rd': card
  }
}
</script>

<style scoped>
.items{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
