<template>
  <div id="displayElement">
    <p>
      this is a test vue component
      {{ message }}
    </p>

    <Article />
  </div>
</template>

<script>
import Article from "./Article";
export default {
  name: "Test",
  components: {
    Article,
  },
  data() {
    return {
      message: "ohhhhhhhhhhhhhhhhhhhhhh",
    };
  },
};
</script>

<style scoped>
#displayElement {
  font-size: 40px;
  color: red;
  border-radius: 12px;
  border: 1px red;
}
</style>
