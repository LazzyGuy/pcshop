<template>
  <div>
    <nav class="navbar is-dark  is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item logo-my" href="/">
          <span class="pc">PC</span> &nbsp;&nbsp;
          <span class="shop">SHOP</span>
        </a>
        <div class="navbar-burger burger" @click="activateMenu" v-bind:class="{'is-active': homeactive}" data-target="menu12">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


      <div id="menu12" class="navbar-menu" v-bind:class="{'is-active': homeactive}">

        <div class="navbar-start">
          <div class="control has-icons-right navbar-item">
            <input class="input is-medium navbar-item" type="text" placeholder="search here for product">
            <span class="icon is-small is-right search-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>

        <div class="navbar-end">

          <a @click="openJoin" class="navbar-item login-btn">
            <p>Login & SignUp</p>
          </a>

          <a href="/login" class="navbar-item cart-btn">
            <i class="fa fa-shopping-cart"></i>
          </a>

        </div>

      </div>
    </nav>

    <jo-in v-bind:active="joinactive" v-on:closeIt="closeJoin"></jo-in>

    <sli-der></sli-der>



  </div>
</template>

<script>
  import Navbar from './nav'
  import Join from './loginSign.vue'
  import Slider from './topslider.vue'
  export default {

    data() {
      return {
        homeactive: false,
        joinactive: false
      }
    },

    methods: {
      activateMenu: function () {
        this.homeactive = !this.homeactive;
      },
      openJoin: function () {
        this.joinactive = true
      },
      closeJoin: function () {
        this.joinactive = false
      }

    },

    components: {
      'nav-bar': Navbar,
      'jo-in': Join,
      'sli-der': Slider
    }

  }

</script>

<style scoped>
  .home-front {
    height: 100vh;
  }

  /* .navbar {
    padding-left: 20px;
    padding-right: 20px;
  } */

  /* .icon{
		border-left: 1px solid gray;
	} */

  .logo-my .pc {
    height: 40px;
    width: 40px;
    color: #000;
    font-size: 25px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-my .shop {
    font-size: 20px;
  }

  .search-icon {
    padding-top: 20px;
    padding-right: 20px;
    ;
  }

  .home-front {
    background: lightcoral;
  }

  .login-btn p {
    font-size: 15px;
    color: gray;
  }

  .cart-btn i {
    font-size: 20px;
  }






</style>
