<template lang="html">
  <div v-bind:style="style" class="s-row">
    <slot />
  </div>
</template>

<script>
import _color from "@/utilities/colors"; //Custom functions
import colors from "@/mixins/colors"; //Mixins

export default {
  name: "sRow",
  //Config
  computed: {
    style() {
      let style = {
        background: _color.getColor(this.background, 1),
        color: _color.getColor(this.color, 1),
        display: this.display,
        padding: this.padding,
        width: this.width,
      };

      if (this.display.includes("flex")) {
        style["flex-direction"] = this.direction;
        style["flex-wrap"] = this.wrap;
        style["flex-flow"] = this.flow;
        style["justify-content"] = this.justify;
        style["align-items"] = this.alignItems;
        style["align-content"] = this.alignContent;
        style["flex"] = this.flex;
        style["-ms-flex"] = this.flex;
      }
      return style;
    },
    width() {
      let width = 0;

      if (this.padding) {
        let padding = this.padding.trim().split(" ");

        if (padding.length == 4) {
          //All three params provided
          width = `${padding[1]} + ${padding[3]}`;
        } else if (padding.length == 3) {
          //0px 0px 0px
          width = `${padding[1]} + ${padding[1]}`;
        } else if (padding.length == 2) {
          //0px 0px
          width = `${padding[1]} + ${padding[1]}`;
        } else {
          width = `${padding[0]} + ${padding[0]}`;
        }
      }

      return `calc(100% - calc(${width}))`;
    },
  },
  mixins: [colors],
  props: {
    alignContent: {
      default: null,
      type: String,
    },
    alignItems: {
      default: null,
      type: String,
    },
    display: {
      type: String,
      default: "flex",
    },
    direction: {
      default: null,
      type: String,
    },
    flow: {
      default: null,
      type: String,
    },
    justify: {
      default: null,
      type: String,
    },
    padding: {
      default: null,
      type: String,
    },
    wrap: {
      default: null,
      type: String,
    },
  },
};
</script>

<style scoped>
.s-row {
  width: 100%;
  max-width: 100%;
}

s.row::after {
  content: "";
  clear: both;
}
</style>
