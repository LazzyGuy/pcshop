<template>
  <div class="body">
    <div class="top">
      <nav-bar></nav-bar>
    </div>
    <div class="outter">
      <div class="cart-body">
      <h1>Cart</h1>
      <div class="cart" v-for="item in cart" v-bind:key="item.id">
        <div class="dis">
          <h2>{{item.name}}</h2>
          <p> &#x20b9; {{item.price}} ✕ {{item.count}}</p>
          <p>Total Price: &#x20b9; {{item.price*item.count}}</p>
        </div>
        <div class="image">
          <img :src="`../../static/${item.img}`" alt="item">
        </div>
      </div>

      <div class="pay">
        <button>Procced to payment</button>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
  import navbar from './navbar'
  export default {
    computed: {
      cart() {
        return this.$store.state.cart
      }
    },
    components: {
      'nav-bar': navbar
    }
  }

</script>

<style scoped>

h1{
  font-size: 40px;
}
h2{
  font-size: 15px; 
  font-weight: bold;
}
p{
  font-size: 15px;
}
  .body {
    height: 100%;
    background: #E6EEFB;
    text-align: center;
    
    padding: 10px 50px;
  }

  .top {
    margin-bottom: 100px;
  }
  .outter{
    width: 100%;
    display: flex;
    background:white;
    justify-content: center;
  }
  .cart-body{
     background: white;
     margin: 100px 10px;
     width: 600px;
  }
  .cart {
    display: flex;
    justify-content: space-around;
    margin: 20px 20px;
    padding: 20px 0;
    border-bottom: 1px solid lightgray;
  }

  .dis {
    text-align: left;
    flex-basis: 80%;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .image{
    flex-basis: 20%;
    border: 1px solid lightgray;
    padding: 0;
    border-radius: 10px;
  }
  img{
    height: 100px;
    width: 100px;
  }

.pay button{
  font-size: 20px; 
  border: 1px solid gray;
  background: transparent;
  border-radius: 50px;
  padding: 5px 10px;
  color: gray;
}
.pay button:hover{
  color: white; 
  background: black;
  border: 1px solid white;
}

</style>
