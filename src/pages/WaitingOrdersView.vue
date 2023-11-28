<template>
    <section class="waiting-orders__headline">
        <v-card class="card-headline">
            <v-card-title class="text-h3">Waiting Orders</v-card-title>
        </v-card>
    </section>
    <section class="waiting-orders__content">
        <v-list class="list--waiting-orders">
            <v-list-item
                v-for="order in printOrders"
                :key="order.id"
                class="list--waiting-orders__item"
            >
                <rpx-card
                    :customerOrderDetails="order"
                ></rpx-card>
            </v-list-item>
        </v-list>
    </section>
    
</template>

<script setup>
import { RpxCard } from '@fssd/rpx-app-components'
import orders from '@/assets/orders'
import { ref } from 'vue'

const printOrders = ref([
    ...orders

])
console.log(printOrders)
</script>

<style lang="scss">
@import './src/assets/variables.scss';
.list {
    &--waiting-orders {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));
        grid-column-gap: 1.25rem;
        grid-row-gap: 3.0625rem;
        padding: 3.0625rem 1.5625rem  1.25rem !important; 
        &__item {
            padding: 0 !important;
        }
    }
}
.v-list-item {
    max-width: 14.375rem !important;
    &__content {
        overflow: initial;
        max-width: 14.375rem !important;
        //padding: 3.0625rem 1.5625rem;
    }
}
.waiting-orders {
    display: flex;
    gap: 1rem !important;
    &__headline,
    &__content {
        border-radius: 0.75rem;
        overflow: hidden;
    }
    &__headline {
        .v-card {
            background: $colorRpxBg !important;
            color: $colorWhite;
            padding: 0 0 0.625rem 2.0625rem;
            box-shadow: none !important;
            &-title {
                font-size: 1.875rem !important;
                line-height: 2.25rem;
                font-weight: $black;
                border-style: none;
                padding: 0;
            }
        }
    }
}
.lsx-card-container {
    position: relative;
    width: 14.375rem !important;
    min-height: 14.375rem;
    .lsx-card-expanded {
        position: absolute;
        min-width: 14.375rem !important;
        z-index: 2;
    }
}
</style>