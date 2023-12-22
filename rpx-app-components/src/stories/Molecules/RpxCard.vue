<template>
  <div class="lsx-card-container">
    <div v-if="isPastDueStatus !== ''" class="lsx-card__order-due-status"
      :class="isPastDueStatus === 'pastdue' ? 'past-due' : 'due-soon'">
      <span class="due-status">{{ isPastDueStatus === 'pastdue' ? orderDetails.orderStatusPastDue : orderDetails.orderStatusDueSoon }}</span>
    </div>
    <v-card class="lsx-card" :class="[{ 'lsx-card-expanded': isCardClicked }]">
      <v-card-actions class="lsx-card__actions">
        <div class="wrapper--content-top">
          <v-icon class="lsx-card__actions--icons">{{ orderTypeIcon }}</v-icon>
          <span class="lsx-card__actions--order-type d-flex align-center">{{ orderDetails.orderType }}</span>
          <div v-if="orderDetails.orderType?.toLocaleLowerCase() === 'web'" class="lsx-card__actions--line">
          </div>
          <div v-if="orderDetails.orderType?.toLocaleLowerCase() === 'web' && orderDetails.isPaid" class="d-flex">
            <span class="lsx-card__actions--payment-status">{{ orderDetails?.paymentStatus }}</span>
          </div>
        </div>
        <rpx-button buttonText="Express" size="small" @click="emitEvent" class="lsx-card__actions--express-btn"
          :show-tooltip="false"></rpx-button>
      </v-card-actions>
      <div class="wrapper--content-middle">
        <p class="lsx-card-title">{{ orderDetails.customerName }}</p>
        <p class="lsx-card-order-id">{{ orderDetails.orderId }}</p>
        <p class="lsx-card-due-order">{{ orderDetails.dueString }} <span class="lsx-card-due-time-date">{{ orderDetails.dueDateTime
        }}</span>
        </p>
      </div>
      <div v-if="count <= 2" class="lsx-card__actions__divider-line"></div>
      <div v-else class="lsx-card__items-dropdown d-flex justify-center align-center" @click="handleDropdownClick">

        <rpx-button-bar buttonBarLabel="Items" :itemsCount="count"></rpx-button-bar>
      </div>
      <div class="wrapper--content-bottom">
        <ul>
          <li v-for="(item, index) in orderDetails.items" :key="index" class="lsx-card-products">
            <i v-if="item.isAssemblyRequired" class='lsx-icon-assembly lsx-card-icon'></i>
            {{ item.value }}
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue';
import RpxButtonBar from '../Atoms/RpxButtonBar.vue';
export default {
  name: 'RpxCard',
  components: {
    RpxButton,
    RpxButtonBar
  },
  props: {
    orderDetails: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    const isCardClicked = ref(false);
    const orderTypeIcon = computed(() => {
      switch (props.orderDetails.orderType?.toLocaleLowerCase()) {
        case 'kiosk':
          return 'lsx-icon-kiosk';
        case 'web':
          return 'lsx-icon-web';
        case 'passport':
          return 'lsx-icon-passport';
        case 'scan':
          return 'lsx-icon-scanner';
        default:
          return 'lsx-icon-web';
      }
    });
    const isPastDueStatus = computed(() => {
      return props.orderDetails.dueByStatus?.toLocaleLowerCase();
    }
    )
    const count = computed(() => {
      return props.orderDetails.items?.length;
    }
    )
    const handleDropdownClick = () => {
      isCardClicked.value = !isCardClicked.value;
    };
    return {
      props,
      isPastDueStatus,
      orderTypeIcon,
      handleDropdownClick,
      isCardClicked,
      count,
      emitEvent() {
        emit('expressBtnClicked')
      }
    };
  }
};
</script>

<style lang="scss" >
@import '../styles/variables.scss';

.v-card {
  &.lsx-card {
    &.lsx-card-expanded {
      height: 31.875rem;
      position: absolute;
      left:0;
      right:0;
      z-index: 2;
    }
  }
}
.lsx-card-container {
  .lsx-card {
    .v-card--variant-flat {
      background-color: $colorWhite;
    }
  }

}
.lsx-card__actions--line {
  width: 0.0625rem;
  height: 1.125rem;
  background: $colorLine 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.v-card {
  &.lsx-card {
    max-width: 14.375rem;
    height: 14.375rem;
    box-shadow: 0 0.25rem 0.5rem $colorCardBoxShadow !important;
    padding: 1.1875rem 0.625rem 0 1.25rem;
    ul {
      list-style-type: none;
    }
    .v-icon--size-default {
      font-size: 1rem !important;
    }
  }
}
.lsx-card {
  &__actions {
    &--icons {
      height: 1.5rem;
      width: 1.5rem;
    }
    &--order-type {
      min-width: 1.8125rem;
      height: 1.1875rem;
      text-align: left;
      font: normal normal 500 0.9375rem/0.875rem $fontRoboto;
      letter-spacing: -0.009rem;
      color: $colorCardOrderType;
      opacity: 1;
    }
  }
}

.lsx-card__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lsx-card-container .lsx-card {
  .v-card-actions {
    align-items: center;
    display: flex;
    flex: none;
    min-height: 0;
    padding: 0;
    margin-left: -0.1875rem;
  }
}
.lsx-card-title {
  width: 100%;
  height: 1.5rem;
  text-align: left;
  font: normal normal bold 1.25rem/1rem $fontRoboto;
  letter-spacing: 0;
  color: $colorBlack;
  margin-top: 0.5625rem;
  opacity: 1;
  display: flex;
  align-items: center;
}
.lsx-card {
  &-order-id {
    width: 100%;
    height: 1.1875rem;
    text-align: left;
    font: normal normal 500 1rem/1.3125rem $fontRoboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
    margin-bottom: 0.25rem;
  }
}
.lsx-card-due-order {
  width: 100%;
  text-align: left;
  font: normal normal bold 1rem/0.875rem $fontRoboto;
  letter-spacing: -0.009rem;
  color: $colorSecondary;
  text-transform: uppercase;
  opacity: 1;
}
.lsx-card-due-time-date {
  width: 100%;
  height: 1.88rem;
  text-align: left;
  font: normal normal 500 1rem/0.875rem $fontRoboto;
  letter-spacing: 0;
  color: $colorTooltipBg;
  opacity: 1;
}
.lsx-card-container {
  position: relative;
  .lsx-card__order-due-status {
    width: 8.125rem;
    height: 6.875rem;
    background: $colorCardPastDue 0% 0% no-repeat padding-box;
    border-radius: 0.25rem;
    opacity: 1;
    position: absolute;
    z-index: 0;
    top: -1.8125rem;
    left: -0.375rem;
    &.past-due {
      background: $colorCardPastDue 0% 0% no-repeat padding-box;
    }
    &.due-soon {
      background: $colorCardDueSoon 0% 0% no-repeat padding-box;
    }
  }
}
.wrapper--content-bottom {
  margin-top: 0.625rem;
}
.lsx-card__items-dropdown {
  margin-top: 0.625rem;
  margin-right: 0.625rem;
}
.wrapper--content-top {
  display: flex;
  align-items: center;
}
.lsx-card-products {
  display: flex;
  align-items: center;
  gap: 0.313rem;
  width: 100%;
  height: 1.25rem;
  text-align: left;
  font: normal normal bold 1rem/1.375rem $fontRoboto;
  letter-spacing: 0;
  color: $colorBlack;
  margin-top: 0.3125rem;
  opacity: 1;
}
.lsx-card__actions--payment-status {
  color: $colorCardPaymentStatus;
}
.lsx-card-icon {
  width: 1rem;
  border-radius: 100%;
  color: $colorWhite;
  height: 1rem;
  background-color: $colorCardIconBgColor;
  opacity: 1;
  justify-content: center;
}
.lsx-card {
  .lsx-icon-assembly {
    &::before {
      font-size: 0.669375rem;
      line-height: 0.67rem;
    }
  }
}
.lsx-card {
  .v-btn {
    &.v-btn--density-default {
      height: 1.5rem !important;
    }
  }
}
.lsx-card {
  .lsx-card__items-dropdown .v-btn {
    &.v-btn--density-default {
      height: 1.25rem !important;
    }
  }
}
.v-main {
  .lsx-card {
    .v-btn {
      &.btn-oval {
        max-height: 1.5rem !important;
      }
    }
  }
}
.v-main {
  .lsx-card .v-btn {
    &.btn-bar {
      max-width: 11.875rem !important;
      border-radius: 0;
    }
  }
}
.v-main {
  .lsx-card {
    .lsx-card__actions {
      .v-btn {
        padding: 0.25rem 0.875rem 0.25rem 0.875rem !important;
        grid-template-columns: auto !important;
        grid-template-areas: none;
        place-content: center !important;
      }
    }
  }
}
.lsx-card__actions__divider-line {
  margin: 0.625rem 0;
  width: 11.875rem;
  height: 0.125rem;
  background-color: $colorLine;
  opacity: 1;
}
.due-status {
  display: inline-block;
  width: 100%;
  height: 1.125rem;
  text-align: left;
  font: normal normal bold 0.813rem/1.125rem $fontRoboto;
  letter-spacing: 0;
  color: $colorWhite;
  margin-left: 2.188rem;
  margin-top: 0.375rem;
  opacity: 1;
}
</style>
