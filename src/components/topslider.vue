<template>

  <div class="main">
    <section class="hero is-black is-bold">
      <div class="hero-body">
        <transition name="fade">
        <img class="image-slide" v-bind:src="mainImg">
        </transition>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        listImg: [
          'https://cdn.pixabay.com/photo/2018/04/05/19/17/computer-3293873_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321_960_720.jpg',
          'https://raw.githubusercontent.com/LazzyGuy/pcshop/master/src/assets/banner.jpeg'
        ],
        mainImg: 'https://raw.githubusercontent.com/LazzyGuy/pcshop/master/src/assets/banner.jpeg',
        i: 0
      }
    },
    mounted(){
      setInterval(()=>{
        this.mainImg = this.listImg[this.i]
        this.i++
        if(this.i==this.listImg.length){
          this.i = 0
        }
      },5000)
    }
  }

</script>

<style scoped>
.hero{
  padding: 0;
  margin: 0;
}
.hero-body{
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-slide{
  height: 400px;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
