<template>

  <div class="modal" v-bind:class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">PC STORE</p>
        <button class="delete" aria-label="close" @click.prevent="closethis"></button>
      </header>
      <section class="modal-card-body">
        <!-- TODO: SIGN UP START -->
        <div class="signUp" v-bind:class="{'hide': !hideIt}">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input is-dark" type="text" placeholder="Full Name">
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input is-dark" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static is-dark">
                      +91
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input is-dark" type="tel" placeholder="Your phone number">
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <textarea class="textarea is-dark" placeholder="Address"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox"> I agree to the
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-dark">
                Join
              </button>
            </div>
          </div>
       </div>
      <!-- TODO: login start -->
        <div class="login" v-bind:class="{'hide': hideIt}">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-dark" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input is-dark" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-dark">
                Login
              </button>
            </p>
          </div>
        </div>


      </section>
      <footer class="modal-card-foot">

        <a @click.prevent="openLogIn">
          Login
        </a>

        <a @click.prevent="openSignUp">
          Signup
        </a>

      </footer>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['active'],
    data() {
      return {
        hideIt: false
      }
    },
    methods: {
      closethis: function () {
        this.$emit('closeIt')
      },
      openLogIn: function () {
        this.hideIt = false
      },
      openSignUp: function(){
        this.hideIt = true
      }
    }
  }

</script>

<style scoped>
  .hide {
    display: none;
  }

  .modal-card-foot {
    /* background: #000; */
    padding: 0;
  }

  .modal-card-foot a {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 50%;
    font-size: 2em;
    text-decoration: none;
    color: gray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }

  .modal-card-foot a:hover {
    background: gray;
    color: black;
  }

  .modal-card-head {
    /* background: black; */
    text-align: center;
  }

 

</style>
