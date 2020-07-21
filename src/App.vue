<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/shopping">shopping</router-link>
    </div> -->
    <router-view />
  </div>
</template>


<script>
import 'bootstrap/dist/js/bootstrap.min.js';
export default{

}
</script>

<style>
@import "assets/common/css/main.css";
@import "assets/common/css/oneui.css";
@import "/bootstrap/dist/css/bootstrap.min.css";
body {
    background: linear-gradient(to bottom, #49BDAD,#6a67c7) fixed;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #646464;
}
</style>
