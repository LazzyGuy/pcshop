<template>
<div class="display">
    <side-panal class="side" />
    <ite-ms :items="itemsDis" class="items" />
</div>  
</template>

<script>

import Sidepanal from './sidePanal'
import Items from './items'
export default {
  props:['itemsDis'],
  data(){
    return{
    }
  },
  components:{
    
    'side-panal': Sidepanal,
    'ite-ms': Items,
  },
  methods:{
    // log: function(){
    //   alert('hello');
    // }
  }
}
</script>

<style scoped>
.display{
  display: flex;
}
.side{
  flex-basis: 15%;
}
.items{
  flex-basis: 85%;
}
</style>
