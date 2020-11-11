<template>
  <section class="blog-list">
    <div class="bg">
      <svg
        class="bg-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1205 918"
      >
        <path
          fill="rgba(100, 133, 255, 0.05)"
          fill-rule="evenodd"
          d="M786.762 81.215c-5.731 0-11.435.12-17.11.348-106.873 4.14-114.975-2.673-172.065-38.455C555.367 15.836 505.072 0 451.077 0 325.84 0 220.502 85.158 189.724 200.742c-19.29 66.98-24.02 74.033-83.435 121.661l.01.005C41.498 374.42 0 454.288 0 543.865 0 700.6 127.012 827.66 283.69 827.66c26.16 0 51.486-3.559 75.539-10.19 81.736-20.874 101.626-24.156 209.346 39.146C632.095 895.55 706.808 918 786.762 918 1017.749 918 1205 730.68 1205 499.607c0-231.072-187.251-418.392-418.238-418.392"
          opacity="1"
        ></path>
      </svg>
      <bg-stars class="bg-stars" />
    </div>

    <div class="container">
      <div class="page-title">
        <h1 class="title">{{ $page.title }}</h1>
      </div>

      <div class="articles">
        <article
          v-for="(blog, i) in blogItems"
          :key="i"
          class="blog-item"
        >
          <RouterLink
            class="blog-link"
            :to="blog.path"
          >
            <h3 class="blog-item__title">{{ blog.title }}</h3>
            <p class="blog-item__desc">{{ blog.frontmatter.description }}</p>
            <div class="blog-item__more">
              查看全文
              <icon-right-arrow style="transform: translateY(5px)" />
            </div>
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import BgStars from '@theme/components/BgStars.vue'
import IconRightArrow from '@theme/components/IconRightArrow.vue'

export default {
  name: 'BlogList',
  components: { BgStars, IconRightArrow },
  props: ['blogItems'],
}
</script>

<style lang="stylus" scoped>
.blog-list
  position relative
  min-height 'calc(100vh - %s)' % $navbarHeight
  box-sizing border-box

  .bg
    position absolute
    top 0
    left 0
    overflow visible

    .bg-block
      position absolute
      top 0
      left -40vw
      height auto
      width calc(90vw + 25vh)
      transform-origin center

    .bg-stars
      position absolute
      width calc(100vw - 10px)

  .container
    position relative
    z-index 10
    padding-top 6rem
    padding-left 20rem
    padding-right 2rem

    .page-title
      margin-bottom 4rem

      h1
        margin 0
        color $accentColor
        font-size 3rem

  .articles
    max-width 600px

    .blog-item
      margin-bottom 3.5rem
      cursor pointer

      .blog-link
        color $textColor

      &__title
        max-width 450px
        margin 0
        line-height 1.5
        font-size 1.6rem
        transition all 0.3s

      &__desc
        text-overflow-lines(2)
        text-align justify
        font-size 1.1rem
        font-weight normal
        color lighten($textColor, 40%)

      &__more
        display inline-block
        padding 0 0 2px 0
        color $accentColor
        font-size 1.1rem
        border-bottom 2px solid $accentColor
        transition all 0.3s

      &:hover
        .blog-item__title
          color $accentColor

        .blog-item__more
          border-color transparent

@media (max-width $MQMobile)
  .blog-list
    .container
      padding 0 2rem

      .page-title
        margin 2rem 0

        h1
          margin 0
          font-size 2rem
</style>