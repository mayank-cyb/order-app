<template>
    <v-card class="modal-container">
        <div class="modal-title">
            <h1 class="modal-title-text">{{ title }}</h1>
        </div>
        <v-card-text class="modal-content">
            <p class="modal-content-text">{{ content }}</p>
        </v-card-text>
        <v-card-actions class="actions-btn">
            <rpx-button :label="firstBtnLabel" btn-type="primary" @click="firstButtonEvent()" :show-tooltip="false"></rpx-button>
            <rpx-button :label="secondBtnLabel" btn-type="primary" @click="secondButtonEvent()" :show-tooltip="false"></rpx-button>
            <rpx-button v-if="threeButton" :label="thirdBtnLabel" btn-type="primary" @click="thirdButtonEvent()" :show-tooltip="false"></rpx-button>
        </v-card-actions>
    </v-card>
</template>
<script>
import { reactive, computed, ref } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue';
export default {
    name: "RpxModal",
    components: {
        RpxButton
    },
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        threeButton: {
            type: Boolean,
        },
        firstBtnLabel: {
            type: String
        },
        secondBtnLabel: {
            type: String
        },
        thirdBtnLabel: {
            type: String
        },
    },
    setup(props, { emit }) {
        props = reactive(props);
        return {
            props,
            firstButtonEvent() {
                emit('firstModalBtnClicked')
            },
            secondButtonEvent() {
                emit('secondModalBtnClicked')
            },
            thirdButtonEvent() {
                emit('thirdModalBtnClicked')
            },
        };
    },
};
</script>
<style lang="scss" scoped>
@import '../styles/variables.scss';
.modal-container {
    width: 31.25rem;
    height: 14.375rem;
    background: $colorWhite 0% 0% no-repeat padding-box;
    box-shadow: 0 0.25rem 0.5rem #0000004D;
    border: 0.063rem solid #00000033;
    border-radius: 0.25rem;
    opacity: 1;
}
.modal-title-text {
    text-align: left;
    font: normal normal bold 1.25rem/1.875rem Roboto;
    letter-spacing: 0;
    color: #1B1E21;
    opacity: 1;
}
.modal-title {
    margin: 1.969rem 0 0 2.344rem;
    width: 100%;
    height: 1.5rem;
}

.modal-content {
    width: 27.5rem;
    height: 3.813rem;
    margin: 0.594rem 0 0 1.375rem;
}
.actions-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.625rem;
    margin: 1.875rem 3.063rem 0 0;
}
.modal-content-text {
    text-align: left;
    font: normal normal normal 1rem/1.5rem Roboto;
    letter-spacing: 0;
    color: #212529;
    opacity: 1;
}
.v-dialog {
    overflow-y: clip !important;
}
</style>