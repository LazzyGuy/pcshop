<template>
  <div class="main">
    <div class="container-pcshop">
       
      <div class="imageslot">
          <button class="button left-btn">ider</button>
        <img class="image cardimage" src="../assets/displayitem/1.svg" alt="image">
        <img class="image cardimage" src="../assets/displayitem/1.svg" alt="image">
        <img class="image cardimage" src="../assets/displayitem/1.svg" alt="image">
        <img class="image cardimage" src="../assets/displayitem/1.svg" alt="image">
        <img class="image cardimage" src="../assets/displayitem/1.svg" alt="image">
        <button class="button right-btn">
            uder
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cardsrc: ''
      }
    }
  }

</script>

<style scoped>
  /* width: 355 hight 190 */

    .imageslot{
        display: flex;
        justify-content: space-between;
        overflow: scroll;
    }

  .cardimage{
      margin: 5px;
  }  
    .container-pcshop{
        background: #000;
    }
  .left-btn{
      position: relative;
      left: 0;
      top: 80px;
     
  }
  .right-btn{
      position: relative;
      right: 0;
      top: 80px;
  }

  .cardimage:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 1s;
  }

</style>
