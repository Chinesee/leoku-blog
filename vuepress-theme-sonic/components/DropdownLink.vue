<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <a
      class="dropdown-title nav-link"
      :class="{ 'router-link-active' : isActive }"
      :href="item.link"
      @click="handleDropdown"
    >
      <span class="title">{{ item.text }}</span>
      <icon-chevron-down />
    </a>
    <a
      class="mobile-dropdown-title"
      @click="setOpen(!open)"
    >
      <span class="title">{{ item.text }}</span>
      <icon-chevron-down :class="open ? 'down' : 'right'" />
    </a>

    <DropdownTransition>
      <ul
        v-show="open"
        class="nav-dropdown"
      >
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
        >
          <h4 v-if="subItem.type === 'links'">
            {{ subItem.text }}
          </h4>

          <ul
            v-if="subItem.type === 'links'"
            class="dropdown-subitem-wrapper"
          >
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
            >
              <NavLink
                :item="childSubItem"
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                    isLastItemOfArray(subItem, item.items) &&
                    setOpen(false)
                "
              />
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
            @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import IconChevronDown from '@theme/components/IconChevronDown.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
import last from 'lodash/last'

export default {
  name: 'DropdownLink',

  components: {
    NavLink,
    IconChevronDown,
    DropdownTransition,
  },

  props: {
    item: {
      required: true,
    },
  },

  data() {
    return {
      open: false,
    }
  },

  computed: {
    isActive() {
      const basePath = this.$route.path.split('/')[1]
      const linkBasePath = this.item.link && this.item.link.split('/')[1]
      return basePath === linkBasePath
    },

    dropdownAriaLabel() {
      return this.item.ariaLabel || this.item.text
    },
  },

  watch: {
    $route() {
      this.open = false
    },
  },

  methods: {
    setOpen(value) {
      this.open = value
    },

    isLastItemOfArray(item, array) {
      return last(array) === item
    },

    /**
     * Open the dropdown when user tab and click from keyboard.
     *
     * Use event.detail to detect tab and click from keyboard. Ref: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
     * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
     */
    handleDropdown() {
      const isTriggerByTab = event.detail === 0
      if (isTriggerByTab) this.setOpen(!this.open)
    },
  },
}
</script>

<style lang="stylus">
.dropdown-wrapper
  .dropdown-title
    height 100%
    display flex
    align-items center
    justify-content center
    font-weight 500
    cursor pointer

  .mobile-dropdown-title
    @extend .dropdown-title
    display none
    font-weight 600

    font-size inherit
      &:hover
        color $accentColor

  .nav-dropdown
    .dropdown-item
      color $textColor
      line-height 1.7rem

      h4
        margin 0.45rem 0 0
        padding 1rem 1.5rem 0.45rem 1.25rem

      .dropdown-subitem-wrapper
        padding 0
        list-style none

        .dropdown-subitem
          font-size 0.9em

      a
        position relative
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        line-height 1.7rem
        display block
        border-bottom none
        font-weight 400

        &:hover
          color $accentColor !important

        &.router-link-active
          color $accentColor

          &::after
            content ''
            position absolute
            top 50%
            left 9px
            width 5px
            height 5px
            border-radius 50%
            transform translateY(-50%)
            background-color $accentColor

      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0

@media (max-width $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem

    .dropdown-title
      display none

    .mobile-dropdown-title
      display block

    .nav-dropdown
      transition height 0.1s ease-out
      overflow hidden

      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0

        h4,
        & > a
          font-size 15px
          line-height 2rem

        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width $MQMobile)
  .dropdown-wrapper
    height 1.8rem

    &:hover .nav-dropdown,
    &.open .nav-dropdown
      // override the inline style.
      // display block !important
      transform translate(0, calc(100% + 10px)) !important
      visibility visible !important
      opacity 1 !important

    &.open:blur
      display none

    .nav-dropdown
      min-width 200px
      display block !important
      visibility hidden
      opacity 0
      // display none
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      left 0
      bottom 0
      transform translate(0, 100%)
      background-color #fff
      padding 0.6rem 0
      text-align left
      border-radius 0.4rem 0.6rem 0.6rem 0.6rem
      white-space nowrap
      margin 0
      transition all 0.25s ease
      box-shadow 0px 10px 20px -10px rgba(0, 0, 0, 0.2)
</style>
