<template>
  <div
    class="sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    <icon-menu-alt-left />
  </div>
</template>

<script>
import IconMenuAltLeft from '@theme/components/IconMenuAltLeft.vue'

export default {
  components: { IconMenuAltLeft },
}
</script>

<style lang="stylus">
.sidebar-button
  position absolute
  top 0.89rem
  left 1rem
  width 1.8rem
  height 1.8rem
  display none
  cursor pointer

@media (max-width $MQMobile)
  .sidebar-button
    display flex
    justify-content center
    align-items center
</style>
