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
      {{ content }}
    </div>
    <!-- 时间 -->
    <div id="postedtime">
      {{ postedtime }}
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
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      postedtime: "2020-02-02",
    };
  },
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
  text-align: left; 
  float: left; 
  text-align: center;
  width: 150px;
  height: 25px;
  border: 1px solid black;
}
</style>
