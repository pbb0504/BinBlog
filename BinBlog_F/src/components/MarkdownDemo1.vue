<template>
  <div style="width: 100%; min-width: 600px">
    <div style="display: inline-block; width: 50%">
      <textarea v-model="content" />
    </div>
    <div style="display: inline-block; width: 50%">
      <div id="showContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      content: '',
      converter: null
    }
  },
  watch: {
    content: 'contentChanged'
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let showdown = require('showdown')
      let converter = new showdown.Converter()
      this.converter = converter
    },
    contentChanged () {
      let html = this.converter.makeHtml(this.content)
      document.getElementById('showContent').innerHTML = html
    }
  }
}
</script>

<style scoped>
#showContent {
  padding: 25px;
}
</style>
