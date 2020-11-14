<template>
  <main class="project">
    <section class="project-list">
      <div class="container">
        <div class="page-title">
          <h1 class="title">{{ $page.title }}</h1>
        </div>

        <div class="creation-list">
          <div
            v-for="({ img, title, description, github, preview }) in creations"
            :key="title"
            class="creation-list__item"
          >
            <div class="img-wrapper">
              <img
                :src="img"
                :alt="`${title}的封面图片`"
                class="cover-img"
              >
            </div>

            <div class="text-content">
              <h3 class="">{{ title }}</h3>
              <p class="desc">{{ description }}</p>
              <div class="links">
                <div
                  v-if="github"
                  class="link"
                >
                  <a
                    class=""
                    rel="noopener noreferrer"
                    target="_blank"
                    :href="github"
                  >
                    GitHub
                  </a>
                </div>
                <div
                  v-if="preview"
                  class="link"
                >
                  <a
                    class=""
                    rel="noopener noreferrer"
                    target="_blank"
                    :href="preview"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Project',
  data: () => {
    const creations = [
      {
        img: '/img/cover_club.jpg',
        title: '意想社团 - 高校社团 APP',
        description: '在意想社团，你可以找到感兴趣的社团组织，也可以作为管理者来管理自己的组织。该应用可以用来宣传社团活动，加强社团间的交流。本项目使用 React Native 开发。',
        github: 'https://github.com/Chinesee/eason-club',
      },
      {
        img: '/img/cover_campus.jpg',
        title: '意想课表 - 教务信息查询助手',
        description: '微信小程序，在这里你可以查课表、查成绩、查考勤',
        github: 'https://github.com/Chinesee/eason-campus',
        preview: 'https://github.com/Chinesee',
      },
      {
        img: '/img/cover_share_admin.jpg',
        title: '乐享校园后台系统 - 校园二手交易平台',
        description: '我的毕业设计，是我使用 vue 做的第一个后台管理系统。',
        github: 'https://gitee.com/chinesee/love-share-admin',
        preview: '',
      },
      {
        img: '/img/cover_share_client.jpg',
        title: '乐享校园客户端 - 校园二手交易平台',
        description: '我的毕业设计，一个可以发布和购买二手商品的交易平台，具有订单查询、在线沟通、商品评价等功能。',
        github: 'https://github.com/Chinesee/love-share-client',
        preview: '',
      },
    ]
    const icons = {
      online: {
        icon: '🎨', label: '在线地址',
      },
      repository: {
        icon: '🎉', label: '项目仓库',
      },
    }
    return {
      creations,
      icons,
    }
  },
  components: {},
  computed: {
  },
}
</script>

<style lang="stylus" scoped>
.project-list
  position relative
  min-height 'calc(100vh - %s - %s)' % ($navbarHeight $footerHeight)
  box-sizing border-box

  .container
    position relative
    z-index 10
    max-width 1000px
    margin 0 auto
    padding 4rem 0

    .page-title
      margin-bottom 4rem

      .title
        margin 0
        color $accentColor
        font-size 3rem

    .creation-list
      &__item
        margin-bottom 1rem
        padding 2rem 0
        display flex
        border-bottom 1px solid rgba(0, 0, 0, 0.05)

        .img-wrapper
          width 350px
          height 200px
          border-radius 10px
          box-shadow 0 0 15px 5px rgba(0, 0, 0, 0.05)
          overflow hidden

          img
            width 100%
            height 100%
            object-fit cover

        .text-content
          flex 1
          margin-left 2.5rem

        .desc
          text-overflow-lines(2)

        .links
          display flex

          .link
            padding 0 0.8rem

            &:first-child
              padding-left 0

@media (max-width $MQMobile)
  .project-list
    .container
      padding 0 2rem

      .page-title
        margin 2rem 0

        h1
          margin 0
          font-size 2rem

      .creation-list
        &__item
          flex-direction column

          .img-wrapper
            width 100%

          .text-content
            margin 1rem 0 0 0
</style>
