<template>
    <v-navigation-drawer
        class="bg-deep-blue"
        permanent
        :width="100"
    >
        <v-list color="transparent" class="list-top" density="compact" nav>
            <v-list-item
                v-for="(item, index) in listTopItems"
                :key="`item-${index}`"
                :to="{ name: item.routeTo }"
                ref="listTopLink"
                :ripple="false"
                :active="route.name == item.routeTo && !drawerLinkActive"
            >
                <rpx-button-left-navigation :label="item.label" :icon="item.icon" @click="route.name == 'links' ? onDrawerLinkClick() : onOtherLinkClick()"></rpx-button-left-navigation>
            </v-list-item>
            <v-list-item :active="drawerLinkActive">
                <rpx-button-left-navigation label="Links" icon="lsx-icon-links"  @click="onDrawerLinkClick" ref="DrawerLink"></rpx-button-left-navigation>
            </v-list-item>
        </v-list>
        <v-list color="transparent" class="list-bottom" nav>
            <v-list-item
                v-for="(item, index) in listBottomItems"
                :key="`item-${index}`"
                :to="{ name: item.routeTo}"
                ref="listBottomLink"
                :active="route.name == item.routeTo && !drawerLinkActive"
            >
                <rpx-button-left-navigation :label="item.label" :icon="item.icon" @click="onOtherLinkClick"></rpx-button-left-navigation>
            </v-list-item>
            <v-list-item>
                <span class="text--app-version">V 1100.0.0</span>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { RpxButtonLeftNavigation } from '@fssd/rpx-app-components';
import { ref, reactive, watch } from 'vue';
import { useRoute } from 'vue-router'
    const route = useRoute()
    const props = defineProps(['drawer'])
    const emit = defineEmits(['other-links-clicked', 'drawer-link-clicked'])
    let drawerLinkActive = ref(props.drawer)
    const listTopItems = reactive([
        { label: 'Orders', icon: 'lsx-icon-orders', isRoute: true, routeTo: 'home' },
        { label: 'Kiosks', icon: 'lsx-icon-kiosk', isRoute: true, routeTo: 'kiosks' },
        { label: 'Systems', icon: 'lsx-icon-system', isRoute: true, routeTo: 'systems' },
    ])

    const listBottomItems = reactive([
        { label: 'Passport', icon: 'lsx-icon-passport', isRoute: true, routeTo: 'passport' },
        { label: 'Help', icon: 'lsx-icon-help', isRoute: false, routeTo: 'help' },
        { label: 'Close Lab', icon: 'lsx-icon-sleep', isRoute: true, routeTo: 'closeLab' },
    ])

    function onOtherLinkClick() {
        drawerLinkActive.value = false
        emit('other-links-clicked')
    }
    function onDrawerLinkClick() {
        drawerLinkActive.value = !drawerLinkActive.value
        emit('drawer-link-clicked')
    }
    watch(() => props.drawer, newDrawerStatus => drawerLinkActive.value = newDrawerStatus)
</script>

<style lang="scss">
    @import './src/assets/variables.scss';
    .v-app-bar {
        box-shadow: none !important;
    }
    .bg-deep-blue {
        background-color: $colorRpxBg !important;
    }
    .v-navigation-drawer {
        &--left {
            padding: 6.25rem 0 0;
            position: absolute !important;
            z-index: 1006 !important;
            top: 0 !important;
            bottom: 0 !important;
            height: 100% !important;
            overflow-y: hidden !important;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &:not(.v-navigation-drawer--temporary) {
                .v-list {
                    &.list-top,
                    &.list-bottom {
                        display: flex;
                        flex-direction: column;
                        //gap: 2.5625rem !important;
                        padding: 0 !important;
                    }
                    &.list-bottom {
                        border-top: 0.0675rem solid $colorWhite !important;
                    }
                    .v-list-item--nav {
                        &:not(:only-child) {
                            margin: 0 !important;
                            padding: 0 !important;

                        }
                    }
                }
                .v-list-item {
                    position: relative;
                    height: 6.375rem !important;
                    &.v-list-item--active {
                        &::before {
                            content: '';
                            position: absolute;
                            z-index: 1;
                            height: 5.625rem;
                            padding: 0 0.3125rem; // padding-top and padding-bottom will make the total underline width that's why divided by 2
                            background: $colorLinkActiveIndicator;
                        }
                    }
                    &__content {
                        display: flex !important;
                        justify-content: center !important;
                    }
                    &:hover {
                        background: none !important;
                    }
                }
            }
        }
        &__content {
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            height: 67.5rem !important;
            overflow-y: hidden !important;
            gap: 16rem !important;
            flex-grow: 1 !important;
        }
    }
    .text {
        &--app-version {
            color: $colorWhite;
            font-size: 0.75rem !important;
        }
    }
</style>