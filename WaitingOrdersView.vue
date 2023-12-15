<template>
    <section class="waiting-orders__headline">
        <v-card class="card-headline">
            <v-card-title class="text-h3">Waiting Orders</v-card-title>
        </v-card>
    </section>
    <section class="waiting-orders__content">
        <v-list class="list--waiting-orders">
            <v-list-item
                v-for="(order, index) in printOrders"
                :key="order.id"
                class="list--waiting-orders__item"
            >
                <RpxCard
                    :orderDetails="order"
                    :class="{ 'in-last-row' : lastRowCardIndices.includes(index) }"
                ></RpxCard>
            </v-list-item>
        </v-list>
    </section>
    
</template>

<script setup>
    import { RpxCard } from '@fssd/rpx-app-components'
    import orders from '@/assets/orders'
    import { ref, onMounted, reactive } from 'vue'

    const printOrders = ref([
        ...orders

    ])
    const cardsTopValues = reactive([]);
    const lastRowCardIndices =  reactive([])
    const updateCardsLastRowStatus = () => {
        let lsxCards = Array.from(document.getElementsByClassName('lsx-card'));
        lsxCards.forEach((card, index) => {
                console.log("index:" + "" + index)
                console.log(card.getBoundingClientRect().top)
                cardsTopValues.push(card.getBoundingClientRect().top)
            }
        )
        const cardsMaxTop = cardsTopValues.sort().reverse()[0];
        console.log(cardsMaxTop);
        lsxCards.forEach((card, index) => { 
            if(card.getBoundingClientRect().top === cardsMaxTop) {
                lastRowCardIndices.push(index);
                console.log('cards in last row:' + index)
            } else {
                console.log('card in row other than last:' + index);
            }
            console.log(lastRowCardIndices);
        })
    }
    onMounted(() => {
        updateCardsLastRowStatus();
    })
</script>


<style lang="scss">
@import './src/assets/variables.scss';
.list {
    &--waiting-orders {
        display: grid;
        align-items: start;
        grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));
        grid-column-gap: 1.25rem;
        grid-row-gap: 3.125rem;
        //grid-row-gap: 1.3125rem;
        padding: 3.0625rem 1.5625rem  1.25rem !important; 
        border-radius: 0.75rem;
        overflow-y: hidden;
        &__item {
            padding: 0 !important;
            .lsx-card-expanded {
                &.lsx-card--last-row {
                    position: relative !important;
                }

            }
        }
    }
}
.v-list-item {
    max-width: 14.375rem !important;
    &__content {
        overflow: initial;
        max-width: 14.375rem !important;
    }
}
.waiting-orders {
    display: flex;
    gap: 1rem !important;
    &__headline,
    &__content {
        border-radius: 0.75rem;
        overflow: visible;
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
    width: 14.375rem !important;
    min-height: 14.375rem;
    &.in-last-row {
        .lsx-card-expanded {
            position: relative !important;
        }
    }
    .lsx-card-expanded {
        position: absolute !important;
        overflow-y: auto;
        min-width: 14.375rem !important;
        min-height: 31.875rem !important;
        &.lsx-card--last-row {
            position: relative !important;
        }
        &::-webkit-scrollbar {
            width: 0.25rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $color_scrollbar;
            border-radius: 0.25rem;
        }
    }        
}
</style>