<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from './layout/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang='sass'>

@import './sass/_reset'
@import './sass/_variables'

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  .subtitle
    text-align: center
    font-size: 3em
    padding: 30px 0

  .link
    color: $grey
    text-decoration: none

  .container
    padding-left: 150px
    width: auto
    height: 100vh

    section
      width: 75%
      margin: 0 auto
      height: 100vh
      
</style>
