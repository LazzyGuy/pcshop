<template>
  <div>
    <nav-bar v-on:desktop="desktop" v-on:laptop="laptop" v-on:hardware="hardware" :hide="true"/>
    <div class="body-main">
      <banner :d="d" :l="l" :h="h"/>
      <div class="bottom">
          <item-display v-if="d" :itemsDis="itemsD"/>
          <item-display v-if="l" :itemsDis="itemsL"/>
          <item-display v-if="h" :itemsDis="itemsH"/>
      </div>      
    </div>
    <foo-ter />
  </div>  
</template>

<script>
import navbar from './navbar'
import banner from './banner'
import sidePanal from './sidePanal'
import itemDisplay from './itemDisplay'
import Footer from './Footer'
export default {

  data(){
    return{
      d: true,
      l: false,
      h: false,
      flase: true
    }
  },
  methods:{
    desktop: function(){
      this.d = true
      this.l = false
      this.h = false
      this.items = this.$store.getters.desktop      
    },
    laptop: function(){
      this.d = false
      this.l = true
      this.h = false
      this.items = this.$store.getters.laptop
    },
    hardware: function(){
      this.d = false
      this.l = false
      this.h = true
      this.items = this.$store.getters.hardware
    }
  },

  computed:{
    itemsD(){
      return this.$store.getters.desktop
    },
    itemsL(){
      return this.$store.getters.laptop
    },
    itemsH(){
      return this.$store.getters.hardware
    }
  },

  components:{
    'nav-bar': navbar,
    'banner': banner,
    'side-panal': sidePanal,
    'item-display': itemDisplay,
    'foo-ter': Footer
  }
  
}


</script>

<style scoped>
.body-main{
  padding: 50px 100px;
  height: 100%;
  background: #E6EEFB;
}
.bottom{
  display: flex;  
}

</style>
