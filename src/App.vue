<template>
  <div id="app">
 
    <TheMatrixPage />
  </div>
</template>

<script>
import TheMatrixPage from './views/TheMatrixPage.vue';

export default {
  name: 'App',
  components: {
    TheMatrixPage
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

body {
  background: #010;
  filter: blur(1px);
  overflow: hidden;
}

.scanlines {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
  background-image: linear-gradient(#020 0%, transparent 25%);
  background-size: 4px 4px;
}

.editor-text {
  color: #9F9;
  font-size: 3em;
  text-shadow: 1px 0px 5px #0F0, 
    -1px 0px 2px #0F0;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: light;
  line-height: 2em;
  margin: 100px;
}
</style>