<template>
<div class="body">
  <p class="item-name">{{item.name}}</p>
  <img :src="`../../static/${item.img}`" alt="" class="image">
  <p class="price"> &#x20b9; {{item.price}}</p>
  <button @click="addItem(item)">ADD ITEM</button>
</div>  
</template>

<script>
export default {
  props:[
    'item'
  ],
  methods:{
    addItem: function(item){
        this.$store.commit('addItem',this.item)
    }
  }
}
</script>

<style scoped>
.body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 400px;
  width: 300px;
  margin: 10px 5px;
  display: inline-block;
  background: white;
  color: black;
  border-radius: 10px;
  text-align: center;
}
.body:hover{
  box-shadow: 1px 1px 1px gray;
}
.item-name{
  padding: 5px 5px;
  float: left;
  font-size: 18px;
  font-weight: lighter;
  height: 50px;
  text-align: center;
}
.image{
  height: 150px;
  width: 200px;
  padding: 20px 20px;
}
.price{
  font-size: 20px;
  padding: 10px;
}
button{
  margin: 10px 0px;
  padding: 10px 20px;
  background: transparent;
  border-radius: 50px;
  color: #3E64EA;
  border: 1px solid #3E64EA;
}
button:hover{
  background: #3E64EA;
  color: white;
   border: 1px solid white;
}
</style>
