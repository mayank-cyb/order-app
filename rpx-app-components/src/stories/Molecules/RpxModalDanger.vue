<template>
    <v-card class="modal-container">
        <v-container class="modal-title-container modal-title-container-align-elements">
            <v-icon class="modal-title-container-icon">
                <i class="lsx-icon-message "></i>
            </v-icon>
            <v-card-title class="modal-title-container-modal-heading">A printer system error occurred</v-card-title>
        </v-container>
        <v-container>
            <v-row no-gutters>
                <v-col class="text-right align-btn">
                    <rpx-button appearance="outline" append-icon="lsx-icon-filter" label="Help" @click="eventEmit()" :show-tooltip="false"></rpx-button>
                </v-col>
            </v-row>
        </v-container>
        <div class="content-container">
            <div class="content-container-printers-name">
                <p class="printers-name">{{ printerName1 }}</p>
                <div class="content-container-line"></div>
                <p class="printers-name">{{ printerName2 }}</p>
            </div>
            <div class="content-container-day-time">
                <p class="day-time">{{ dayTime }}</p>
            </div>
        </div>
        <div class="content-modal">
            <p class="centent-text">
                {{ message }}
            </p>
        </div>
        <card-actions class="action-btn">
            <rpx-button :label="firstButton" :show-tooltip="false"></rpx-button>
            <rpx-button :label="secondButton" :show-tooltip="false"></rpx-button>
            <rpx-button :label="thirdButton" :show-tooltip="false"></rpx-button>
        </card-actions>
    </v-card>
</template>
<script>
import { reactive, computed, ref } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue'
import RpxButtonBar from '../Atoms/RpxButtonBar.vue';
export default {
    name: "RpxModalDanger",
    components: {
        RpxButton,
        RpxButtonBar
    },
    props: {
        printerName1: {
            type: String,
            default:"E-9902"
        },
        printerName2: {
            type: String,
            default:"DL650-A1"
        },
        dayTime: {
            type: String,
            default:"Today 6:55 PM"
        },
        message: {
            type: String,
            default:"The rear roll cover was opened while the printer was operating.The rear roll cover was opened while the printer was operating.The rear roll cover was opened while the printer was operating."
        },
        firstButton: {
            type: String
        },
        secondButton: {
            type:String,
        },
        thirdButton: {
            type:String,
        }

    },
    setup(props, { emit }) {
        props = reactive(props);
        return {
            props,
            eventEmit() {
                emit('helpBtnClicked')
            }
        };
    },
};
</script>
<style lang="scss" scoped>
@import '../styles/variables.scss';

.v-container {
    padding: 0;
}
.modal-container {
    width: 43.75rem;
    height: 36.875rem;
    background: $colorWhite 0% 0% no-repeat padding-box;
    box-shadow: 0 0.25rem 0.25rem #0000004D;
    border-radius: 0.25rem;
    opacity: 1;
}
.modal-title-container {
    width: 43.75rem;
    height: 13.125rem;
    background: $colorDanger 0% 0% no-repeat padding-box;
    border-radius: 0.25rem 0.25rem 0 0;
    opacity: 1;
}  
.modal-title-container-icon {
    width: 4rem;
    height: 4rem;
    background: $colorWhite;
    opacity: 1;
    border-radius: 100%;
}
.align-message-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3.125rem;
}
.modal-title-container-modal-heading {
    text-align: left;
    font: normal normal bold 1.875/2.188rem $fontRoboto;
    letter-spacing: 0;
    color: $colorWhite;
    opacity: 1;
}
.align-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-title-container-align-elements {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.align-btn {
    margin: 2.188rem 2.5rem 0 0;
}
.content-message {
    text-align: left;
    font: normal normal normal 1rem/1.375rem $fontRoboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
    padding: 0 2.688rem 0 3.75rem;
}
.content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4.563rem 0 0 3.125rem;
}
.content-container-line {
    width: 0.125rem;
    height: 1.938rem;
    background: $dividerLineColor 0% 0% no-repeat padding-box;
    opacity: 1;
}
.content-container-printers-name {
    display: flex;
    gap: 0.938rem;
}
.content-container-day-time {
    margin-right: 3.125rem;
}
.printers-name {
    text-align: left;
    font: normal normal bold 1.25rem/1.5rem $fontRoboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
}
.day-time {
    font: normal normal normal 1rem/0.875rem $fontRoboto;
    letter-spacing: -0.01rem;
    color: $colorBlack;
    opacity: 1;
}
.content-modal {
    width: 37.813rem;
    height: 4.563rem;
}
.centent-text {
    text-align: left;
    font: normal normal normal 1rem/1.375rem $fontRoboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
}
.content-modal {
    margin: 0.968rem 2.844rem 0 3.125rem;
}
.action-btn {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.625rem;
    margin: 2.625rem 3.125rem 0 0;
}
</style>