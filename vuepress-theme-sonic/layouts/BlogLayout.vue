<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="blogItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Blog :blog-items="blogItems" />

    <page-footer />
  </div>
</template>

<script>
import Blog from '@theme/components/Blog.vue'
import Navbar from '@theme/components/Navbar.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import PageFooter from '@theme/components/PageFooter.vue'
import { resolveBlogItems } from '../util'

export default {
  name: 'BlogLayout',

  components: { Blog, Navbar, Sidebar, PageFooter },

  data() {
    return {
      isSidebarOpen: false,
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    blogItems() {
      return resolveBlogItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath,
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ]
    },
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
  },
}
</script>
