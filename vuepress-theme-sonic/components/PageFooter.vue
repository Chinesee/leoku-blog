<template>
  <div class="footer">
    Made with
    <a
      class="vuepress-link"
      href="https://vuepress.vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
      >Vuepress</a
    >
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

  .vuepress-link
    margin-left 0.4rem
    color inherit
    transition color 0.3s

    &:hover
      color $accentColor
</style>
