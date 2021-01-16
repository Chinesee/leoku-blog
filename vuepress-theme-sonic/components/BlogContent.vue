<template>
  <section class="blog-content">
    <Content class="theme-default-content" />
  </section>
</template>

<script>
export default {
  name: 'BlogContent',
  props: ['blogItems'],
}
</script>

<style lang="stylus" scoped>
.blog-content
  min-height 'calc(100vh - %s - %s)' % ($navbarHeight $footerHeight)
</style>
