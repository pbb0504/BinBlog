<template>
  <div id="article">
    <!-- 标题 -->
    <div id="title">
      {{ title }}
    </div>
    <!-- 标签 -->
    <div id="flags">
      <span v-for="(flag, i) in flags" :key="i">
        <el-tag type="info">
          {{ flag }}
        </el-tag>
      </span>
    </div>
    <!-- 内容 -->
    <div id="content">
      <!-- {{ content }} -->
    </div>
    <!-- 时间 -->
    <div id="postedtime">
      {{ postedtime }}{{time}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      title: "this is a title",
      flags: ["vue", "java", "mybatis"],
      content: "## aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      postedtime: "write on ",
      time: "2020-02-02",
      converter: null,
    };
  },
  /* watch: {
    content: 'contentChanged'
  }, */
  mounted() {
    this.init();
    this.contentChanged();
  },
  methods: {
    init() {
      let showdown = require('showdown');
      let converter = new showdown.Converter();
      this.converter = converter;
    },
    contentChanged() {
      let html = this.converter.makeHtml(this.content);
      document.getElementById("content").innerHTML = html;
    }
  }
};
</script>

<style scoped>
#article {
  margin: 0 auto;
}
#title {
  font-family: "微软雅黑";
  font-size: 35px;
  text-align: center;
  color: black;
}
#content {
  font-family: "微软雅黑";
  font-size: 25px;
  text-align: center;
  color: black;
}
#postedtime {
  font-family: "微软雅黑";
  font-size: 15px;
  text-align: center;
  color: black;
  float: left; 
  width: 150px;
  height: 25px;
  /* border: 1px solid black; */
}
</style>
