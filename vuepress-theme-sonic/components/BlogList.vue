<template>
  <section class="blog-list">
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
import IconRightArrow from '@theme/components/IconRightArrow.vue'

export default {
  name: 'BlogList',
  components: { IconRightArrow },
  props: ['blogItems'],
}
</script>

<style lang="stylus" scoped>
.blog-list
  position relative
  min-height 'calc(100vh - %s)' % $navbarHeight
  box-sizing border-box

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