<template>
  <main class="page">
    <slot name="top" />

    <transition name="sale-fade" mode="out-in">
      <Content class="theme-default-content" />
    </transition>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

  .theme-default-content
    p
      text-align justify
</style>
