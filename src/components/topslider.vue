<template>

  <div class="main">
    <section class="hero is-black is-bold">
      <div class="hero-body">
        <img class="image-slide" src="../assets/banner.jpeg">
      </div>
    </section>
<!-- v-bind:src="mainImg" -->
  </div>

</template>

<script>
  export default {
    data() {
      return {
        listImg: [
          'https://cdn.pixabay.com/photo/2018/04/05/19/17/computer-3293873_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321_960_720.jpg',
          '../assets/banner.jpeg'
        ],
        mainImg: '',
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

</style>
