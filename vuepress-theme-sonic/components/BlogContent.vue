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
  // padding 2rem 0 0 0
</style>