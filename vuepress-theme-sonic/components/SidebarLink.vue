<script>
import { isActive, hashRE, groupHeaders } from '../util'

export default {
  functional: true,

  props: ['item', 'sidebarDepth'],

  render(h,
    {
      parent: {
        $page,
        $site,
        $route,
        $themeConfig,
        $themeLocaleConfig,
      },
      props: {
        item,
        sidebarDepth,
      },
    }) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
      ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
      : selfActive
    const link = item.type === 'external'
      ? renderExternal(h, item.path, item.title || item.path)
      : renderLink(h, item.path, item.title || item.path, active)

    const maxDepth = [
      $page.frontmatter.sidebarDepth,
      sidebarDepth,
      $themeLocaleConfig.sidebarDepth,
      $themeConfig.sidebarDepth,
      1,
    ].find(depth => depth !== undefined)

    const displayAllHeaders = $themeLocaleConfig.displayAllHeaders
      || $themeConfig.displayAllHeaders

    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [link, renderChildren(h, children, item.path, $route, maxDepth)]
    } else {
      return link
    }
  },
}

function renderLink(h, to, text, active, level) {
  const component = {
    props: {
      to,
      activeClass: '',
      exactActiveClass: '',
    },
    class: {
      active,
      'sidebar-link': true,
    },
  }

  if (level > 2) {
    component.style = {
      'padding-left': level + 'rem',
    }
  }

  return h('RouterLink', component, text)
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', { class: 'sidebar-sub-header' }, [
      renderLink(h, path + '#' + c.slug, c.title, active, c.level - 1),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1),
    ])
  }))
}

function renderExternal(h, to, text) {
  return h('a', {
    attrs: {
      href: to,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    class: {
      'sidebar-link': true,
    },
  }, [text])
}
</script>

<style lang="stylus">
.sidebar .sidebar-sub-headers
  padding-left 1rem
  font-size 0.95em

a.sidebar-link
  position relative
  width 100%
  padding 0.35rem 1rem 0.35rem 1.25rem
  display inline-block
  line-height 1.4
  color #bbc1c7
  font-size 1em
  font-weight 400
  box-sizing border-box
  transition all 0.3s

  &::before
    content ''
    position absolute
    top 50%
    left 0
    width 5px
    height 30px
    transform translate(-100%, -50%)
    transition all 0.5s
    border-radius 0 5px 5px 0
    background $textColor
    opacity 0

  &:hover
    color $textColor

  &.active
    font-weight 500
    color $textColor

    &::before
      transform translate(0%, -50%)
      opacity 1

  .sidebar-group &
    padding-left 2rem

  .sidebar-sub-headers &
    padding-top 0.25rem
    padding-bottom 0.25rem

    &::before
      content ''
      position absolute
      top 50%
      left 10px
      width 0
      height 3px
      transform translateY(-50%)
      transition all 0.5s
      border-radius 2px
      background $textColor
      opacity 0

    &.active
      font-weight 500

      &::before
        width 10px
        opacity 1
</style>
