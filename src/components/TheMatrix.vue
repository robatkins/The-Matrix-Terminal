<template>
  <div>
    <div class="scanlines"></div>
    <div class="matrix-background">
      <div class="raining-text">
        <div class="editor-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMatrix',
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const textElement = this.$el.querySelector('.editor-text');
      
      function set(txt) {
        textElement.innerHTML = txt;
      }

      function slicer(str) {
        const sliced = [];
        for (let i = 0; i <= str.length; i++) {
          sliced.push(str.slice(0, i));
        }
        return sliced;
      }

      function pause(str, time) {
        const strings = [];
        for (let i = 0; i < time; i++) {
          strings.push(str);
        }
        return strings;
      }

      function assemble(statements) {
        let slices = [];
        statements.forEach(function (stmt) {
          const sliced = slicer(stmt);
          const interstatementPause = pause("", 3);
          slices = slices.concat(sliced);
          slices = slices.concat(pause(stmt, 30));
          slices = slices.concat(interstatementPause);
        });
        return slices;
      }

      const statements = [
        "Wake up, Neo...",
        "The Matrix has you...",
        "Follow the white rabbit.",
        "Knock, knock, Neo.",
        "Built by Robert Atkins using Vue.js and Node.",
        "Hosted on AWS in a S3 Bucket.",
      ];

      function rand(min, max) {
        return min + Math.random() * (max - min) | 0;
      }

      const slices = assemble(statements);

      function animate() {
        const current = slices.shift();
        set(current);
        slices.push(current);
        setTimeout(animate, rand(50, 250));
      }

      animate();
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

$text-color: #9F9;
$shadow: #0F0;

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
  color: $text-color;
  font-size: 3em;
  text-shadow: 1px 0px 5px $shadow, 
    -1px 0px 2px $shadow;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: light;
  line-height: 2em;
  margin: 100px;
}
</style>