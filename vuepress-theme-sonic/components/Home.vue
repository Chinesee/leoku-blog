<template>
  <main class="home">
    <section class="introduction">
      <div class="avatar-bg">
        <img
          alt="avatar"
          class="avatar"
          src="/avatar.png"
        >
      </div>
      <p class="text text-1">
        Hi, I'm LeoKu 🖖
      </p>
      <p class="text text-2">
        <span :class="{ 'point': true }">
          Good at
          <!-- <img
            class="underscore"
            src="/underscore.svg"
          > -->
        </span>
        dreaming <br>
        Indulge in programming <br>
        Love to contribute
      </p>
      <p class="text text-3">
        A front-end developer by now <br>
        Trying various programming languages <br>
        Keep exploring
      </p>

      <router-link to="/about">
        <div class="about">
          更多关于我
        </div>
      </router-link>

      <div class="text">
        <a
          v-for="({ name, icon, link }) in [
          { name: 'GitHub', icon: '/icon/github.svg', link: 'https://github.com/Chinesee' },
          { name: '新浪微博', icon: '/icon/weibo.svg', link: 'https://weibo.com/leoku4' },
          { name: 'Codepen', icon: '/icon/codepen.svg', link: 'https://codepen.io/chinesee' },
        ]"
          :key="icon"
          :href="link"
          :title="name"
          style="margin: 0 0.6rem;"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="icon">
        </a>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Home',

  components: {},

  computed: {
    data() {
      return this.$page.frontmatter
    },
  },
}
</script>

<style lang="stylus">
.home
  min-width 1100px
  max-width $homePageWidth
  margin 0 auto
  padding 0 2rem
  display block

  .introduction
    min-height 100vh - $navbarHeight
    display flex
    flex-direction column
    justify-content center
    align-items center

    .avatar-bg
      width 8rem
      height 8rem
      display flex
      justify-content center
      align-items center
      border-radius 50%
      background-color lighten($accentColor, 40)

      .avatar
        width 5rem

    .point
      position relative
      z-index 0

      &::after
        content url('/underscore.svg')
        position absolute
        z-index -1
        top 0
        left 0
        height 100px
        transform translate(-40px, -60px)

    .text
      line-height 1.5
      text-align center
      font-weight 700

    .text-1
      margin 2.5rem 0 0 0
      font-size 1.5rem

    .text-2
      margin 2.5rem 0
      font-size 4rem

    .text-3
      margin 0 0 4rem 0
      font-size 1.125rem

    .about
      width 10rem
      height 3rem
      line-height 3rem
      margin-bottom 2rem
      text-align center
      border-radius 1.5rem
      color #fff
      background-color $textColor

@media (max-width $MQMobile)
  .home
    min-width initial

    .introduction
      margin 0 -2rem

      .point::after
        display none

      .text-1
        font-size 1.125rem

      .text-2
        font-size 1.9rem

      .text-3
        font-size 1rem

@media (max-width $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
</style>
