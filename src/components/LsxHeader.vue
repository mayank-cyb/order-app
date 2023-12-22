<template>
  <VAppBar
    prominent
    absolute
    class="custom-header"
  >
    <VToolbarTitle>
      <span>{{ t('headline.orders') }}</span>
    </VToolbarTitle>
    <VList
      color="transparent"
      class="list-orders"
      density="compact"
      nav
    >
      <VListItem
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
      </VListItem>
    </VList>
    <VSpacer />
    <lsx-date />
    <VList class="list-horizontal">
      <VListItem>
        <RpxButtonCircle 
          size="medium" 
          icon="lsx-icon-bell" 
          btn-type="danger" 
        />
      </VListItem>
      <VListItem>
        <RpxButtonCircle 
          size="medium" 
          icon="lsx-icon-message" 
          btn-type="info" 
        />
      </VListItem>
      <VListItem>
        <RpxButtonCircle 
          size="medium" 
          icon="lsx-icon-search" 
          btn-type="secondary" 
        />
      </VListItem>
    </VList>
  </VAppBar>
</template>

<script setup>
    import { RpxButtonCircle } from '@fssd/rpx-app-components'
    import { reactive } from 'vue';
    import LsxDate from './LsxDate.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n();
    const listTopItems = reactive([
        { label: t('links.active'), routeTo: 'orders-active' },
        { label: t('links.completed'), routeTo: 'orders-completed' },
    ])
</script>

<style lang="scss" scoped>
@import './src/assets/variables.scss';
@import './src/assets/mixins.scss';

header {
    &.v-app-bar {
        &.v-toolbar {
            &.v-btn--variant-text {
                font-weight: $black;
            }
            &.custom-header{
                background: $color_rpx_bg;
                color: $color_white;
                height: 5rem;
                padding: 0 2.375rem 0 7.625rem;
                align-items: flex-end;
                justify-content: center;
                box-shadow: none;
            }
        }
        .v-btn--variant-text {
                font-weight: $black;
            }
        .v-list {
            &.list-orders {
                display: flex;
                background: $color_rpx_bg;
                padding: 0;
            }
            &-item {
                &:hover {
                    background: none;
                }
            }
        }
        :deep(.btn-text-only) {
            .v-btn__content {
                box-sizing: content-box;
                position: relative;
                font-size: 1.25rem;
                font-weight: $medium;
                color: $color_header_link_inactive;
            }
        }
        :deep(.v-btn--variant-text) {
            .v-btn__overlay,
            .v-btn__underlay {
                background: none;
            }
        }
        .v-toolbar-title {
            flex: 0 0 auto;
            font-size: 2.6875rem;
            margin-right: 1rem;
            line-height: 3.75rem;
            letter-spacing: -0.0083333333em;
            text-transform: none;
            &__placeholder {
                span {
                    font-weight: $black;
                }
            }
        }
        .list-horizontal {
            display: flex;
            gap: 0.5625rem;
            background-color: $color_rpx_bg;
        }
        :deep(.v-list-item--active) {
            .v-btn__content {
                color: $color_white;
                @include activeLinkUnderline(0.25rem, 0.75rem);
            }
        }
        .v-list--one-line{
            .v-list-item--one-line {
                padding: 0;
            }
        }
    }
}
</style>
