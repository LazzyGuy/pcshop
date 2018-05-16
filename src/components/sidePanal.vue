<template>
  <div class="panal">
    <div class="price-box">
      <p>Price Range:</p>
      <span> &#x20b9; {{priceRange}}</span>
      <input @input="rangeSet" step="1000" type="range" min="2000" max="60000" v-model="priceRange" class="slider">
    </div>
    <hr>
    <div class="btn-group">
      <p>For information on Best Deals join our Newsletter</p>
      <input class="input-email" type="email" placeholder="your@email">
      <button @click="join" class="btn-join">Join</button>
    </div>
    <hr>
    <div class="contact">
      <p>For any complaint or suggestion Email us at: <b>igenjarus@gmail.com</b></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      priceRange: 50000
    }
  },
  methods:{
    rangeSet: function(){
      this.$store.state.priceRange = this.priceRange
    },
    join: function(){
      alert('Thanks you !');
    }
  }
}
</script>

<style scoped>
.panal{
  margin: 10px 0;
  padding: 20px 20px;
  height: 500px;
  width: 200px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: white;
}
.price-box,
.btn-group{
  padding: 30px 10px;
}
.price-box p,
.btn-group p{
  font-weight: 600;
  padding: 10px 0;
}
.price-box span{
  color: black;
}
.slider{
  -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;   
    background: blue;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    background: white;
    border: 1px solid blue;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}

.input-email{
  width: 150px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 2px 1px;
  text-align: center;
  font-size: 15px;
}
.btn-join{
  margin: 10px 0;
  width: 50px;
  height: 30px;
  border-radius: 20px;
  background: transparent;
  border: 1px solid #3E64EA;
  color: #3E64EA;
  padding: 2px 1px;
}
.btn-join:hover{
  background: #3E64EA;
  border: 1px solid white;
  color: white;
}
/* sale switch */


/* The slider */

</style>
