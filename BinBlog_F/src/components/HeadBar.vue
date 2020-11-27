<template>
  <div id="bar">
    <!-- <span id="name"> pbb's blog </span>
    <span id="avatar">
      <el-avatar size="medium" shape="square" :src="url" fit="scale-down" />
    </span>
    <span id="music"> 2 </span>
    <span id="others"> 3 </span> -->

    <el-row :gutter="10">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
        ><div id="name">
          <span id="name"> pbb's blog </span>
        </div></el-col
      >
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"
        ><div id="avatar">
          <span id="avatar">
            <el-avatar
              size="medium"
              shape="square"
              :src="url"
              fit="scale-down"
            />
          </span></div
      ></el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14"
        ><div id="music">
          <span id="music">
            <MusicPlayer />
          </span></div
      ></el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
        ><div id="others">
          <span id="others"> 3 </span>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import MusicPlayer from './MusicPlayer'
export default {
  name: 'HeadBar',
  components: {MusicPlayer},
  data () {
    return {
      url: require('../assets/myAvatar.jpg')
    }
  }
}
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
  /* position: relative; */
  line-height: 35px;
  /* border: 1px solid black; */
}
#music {
  height: 35px;
  line-height: 35px;
  text-align: center;
}
#others {
  height: 35px;
  line-height: 35px;
  text-align: center;
}
</style>
