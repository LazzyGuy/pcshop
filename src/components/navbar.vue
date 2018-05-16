<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <h1>Pc shop</h1>
      </router-link>
      
    </div>
    <div class="item-menu">
      <ul v-if="hide">
        <li><a @click.prevent="$emit('desktop')">Desktop</a></li>
        <li><a @click.prevent="$emit('laptop')">Laptop</a></li>
        <li><a @click.prevent="$emit('hardware')">Hardware</a></li>
      </ul>
    </div>
    <div class="cart">
      <router-link to="/cart">
      <img class="icon" src="../assets/shopicon.png" alt="">
      <span class="cart-num" v-if="this.$store.state.cartTotal>0&&hide">{{this.$store.state.cartTotal}}</span>
      </router-link>
    </div>
  </nav>  
</template>

<script>
export default {
  props:['hide'],
  data(){
    return{
    }
  },
  methods:{
    openDesktop: function(){
      
    },
    openLaptop: function(){
      
    },
    openHardware: function(){
    }
  }

}
</script>

<style scoped>

a{
  text-decoration: none;
  color: #a4a4a4;
  cursor: pointer;
}
nav{
  background: white;
  height: 70px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-bottom: 2px solid whitesmoke;
}
.item-menu ul{
  list-style: none;
}
.item-menu ul li{
  display: inline-block;
  padding: 0 50px;
}
.icon{
  height: 35px;
  width: 35px;
}
.cart-num{
  background: red;
  position: absolute;
  top: 15px;
  right: 120px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
}
</style>

