<template>
  <div id="app">
    <router-view/>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import customFooter from '@/components/customFooter'

  export default {
    data() {
      return {

      }
    },
    components : {
      customFooter
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  #app {
    font-family: 'Rubik';
    /* font-weight: 600; */
    font-size: large;
  }

  .bibit-bangsa {
    font-family: 'Permanent Marker';
    text-shadow: 2px 2px #FF0000
  }
</style>
