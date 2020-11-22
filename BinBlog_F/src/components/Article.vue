<template>
  <div>
    <!-- 标题 -->
    <div>
      {{ title }}
    </div>
    <!-- 标签 -->
    <div>
      {{ flag }}
    </div>
    <!-- 内容 -->
    <div>
      {{ content }}
    </div>
    <!-- 时间 -->
    <div>
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
      flag: "vue",
      content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      postedtime: "2020-02-02",
    };
  },
};
</script>

<style scoped>
</style>
