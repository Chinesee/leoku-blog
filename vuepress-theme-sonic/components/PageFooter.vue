<template>
  <div class="footer">
    Made with Vuepress
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style lang="stylus" scoped>
.footer
  height $footerHeight
  display flex
  justify-content center
  align-items center
  color $textGrayColor
</style>
