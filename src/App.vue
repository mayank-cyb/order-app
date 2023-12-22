<template>
  <VApp>
    <section class="header-section">
      <LsxHeader />
    </section>
    <NavigationLeft
      :drawer="drawer"
      @drawer-toggle-link-clicked="toggleDrawerStatus"
      @router-link-clicked="closeDrawer"
    />
    <NavigationDrawerLeft
      v-model="drawer"
      @click="toggleDrawerStatus"
    />
    <v-main class="main-content">
      <section class="main-content__dynamic-view">
        <v-card>
          <router-view />
        </v-card>
      </section>
      <section class="bottom-content__dynamic-view">
        <router-view name="WaitingOrders"></router-view>
      </section>
    </v-main>
  </VApp>
</template>

<script setup>
    import LsxHeader from './components/LsxHeader.vue'
    import NavigationLeft from './components/NavigationLeft.vue'
    import NavigationDrawerLeft from './components/NavigationDrawerLeft.vue'
    import { ref } from 'vue'
    import '@/assets/global.scss'
    let drawer = ref(false)
    const toggleDrawerStatus = () => {
      drawer.value = !drawer.value
    }
    const closeDrawer = () => {
      drawer.value = false
    }
</script>

<style lang="scss" scoped>
@import './src/assets/variables.scss';
.v-application {
  background: $color_rpx_bg ;
  font-display: $font_roboto;
  min-height: 65.5rem !important;
}
.v-app-bar {
  background: $color_rpx_bg;
}
.header-section{
  z-index: 1003;
}
:deep(.v-main) {
  position: relative;
  background: $color_rpx_bg;
  padding: 5rem 2.375rem 14.5rem 6.25rem;
}
.main-content {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  &__dynamic-view,
  &__headline,
  &__waiting-orders {
    background: $color_white;
    border-radius: 0.75rem;
  }
  &__dynamic-view {
    height: 51.25rem;
    padding: 1.125rem;
  }
  &__headline {
    background: $color_rpx_bg;
    padding-left: 2.0625rem;
    .v-card {
      background: $color_rpx_bg;
      color: $color_white;
      box-shadow: none;
      &-title {
        letter-spacing: normal;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: $black;
        border-style: none;
        padding: 0;
      }
    }
  }
  &__waiting-orders {
    height: 31.875rem;
    background: $color_white;
  }
}
.v-card {
  border-style: none;
  box-shadow: none;
}
</style>