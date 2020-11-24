<template>
  <div id="bar">
    <!-- <span id="name"> pbb's blog </span>
    <span id="avatar">
      <el-avatar size="medium" shape="square" :src="url" fit="scale-down" />
    </span>
    <span id="music"> 2 </span>
    <span id="others"> 3 </span> -->

    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="grid-content bg-purple">
          <span id="name"> pbb's blog </span>
        </div></el-col
      >
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
        ><div class="grid-content bg-purple-light">
          <span id="avatar">
            <el-avatar
              size="medium"
              shape="square"
              :src="url"
              fit="scale-down"
            />
          </span></div
      ></el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"
        ><div class="grid-content bg-purple">
          <span id="music"> 2 </span>
        </div></el-col
      >
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
        ><div class="grid-content bg-purple-light">
          <span id="others"> 3 </span>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HeadBar",
  data() {
    return {
      url: require("../assets/myAvatar.jpg"),
    };
  },
};
</script>

<style scoped>
#bar {
  width: 100%;
  height: 35px;
  border: 1px solid red;
  position: absolute;
}
#name {
  height: 35px;
  text-align: center;
  font-family: "微软雅黑";
  font-weight: 600;
  color: black;
  position: relative;
  line-height: 35px;
  /* border: 1px solid black; */
  top: -12px;
}
</style>