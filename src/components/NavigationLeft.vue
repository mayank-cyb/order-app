<template>
  <VNavigationDrawer 
    class="bg-deep-blue" 
    permanent
    :width="100" 
    absolute
  >
    <VList 
      color="transparent" 
      class="list-top" 
      density="compact" 
      nav
    >
      <VListItem
        v-for="(item, index) in listTopItems"
        :key="`item-${index}`"
        :to="{ name: item.routeTo }"
        :ripple="false"
        :active="route.name == item.routeTo && !drawerLinkActive"
      >
        <RpxButtonWithIcon
          :label="item.label"
          :icon="item.icon"
          color="siteBg"
          @click="navLinkClicked({ type: 'router-link' })"
        />
      </VListItem>
      <VListItem :active="drawerLinkActive">
        <RpxButtonWithIcon
          :label="t('btn.links')"
          icon="lsx-icon-links"
          color="siteBg"
          @click="navLinkClicked({ type: 'drawer-toggle-link' })"
        />
      </VListItem>
    </VList>
    <VList 
      color="transparent" 
      class="list-bottom" 
      nav
    >
      <VListItem
        v-for="(item, index) in listBottomItems"
        :key="`item-${index}`"
        :to="{ name: item.routeTo }"
        :active="route.name == item.routeTo && !drawerLinkActive"
      >
        <RpxButtonWithIcon
          :label="item.label"
          :icon="item.icon"
          color="siteBg"
          @click="navLinkClicked({ type: 'router-link' })"
        />
      </VListItem>
      <VListItem>
        <span class="text--app-version">{{ t('appVersion') }}</span>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
import { RpxButtonWithIcon } from '@fssd/rpx-app-components'
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()
const props = defineProps({
  drawer: {
    type: Boolean
  }
})
console.log(t)
const emit = defineEmits(['router-link-clicked', 'drawer-toggle-link-clicked'])
const drawerLinkActive = ref(props.drawer)
const listTopItems = reactive([
  { label: t('btn.orders'), icon: 'lsx-icon-orders', routeTo: 'home' },
  { label: t('btn.kiosks'), icon: 'lsx-icon-kiosk', routeTo: 'kiosks' },
  { label: t('btn.systems'), icon: 'lsx-icon-system', routeTo: 'systems' }
])

const listBottomItems = reactive([
  { label: t('btn.passport'), icon: 'lsx-icon-passport', routeTo: 'passport' },
  { label: t('btn.help'), icon: 'lsx-icon-help', routeTo: 'help' },
  { label: t('btn.closeLab'), icon: 'lsx-icon-sleep', routeTo: 'closeLab' }
])
function navLinkClicked(link) {
  if (link.type == 'router-link') {
    drawerLinkActive.value = false
    emit('router-link-clicked')
  } else if (link.type == 'drawer-toggle-link') {
    drawerLinkActive.value = !drawerLinkActive.value
    emit('drawer-toggle-link-clicked')
  }
}
watch(
  () => props.drawer,
  (newDrawerStatus) => (drawerLinkActive.value = newDrawerStatus)
)
</script>

<style lang="scss" scoped>
@import './src/assets/variables.scss';
:deep(.v-list) {
  &.list-top,
  &.list-bottom {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  &.list-bottom {
    border-top: 0.0675rem solid $color_white;
  }
  .v-list-item--nav {
    &:not(:only-child) {
      margin: 0;
      padding: 0;
    }
  }
}
:deep(.v-list-item) {
  position: relative;
  height: 6.375rem;
  &.v-list-item--active {
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      height: 5.625rem;
      padding: 0 0.3125rem; // padding-top and padding-bottom will make the total underline width that's why divided by 2
      background: $color_link_active_indicator;
    }
  }
  &:hover {
    background: none;
  }
}
:deep(.v-list-item__content) {
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss">
@import './src/assets/variables.scss';
.v-navigation-drawer {
  &--left {
    &.bg-deep-blue {
      background-color: $color_rpx_bg;
      top: 0 !important; //This is inline style; we cannot modify it.
      padding: 5.5625rem 0 0;
      height: 100% !important; //This is inline style; we cannot modify it.
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: hidden;
    gap: 16rem;
    flex-grow: 1;
  }
}
.text {
  &--app-version {
    color: $color_white;
    font-size: 0.75rem;
  }
}
</style>
