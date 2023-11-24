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
      <section class="main-content__headline">
        <v-card>
          <v-card-title class="text-h3">Waiting Orders</v-card-title>
        </v-card>
      </section>
      <section class="main-content__waiting-orders">
        <v-card> </v-card>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import NavigationLeft from './components/NavigationLeft.vue'
// eslint-disable-next-line no-unused-vars
import NavigationDrawerLeft from './components/NavigationDrawerLeft.vue'
import { ref, watch, onMounted } from 'vue'
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
  background: $colorRpxBg !important;
  font-display: $fontRoboto;
}
.v-app-bar {
  background: $colorRpxBg !important;
}
.v-main {
  position: relative;
  background: $colorRpxBg;
  padding: 5rem 2.375rem 5rem 6.25rem;
}

.main-content {
  display: flex;
  gap: 1rem !important;
  flex-direction: column;
  &__dynamic-view,
  &__headline,
  &__waiting-orders {
    background: $colorWhite !important;
    border-radius: 0.75rem;
  }
  &__dynamic-view {
    height: 51.25rem !important;
    padding: 1.125rem;
  }
  &__headline {
    background: $colorRpxBg !important;
    padding-left: 2.0625rem;
    .v-card {
      background: $colorRpxBg !important;
      color: $colorWhite;
      box-shadow: none;
      &-title {
        font-size: 1.875rem !important;
        line-height: 2.25rem;
        font-weight: $black;
        border-style: none;
        padding: 0;
      }
    }
  }
  &__waiting-orders {
    height: 31.875rem !important;
    background: $colorWhite !important;
  }
}
.v-card {
  border-style: none;
  box-shadow: none !important;
}
</style>
