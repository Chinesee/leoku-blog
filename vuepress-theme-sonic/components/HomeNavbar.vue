<template>
  <header class="home-navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'HomeNavbar',

  components: {
    SidebarButton,
    NavLinks,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    }
  },

  computed: {
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
.home-navbar
  position relative
  z-index $navbarIndex
  height $navbarHeight
  line-height $navbarHeight - 1.4rem
  padding 0 3rem
  display flex
  align-items center
  justify-content center

  a,
  span,
  img
    display inline-block

  .logo
    height $navbarHeight - 1rem
    min-width $navbarHeight - 1rem
    margin-right 0.8rem
    vertical-align top

  .home-link
    margin-right auto
    padding-left 10px
    display flex
    align-items center
    font-weight bold

  .site-name
    font-size 1.8rem
    font-weight 600
    color $textColor
    position relative

  .links
    position relative
    display flex
    white-space nowrap
    color #fff
    font-size 0.9rem

  .external-links-search
    position absolute
    right 1.5rem
    display flex
    align-items center
    justify-content center

    .search-box
      flex 0 0 auto
      vertical-align top

    .live-demo
      padding 0 1rem
      background linear-gradient(180deg, lighten($accentColor, 20%), lighten($accentColor, 10%))
      color #fff
      border-radius 0.4rem

@media (max-width 1400px)
  .home-navbar
    justify-content flex-start

    .home-link
      position relative
      padding-left 0px
      padding-right 20px

@media (max-width $MQMobile)
  .home-navbar
    padding-left 4rem

    .can-hide
      display none

    .links
      padding-left 1.5rem

    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
