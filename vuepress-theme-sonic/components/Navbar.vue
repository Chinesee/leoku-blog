<template>
  <header
    class="navbar"
    :class="{ 'navbar-blog': $page.path.includes('/blog') }"
  >
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink :to="$localePath" class="home-link">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <NavLinks class="can-hide" />
    </div>

    <div class="external-links-search">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $site.themeConfig.search !== false &&
          $page.frontmatter.search !== false
        "
      />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
// import SearchBox from '@SearchBox'
import SearchBox from '@theme/components/SearchBox.vue'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    }
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      )
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, 'paddingLeft')) +
      parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0)
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
.navbar
  padding 0 1.2rem
  display flex
  align-items center
  justify-content center
  line-height $navbarHeight - 1.4rem
  background-color hsla(0, 0%, 100%, 0.8)
  backdrop-filter saturate(180%) blur(5px)

  a,
  span,
  img
    display inline-block

  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top

  .home-link
    position absolute
    left 0px
    margin-right 40px
    padding-left 10px
    font-weight bold

  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative

  .links
    position relative
    display flex
    white-space nowrap
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
  .navbar
    justify-content flex-start

    .home-link
      position relative
      padding-left 0px
      padding-right 20px

@media (max-width $MQMobile)
  .navbar
    padding-left 4rem
    background-color #fff !important

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
