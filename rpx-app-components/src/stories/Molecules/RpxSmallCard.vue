<template>
    <v-card class="lsx-small-card">
        <div class="wrapper">
            <div v-if="isPastDueStatus !== ''" class="lsx-small-card__order-due-status"
                :class="isPastDueStatus === 'pastdue' ? 'past-due-color' : 'due-soon-color'">
                <span class="order-due-status">{{ isPastDueStatus === 'pastdue' ? orderDetails.orderStatusPastDue : orderDetails.orderStatusDueSoon }}</span>
            </div>
            <div class="lsx-small-card__content" :class="orderDetails.dueByStatus !== '' ?  'align-card-content' : ''">
                <h1 class="lsx-small-card--title wrapper--top">
                    {{ orderDetails.customerName }}
                </h1>
                <div  class="wrapper--middle">
                    <div class="d-flex align-center">
                        <v-icon class="lsx-small-card--icon">{{ orderTypeIcon }}</v-icon>
                        <span class="lsx-small-card--order-type">{{ orderDetails.orderType }}
                        </span>
                        <div class="lsx-card__actions--line"></div>
                        <div v-if="orderDetails.orderType?.toLocaleLowerCase() === 'web' && orderDetails.isPaid"
                            class="d-flex align-center">
                            <span class="lsx-small-card--payment-status">{{ orderDetails.paymentStatus }}</span>
                            <div class="lsx-card__actions--line"></div>
                        </div>
                        <span class="order-id">{{ orderDetails.orderId }}</span>
                    </div>
                    <div @click="emitEvent">
                        <rpx-button buttonText="Express" size="small" :show-tooltip="false"></rpx-button>
                    </div>
                </div>
                <div class="wrapper--bottom">
                    <p class="due-date-title">{{ orderDetails.dueString }}</p>
                    <span class="due-time-date">{{ orderDetails.dueDateTime }}</span>
                </div>
            </div>
        </div>
    </v-card>
</template>
  
<script>
import { reactive, ref, computed } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue';
export default {
    name: 'RpxSmallCard',
    components: {
        RpxButton,
    },
    props: {
        orderDetails: {
            type: Object,
        },
    },
    setup(props, { emit }) {
        props = reactive(props);
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
        })
        return {
            props,
            orderTypeIcon,
            isPastDueStatus,
            emitEvent() {
                emit('expressBtnClicked')
            }
        };
    }
};
</script>

<style lang="scss" >
@import '../styles/variables.scss';

.lsx-small-card {
    width: 28.625rem;
    height: 5rem;
    opacity: 1;
    background-color: $colorWhite;
    box-shadow: none;
    border-radius: 0;
        .wrapper {
            width: 28.625rem;
            display: flex; 
            .lsx-small-card__order-due-status {
                min-width: 2rem;
                height: 5rem;
                border-radius: 0.25rem 0 0 0.25rem;
                opacity: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                &.past-due-color {
                    background-color: $colorCardPastDue;
                }       
                &.due-soon-color {
                    background-color: $colorCardDueSoon;
                }
                .order-due-status {
                    width: 1.125rem;
                    height: 3.938rem;
                    transform: matrix(0, -1, 1, 0, 0, 0);
                    text-align: left;
                    writing-mode: vertical-lr;
                    text-align: center;
                    font: normal normal bold 0.75rem/0.875rem $fontRoboto;
                    letter-spacing: 0;
                    color: $colorWhite;
                    opacity: 1;
                    transform: rotate(180deg);
                    transform-origin: 50% 50%;  
                }
            } 
    .lsx-small-card__content {
        width: 100%;
        height: 5rem;
    &.align-card-content {
        .lsx-small-card--title {
            margin-left: 1.125rem;
        }
        .wrapper--bottom {
            margin-left: 1.125rem;
        }
        .wrapper--middle {
            margin-left: 0.9375rem;
        }
    }
        .lsx-small-card--title {
            width: 9.75rem;
            height: 1.625rem;
            text-align: left;
            font: normal normal bold 1.25rem/1rem $fontRoboto;
            letter-spacing: -0.013rem;
            color: $colorTooltipBg;
            opacity: 1;
            margin-left: 1.875rem;
            margin-top: 0.25rem;
            padding-top: 0.375rem;
        }
        .wrapper--middle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 1.6875rem;
            margin-right: 1.625rem;
            .lsx-small-card--icon {
                width: 1.5rem;
                height: 1.5rem;
                background: transparent 0% 0% no-repeat padding-box;
                opacity: 1;
            }
            .lsx-small-card--order-type {
                width: 100%;
                text-align: left;
                font: normal normal 500 1rem/1.1875rem $fontRoboto;
                letter-spacing: -0.009375rem;
                color: $colorTooltipBg;
                opacity: 1;
            }
            .lsx-card__actions--line {
                width: 0.063rem;
                height: 1.125rem;
                background: $colorLine 0% 0% no-repeat padding-box;
                opacity: 1;
                margin-left: 0.313rem;
            }
            .order-id {
                width: 100%;
                text-align: left;
                font: normal normal 500 1rem/1.1875rem $fontRoboto;
                letter-spacing: -0.009rem;
                color: $colorTooltipBg;
                opacity: 1;
                margin-left: 0.313rem;
            }
            .lsx-small-card--payment-status {
                width: 100%;
                text-align: left;
                font: normal normal 500 1rem/1.1875rem $fontRoboto;
                letter-spacing: -0.009rem;
                color: $colorCardPaymentStatus;
                opacity: 1;
                color: $colorCardPaymentStatus;
                margin-left: 0.3125rem;
            }
        }
        .wrapper--bottom {
            display: flex;
            align-items: center;
            margin-left: 1.875rem;

            .due-date-title {
                width: 1.9375rem;
                text-align: left;
                font: normal normal bold 1rem/1.1875rem $fontRoboto;
                letter-spacing: -0.009rem;
                color: $colorSecondary;
                text-transform: uppercase;
                opacity: 1;
            }  
            .due-time-date {
                width: 100%;
                text-align: left;
                letter-spacing: -0.009rem;
                font: normal normal 500 1rem/1.1875rem $fontRoboto;
                color: $colorTooltipBg;
                opacity: 1;
                margin-left: 0.3125rem;
            }         
       }       
    }
}
}
.lsx-small-card {
    i[class^=lsx-icon-]:before,
    i[class*=" lsx-icon-"]:before {
    font-size: 1rem;
    }
}
.lsx-small-card {
    .v-main {
        .v-btn {
            &.btn-oval {
                max-height: 1.5rem !important;
            }
        }  
    } 
}  
.v-main .lsx-small-card .v-btn {
    padding: 0.25rem 0.875rem 0.25rem 0.875rem !important;
    grid-template-columns: auto !important;
    grid-template-areas: none;
    place-content: center !important;
}
.lsx-small-card .v-btn.v-btn--density-default {
    height: 1.5rem !important;
}
</style>