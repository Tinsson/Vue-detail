<template>
  <div id="app">
    <yd-button class="btn btn-primary" @click.native="showModel">开始</yd-button>
    <model @transInfo="getInfo" @hideModel="hide" v-show="isPop"></model>
  </div>
</template>

<script>
import Model from './components/model'

export default {
  name: 'app',
  data(){
      return{
        isPop: true
      }
  },
  components: {
    Model
  },
  methods:{
      getInfo(data){
          console.log(data);
      },
      hide(){
          this.isPop = false;
      },
      showModel(){
          this.isPop = true;
      }
  }
}
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
