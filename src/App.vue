<template>
  <div id="app">
    <the-header v-if="!mobileView"></the-header>
    <div class="content" v-if="mobileView" :class="{'open':showNav}">
    <div id="navigation-icon" v-if="mobileView" @click="showNav=!showNav">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
       <MobileNavigation v-if="mobileView"/>
    </div>
  </div>
    </div>
    <div>
       <router-view></router-view>
  </div>
  <div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import MobileNavigation from "./components/layout/MobileNavigation.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    MobileNavigation,
    TheFooter,
  },
  data() {
    return {
      mobileView: true,
      showNav: true,
    };
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 990;
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
}
html,
body{
  overflow: hidden;
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  margin-left: -5rem;
  position: absolute;
  margin-top: 2.5rem;
}
.content svg {
  width: 50px;
  height: 20px;
  position: absolute;
  margin-top: -2.5rem;
  margin-left: -2rem;
}

.content {
  position: absolute;
  top: 10px;
  padding: 20px;
  background-color: lightblue;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  height: 40rem;
  width: 26rem;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}

.open {
  transform: translate(410px);
}
@media (max-width: 990px) {
  html,
body{
  overflow: hidden;
}
  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    margin-left: -5rem;
    position: absolute;
    margin-top: 2.5rem;
  }
  .content svg {
    width: 50px;
    height: 20px;
    position: absolute;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  
  .content {
    position: absolute;
    top: 10px;
    padding: 20px;
    background-color: lightblue;
    border-radius: 30px;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    height: 40rem;
    width: 26rem;
    margin-left: 37rem;
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }
  
  .open {
    transform: translate(410px);
  }
}
@media (max-width: 900px) {
  html,
body{
  overflow: hidden;
}
  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    margin-left: -5rem;
    position: absolute;
    margin-top: 2.5rem;
  }
  .content svg {
    width: 50px;
    height: 20px;
    position: absolute;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  
  .content {
    position: absolute;
    top: 10px;
    padding: 20px;
    background-color: lightblue;
    border-radius: 30px;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    height: 40rem;
    width: 26rem;
    margin-left: 37rem;
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }
  
  .open {
    transform: translate(410px);
  }
}
@media (max-width: 912px) {
  html,
body{
  overflow: hidden;
}
  
  .content {
      margin-left: 32rem;
  
  }
  
}
@media (max-width: 768px) {
  html,
body{
  overflow: hidden;
}
  
  .content {
      margin-left: 23rem;
  
  }
  
}
@media (max-width: 700px) {
  html,
body{
  overflow: hidden;
}
  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    margin-left: -5rem;
    position: absolute;
    margin-top: 2.5rem;
  }
  .content svg {
    width: 50px;
    height: 20px;
    position: absolute;
    margin-top: -2.5rem;
    margin-left: -2rem;
  }
  
  .content {
    position: absolute;
    top: 10px;
    padding: 20px;
    background-color: lightblue;
    border-radius: 30px;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    height: 40rem;
    width: 26rem;
    margin-left: 37rem;
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }
  
  .open {
    transform: translate(410px);
  }
}
@media (max-width: 540px) {
  html,
body{
  overflow: hidden;
}
  
  .content {
      margin-left: 8rem;
  
  }
  
}
@media (max-width: 412px) {
  html,
body{
  overflow: hidden;
}
  
  .content {
    margin-left: 0rem;
  }

}
@media (max-width: 414px) {
  html,
body{
  overflow: hidden;
}
  
  .content {
    margin-left: 0rem;
  }

}
</style>
