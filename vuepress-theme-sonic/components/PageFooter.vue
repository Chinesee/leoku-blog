<template>
  <div class="footer">
    <div>
      <div class="footer-brand">
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
        >{{ $siteTitle }}</span>
      </div>
      <p class="footer-text">
        Created by <a
          class="author"
          href="https://github.com/Chinesee"
          rel="noopener noreferrer"
          target="_blank"
        >@LeoKu</a>. Powered by Vue.js. <br>
        Open-source MIT Licensed.
      </p>
    </div>

    <div class="footer-social">
      <a
        class="icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Chinesee"
        title="GitHub"
      >
        <icon-github />
      </a>
      <a
        class="icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://weibo.com/leoku4"
        title="新浪微博"
      >
        <icon-weibo />
      </a>
      <a
        class="icon"
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/Jack59846322"
        title="Twitter"
      >
        <icon-twitter />
      </a>
    </div>
  </div>
</template>

<script>
import IconGithub from '@theme/components/IconGithub.vue'
import IconWeibo from '@theme/components/IconWeibo.vue'
import IconTwitter from '@theme/components/IconTwitter.vue'

export default {
  name: 'PageFooter',

  components: {
    IconGithub,
    IconWeibo,
    IconTwitter,
  },
}
</script>

<style lang="stylus" scoped>
.footer
  position relative
  z-index $footerIndex
  padding 2rem 1.2rem
  display flex
  align-items flex-end

  &-brand
    display flex
    align-items center

    .logo
      height 1.6rem
      min-width 1.6rem

    .site-name
      margin-left 0.5rem
      font-size 1rem
      font-weight 600
      color $textColor

  .footer-text
    margin-bottom 0
    font-size 0.85rem
    color lighten($textColor, 60%)

    .author
      color inherit
      transition color 0.2s

      &:hover
        color $accentColor

  &-social
    margin-left auto
    display flex
    align-items center

    .icon
      width 2rem
      height 2rem
      margin 0 0.5rem
      display flex
      justify-content center
      align-items center
      color lighten($textColor, 60%)
      border-radius 50%
      transition background-color 0.2s

      &:hover
        background-color lighten($accentColor, 92%)

        svg
          color lighten($accentColor, 25%)

    svg
      width 20px

@media (max-width $MQMobile)
  .footer
    flex-direction column
    align-items center

    &-brand
      justify-content center

    .footer-text
      text-align center

    &-social
      margin 1rem 0 0 0
</style>
