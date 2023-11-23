<template>
    <v-navigation-drawer 
        location="left"
        theme="dark"
        temporary
        @click="$emit('click')"
        ref="navDrawerLeft"
    >
        <div class="text-h2">Links</div>
        <v-list density="compact" nav>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    PORT
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    OneWalmart
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    Service Portal
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    Yes Video
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    Order Status
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn
                    :ripple="false"
                >
                    Marketing
                </v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script setup>
import { ref } from 'vue'
    const props = defineProps(['drawer'])
    const emit = defineEmits(['update:drawer'])
    // setup code
    let drawerStatus = ref(props.drawer); 
</script>

<style lang="scss">
    @import './src/assets/variables.scss';
    .v-navigation-drawer {
        &--temporary {
            position: absolute;
            z-index: 1004 !important;
            top: 0 !important;
            bottom: 0 !important;
            height: 100% !important;
            background: $colorBgNavDrawer !important;
            width: 20rem !important;
            padding: 2.75rem 3.1875rem !important;

            .v-navigation-drawer__content {
                gap: 0 !important;
            }
            .v-btn--size-default {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 1.25rem !important;
                font-weight: $bold !important;
                background: none;
                box-shadow: none;
                text-align: left !important;
                padding: 0 !important;
                max-height: 1.625rem !important;
                &:not(:only-child) {
                    padding: 0 !important;
                }
            }
            .v-btn__content {
                font-size: 1.25rem;
                font-weight: $medium;
            }
            .v-list {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                padding: 0 !important;
                flex-grow: 0;
            }
            .v-list-item {
                grid-template-rows: 1.625rem !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            .v-list-item--density-compact {
                &.v-list-item--one-line {
                    min-height: 1.625rem !important;
                    justify-content: flex-start !important;
                }
            }
            .text-h2 {
                font-weight: $black;
                font-size: 2.6875rem;
                margin-bottom: 2.3125rem !important;
            }
        }
        &__overlay {
            background: red;
            width: 100%;
        }
    }
    
</style>