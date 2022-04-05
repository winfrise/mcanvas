<template>
  <div id="app">
    <h1 class="title">MCanvas</h1>
    <h2 class="sub-title">
      mcanvas is a image handler plugin that can easily merge, crop, compress,
      <br />filter the image and export a image of base64 finally.
      <a
        href="https://github.com/xd-tayde/mcanvas/blob/master/README.md"
        target="_blank"
        >DOCS</a
      >
    </h2>

    <left-box @showDialog="showDialog"></left-box>
    <right-box @showDialog="showDialog"></right-box>

    <OptinosDialog :visible.sync="dialogVisible" :dialogType="dialogType" />
  </div>
</template>

<script>
import LeftBox from "./components/LeftBox.vue";
import RightBox from "./components/RightBox.vue";
import Vue from "vue";
const provideData = {
  controlBar: Vue.observable({
    visible: false,
    options: {
      imageOps: {
        image: require("./images/ear.png"),
        options: {
          width: 482,
          pos: {
            x: 150,
            y: 50,
            scale: 1,
            rotate: 0,
          },
        },
      },
      watermarkOpts: {
        image: require("./images/watermark.jpg"),
        options: {
          width: "40%",
          pos: "rightBottom",
        },
      },
      rectOps: {
        x: 0,
        y: "bottom:0",
        width: "100%",
        height: 300,
        radius: 30,
        strokeWidth: 5,
        strokeColor: "#996699",
        fillColor: "rgba(0,0,0,.5)",
      },
      circleOps: {
        x: "center",
        y: "center",
        r: 100,
        strokeWidth: 5,
        strokeColor: "#996699",
        fillColor: "rgba(0,0,0,.5)",
      },
      textOps: {
        // text:'<b>A</b>BBBBB<s>MCanvas.js</s>',
        text: "<b>Large/Stroke</b><br>Normal/Gradient<br><s>Small/Shadow</s>",
        options: {
          width: "600",
          align: "center",
          largeStyle: {
            color: "red",
            font: "90px Microsoft YaHei,sans-serif",
            type: "stroke",
            lineWidth: 2,
            lineHeight: 90,
          },
          normalStyle: {
            color: "blue",
            font: "70px Microsoft YaHei,sans-serif",
            lineHeight: 70,
            // shadow:{
            //     color: 'red',
            //     blur: 4,
            //     offsetX: 2,
            //     offsetY: 2,
            // },
            gradient: {
              type: 2, // 1: 横向渐变； 2: 纵向渐变；
              colorStop: ["red", "blue"],
            },
          },
          smallStyle: {
            color: "yellow",
            font: "50px Microsoft YaHei,sans-serif",
            lineHeight: 50,
            shadow: {
              color: "red",
              blur: 10,
              offsetX: 5,
              offsetY: 5,
            },
          },
          pos: {
            x: "center",
            y: "bottom",
            rotate: 0,
          },
        },
      },
      crop: {
        x: "center",
        y: "center",
        width: 300,
        height: 300,
        radius: 150,
      },
    },
  }),
};
export default {
  name: "App",
  components: {
    LeftBox,
    RightBox
  },
  provide() {
    return provideData;
  },
  data() {
    this.controlBar = provideData.controlBar;
    return {
      dialogVisible: false,
      dialogType: "",
    };
  },
  methods: {
    showDialog({ type }) {
      this.controlBar.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
.title {
  text-align: center;
  color: #8566aa;
  font-size: 50px;
  line-height: 100px;
  margin: 10px 0;
}
.sub-title {
  text-align: center;
  color: #8566aa;
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
  a {
    color: rgba(243, 212, 105, 0.8);
    &:hover {
      color: rgba(255, 198, 0, 1);
      text-decoration: underline;
    }
  }
}
</style>
