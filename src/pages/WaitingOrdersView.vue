<template>
  <section class="waiting-orders__headline">
    <VCard class="card-headline">
      <VCardTitle class="text-h3">Waiting Orders</VCardTitle>
    </VCard>
  </section>
  <section class="waiting-orders__content">
    <VList class="list--waiting-orders">
      <VListItem
        v-for="(order, index) in printOrders"
        :key="order.id"
        class="list--waiting-orders__item"
      >
        <RpxCard
          :orderDetails="order"
          :class="{ 'in-last-row': lastRowCardIndices.includes(index) }"
        ></RpxCard>
      </VListItem>
    </VList>
  </section>
</template>

<script setup>
    import { RpxCard } from '@fssd/rpx-app-components'
    import orders from '@/assets/orders'
    import { ref, onMounted, reactive } from 'vue'

    const printOrders = ref([...orders])
    const lastRowCardIndices = reactive([])
    let maxTop = ref(0)
    const findLastRowCards = () => {
        let lsxCards = Array.from(document.getElementsByClassName('lsx-card'))
        let currentCardTop = 0
        //To find max value of top property from viewport top for all the cards in the waiting orders section
        lsxCards.forEach((card, index) => {
            console.log('index:' + '' + index)
            currentCardTop = card.getBoundingClientRect().top
            console.log(currentCardTop)
            maxTop.value = Math.max(maxTop.value, currentCardTop)
        })
        // Adding the cards' indices with max. top value to an array: lastRowCardIndices
        // This will help to determine if the card belongs to the last row or not
        lsxCards.forEach((card, index) => {
            if (card.getBoundingClientRect().top === maxTop.value) {
                lastRowCardIndices.push(index)
            }
        })
    }
    onMounted(() => {
        findLastRowCards()
    })
</script>

<style lang="scss" scoped>
@import './src/assets/variables.scss';
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
      background: $color_rpx_bg !important;
      color: $color_white;
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
:deep(.v-list-item) {
  max-width: 14.375rem !important;

}
:deep(.v-list-item__content) {
    overflow: initial;
    max-width: 14.375rem !important;
}
</style>

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
    padding: 3.0625rem 1.5625rem 1.25rem !important;
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
