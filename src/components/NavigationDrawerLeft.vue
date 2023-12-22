<template>
  <VNavigationDrawer 
    location="left"
    temporary
    fixed
    @click="$emit('click')"
  >
    <div class="text-h2">
      {{ t('headline.links') }}
    </div>
    <VList
      density="compact"
      nav
    >
      <VListItem
        v-for="(item, index) in listItems"
        :key="`item-${index}`"
        :ripple="false"
      >
        <VBtn
          :ripple="false"
        >
          {{ item.label }}
        </VBtn>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
  
<script setup>
    import { reactive } from 'vue'
    import { useI18n } from 'vue-i18n'
    const emit = defineEmits(['click'])
    const { t } = useI18n();
    const listItems = reactive([
        { label: t('btn.port')},
        { label: t('btn.oneWalmart')},
        { label: t('btn.servicePortal')},
        { label: t('btn.yesVideo')},
        { label: t('btn.orderStatus')},
        { label: t('btn.marketing')},
    ])
</script>

<style lang="scss" scoped>
    @import './src/assets/variables.scss';
    .v-navigation-drawer {
        &--temporary {
            top: 0 !important; //This is inline style; we cannot modify it.
            bottom: 0;
            height: 100% !important; //This is inline style; we cannot modify it.
            background: $color_bg_nav_drawer;
            width: 20rem !important; //This is inline style; we cannot modify it.
            padding: 2.75rem 3.1875rem;
            :deep(.v-navigation-drawer__content) {
                gap: 0;
                .v-list{
                    .v-list-item {
                        grid-template-rows: 1.625rem;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
            :deep(.v-btn--size-default) {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                background: none;
                box-shadow: none;
                text-align: left;
                padding: 0;
                max-height: 1.625rem;
                &:not(:only-child) {
                    padding: 0;
                }
            }
            :deep(.v-btn__content) {
                font-size: 1.25rem;
                font-weight: $medium;
            }
            .v-list {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                padding: 0;
                flex-grow: 0;
                color: $color_white !important; //This is inline style; we cannot modify it.
            }
            .v-list-item--density-compact {
                &.v-list-item--one-line {
                    min-height: 1.625rem ;
                    justify-content: flex-start;
                }
            }
            .text-h2 {
                font-weight: $black;
                font-size: 2.6875rem;
                margin-bottom: 2.3125rem ;
                color: $color_white;
            }
        }
    }
</style>
