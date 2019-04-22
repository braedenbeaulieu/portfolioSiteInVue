<template>
  <div id="app">
    <Header />
    <div class="container">
      <transition name="the-router">
        <router-view></router-view>
      </transition>
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
@import './sass/_animations'

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  .subtitle
    text-align: center
    font-size: 3em
    font-weight: 900
    color: $grey
    padding: 30px 0

  .link
    color: $grey
    text-decoration: none

  .container
    padding-left: 150px
    width: auto
    height: 100vh

    section
      width: 850px
      margin: 0 auto
      padding-bottom: 50px

      h3
        padding: 40px 0 10px
        margin-bottom: 10px
        font-size: 1.5em
        color: $p-blue
        border-bottom: 1px solid $p-blue

      p
        line-height: 25px
        font-size: 1.1em
        text-indent: 20px
        margin: 0 0 10px

  .the-router-enter-active
    animation: fadeIn .4s

@media screen and (max-width: 1250px)
  #app
    .container
      section
        width: 80%

@media screen and (max-width: 640px)
  #app
    .container
      padding: 50px 0 0   
      
</style>
