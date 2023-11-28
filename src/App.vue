<template>
  <v-app>
    <the-header />
    <navigation-left @drawer-link-clicked="toggleDrawerStatus" @other-links-clicked="closeDrawer" :drawer="drawer"/>
    <navigation-drawer-left v-model="drawer" @click="toggleDrawerStatus"/>
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
  </v-app>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import NavigationLeft from './components/NavigationLeft.vue'
// eslint-disable-next-line no-unused-vars
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
  align-self: center;
  background: $colorRpxBg !important;
  font-display: $fontRoboto;
  // max-width: 120rem;
  // width: 100%;
  //margin: 0 auto;
}
.v-app-bar {
  background: $colorRpxBg !important;
}
.v-main {
  position: relative;
  background: $colorRpxBg;
  padding: 5rem 2.375rem 5rem 6.25rem;
  min-height: 109.25rem !important; 
}
.main-content,
.bottom-content {
  border-radius: 0.75rem;
  overflow: hidden;
}
.main-content {
  display: flex;
  gap: 1rem !important;
  flex-direction: column;
  &__dynamic-view {
    background: $colorWhite !important;
    border-radius: 0.75rem;
    height: 51.25rem !important;
    padding: 1.125rem;
  }
}
.v-card {
  border-style: none;
  box-shadow: none !important;
}
</style>
