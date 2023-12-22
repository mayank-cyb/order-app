<template>
    <v-card class="modal-container">
        <v-container class="modal-title-container modal-title-container-align-elements">
            <v-icon class="modal-title-container-icon-container ">
                <i class="lsx-icon-message "></i>
            </v-icon>
            <v-card-title class="modal-title-container-modal-heading">Paper Change Needed</v-card-title>
        </v-container>
        <div class="modal-day-time-btn-container">
            <p class="day-time">{{ dayTime }}</p>
            <div class="rpx-btn">
                <rpx-button appearance="outline" append-icon="lsx-icon-filter" label="Help" @click="helpBtnEvent()" :show-tooltip="false"></rpx-button>
            </div>
        </div>
        <p class="printer-name">{{ printerName }}</p>
        <p class="modal-message">{{ message }} <span class="paper-name">{{ paperName }}</span></p>
        <v-card-actions class="actions-btn">
            <rpx-button appearance="outline" :label="firstButtonLabel" @click="firstBtnEvent()" :show-tooltip="false"></rpx-button>
            <rpx-button appearance="outline" :label="secondButtonLabel" @click="secondBtnEvent()" :show-tooltip="false"></rpx-button>
        </v-card-actions>
    </v-card>
</template>
<script>
import { reactive } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue'
import RpxButtonBar from '../Atoms/RpxButtonBar.vue';
export default {
    name: "RpxModalWarning",
    components: {
        RpxButton,
        RpxButtonBar
    },
    props: {
        dayTime: {
            type: String,
            default:"Today 6:55 PM"
        },
        printerName: {
            type: String,
            default:"EPSONP300"
        },
        message: {
            type: String,
            default:"Once the current job is complete load"
        },
        paperName: {
            type: String,
            default:"24in Satin Roll"
        },
        firstButtonLabel: {
            type:String,
            default:"Remind me Later"
        },
        secondButtonLabel: {
            type:String,
            default:"Paper Changed"
        }
    },
    setup(props, { emit }) {
        props = reactive(props);
        return {
            props,
            firstBtnEvent() {
                emit('firstBtnClicked')
            },
            secondBtnEvent() {
                emit('secondBtnClicked')
            },
            helpBtnEvent() {
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
    box-shadow: 0 0.25rem 0.5rem $warningModalBoxShadow;
    border-radius: 0.25rem;
    opacity: 1;
}
.modal-title-container {
    width: 43.75rem;
    height: 13.125rem;
    background: $colorWarning 0% 0% no-repeat padding-box;
    border-radius: 0.25rem 0.25rem 0 0;
    opacity: 1;
}
.modal-title-container-icon-container {
    i[class^=lsx-icon-]:before, i[class*=" lsx-icon-"]:before {
    color: $colorWarning;
    font-size: 1.952rem;
    opacity: 1;
}   
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
    font: normal normal bold 1.875rem/2.188rem Roboto;
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
    margin-right: 1.625rem;
}
.modal-day-time-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.875rem 2.5rem 0 0;
}
.day-time {
    margin-left: 3.125rem;
}
.printer-name {
    margin: 1.531rem 0 0 3.125rem;
    text-align: left;
    font: normal normal bold 1.25rem/1.5rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
}
.modal-message {
    margin: 0.343rem 0 0 3.125rem;
}
.actions-btn {
    display: flex;
    justify-content: flex-end;
    margin: 8.063rem 2.5rem 0 22.75rem;
}
.paper-name {
    font: normal normal bold 1rem/1.375rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
}
</style>