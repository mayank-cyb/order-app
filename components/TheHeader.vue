<template>
    <v-app-bar prominent>
      <v-toolbar-title class="text-h2">
        <span>Orders</span>
      </v-toolbar-title>
      <v-list color="transparent" class="list-orders" density="compact" nav>
            <v-list-item
                v-for="(item, index) in listTopItems"
                :key="`item-${index}`"
                :to="{ name: item.routeTo }"
                :ripple="false"
            >
                <v-btn            
                    :ripple="false" 
                    variant="text"
                    class="btn-text-only"
                >
                    {{ item.label }}

                </v-btn>
            </v-list-item>
        </v-list>
      <v-spacer></v-spacer>
      <the-date />
      <v-list class="list-horizontal">
        <v-list-item>
          <RpxButtonCircle size="medium" icon="lsx-icon-bell" btnType="danger"></RpxButtonCircle>
        </v-list-item>
        <v-list-item>
          <RpxButtonCircle size="medium" icon="lsx-icon-message" btnType="info"></RpxButtonCircle>
        </v-list-item>
        <v-list-item>
          <RpxButtonCircle
            size="medium"
            icon="lsx-icon-search"
            btnType="secondary"
          ></RpxButtonCircle>
        </v-list-item>
      </v-list>
    </v-app-bar>
</template>

<script setup>
import { RpxButtonCircle } from '@fssd/rpx-app-components'
import { reactive } from 'vue';
import TheDate from './TheDate.vue';
const listTopItems = reactive([
      { label: 'Active', isRoute: true, routeTo: 'orders-active' },
      { label: 'Completed', isRoute: true, routeTo: 'orders-completed' },
  ])
</script>

<style lang="scss">
@import './src/assets/variables.scss';
@import './src/assets/mixins.scss';
header {
    position: absolute !important;
    z-index: 1003 !important;
    background: $colorRpxBg !important;
    color: $colorWhite !important;
    height: 5rem !important;
    padding: 0 2.375rem 0 7.625rem !important;
    align-items: flex-end;
    justify-content: center;
    &.v-toolbar {
        box-shadow: none !important;
        justify-content: center;
        .v-btn--variant-text {
            font-weight: $black !important;

        }
    }
    .v-list {
        &.list-orders{
            display: flex;
            background: $colorRpxBg;
            padding: 0 !important;
        }
        &-item {
            &:hover {
                background: none !important;
            }
        }
    }
    .v-btn--size-default {
        font-size: 1.25rem !important;
        font-weight: $bold !important;
    }
    .btn-text-only {
        .v-btn__content {
            box-sizing: content-box;
            position: relative;
            font-size: 1.25rem !important;
            font-weight: $medium !important;
            color: $colorHeaderLinkInactive;
        }
    }

    .v-btn--variant-text {
        .v-btn__overlay,
        .v-btn__underlay {
            background: none !important;
        }
    }
    .v-toolbar-title {
        flex: 0 0 auto;
        &.text-h2 {
            font-size: 2.6875rem !important;
            font-weight: 900 !important;
            margin-right: 1rem;
        }
        &__placeholder {
            span {
            font-weight: $black;
            }
        }
    }
    .list-horizontal {
        display: flex !important;
        gap: 0.5625rem;
        background-color: $colorRpxBg;
        .v-list-item {
            padding: 0 !important;
        }
    }
    .v-list-item--active {
        .v-btn__content {
            color: $colorWhite;
            @include activeLinkUnderline(0.25rem, 0.3125rem);
        }
    }
    .v-list-item--one-line {
        padding: 0 !important;
    }
}


</style>