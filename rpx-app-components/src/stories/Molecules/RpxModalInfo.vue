<template>
    <v-card class="modal-container">
        <v-container
         class="modal-title-container">
            <v-icon class="modal-title-container-icon modal-title-container-icon-align">
                <i class="lsx-icon-message lsx-icon-message-style"></i>
            </v-icon>
            <v-card-title class="modal-title-container-heading">1 New Broadcast Message</v-card-title>
        </v-container>
        <v-container class="modal-body">
            <div class="day-time-container">
                <h3 class="day-time-container-date-time">{{ dayTime }}</h3>
            </div>
            <div class="message-title-container">
                <h1 class="message-title-container-text">{{ title }}</h1>
            </div>
            <div class="message-content-container">
                <p class="message-content">{{ messageContent }}</p>
            </div>
            <div>
                <img :src="imageUrl" alt="" class="modal-image">
            </div>
            <div class="modal-button">
                <rpx-button :label="buttonLabel" btn-type="primary" @click="emitEvent()" :show-tooltip="false"></rpx-button>
            </div>
        </v-container>
    </v-card>
</template>
  
<script>
import { reactive } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue';

export default {
    name: 'RpxModalInfo',
    components: {
        RpxButton
    },
    props: {
        title: {
            type: String,
            default:"Title of message here"
        },
        messageContent: {
            type: String,
            default:"Content of the message here and other details about something that needs to be shared with the Associates. Content of the message here and other details about something that needs to be shared with the Associates."
        },
        dayTime: {
            type: String,
            default:"Today 6:55 PM"
        },
        buttonLabel: {
            type: String
        },
        imageUrl: {
            type:String,
        }
    },
    setup(props, { emit }) {
        props = reactive(props);
        return {
            props,
            emitEvent() {
                emit('infoBtnClicked')
            }
        };
    }
};
</script> 
<style lang="scss" scoped>
@import '../styles/variables.scss';
.v-container {
    padding: 0; 
}
.modal-container {
    width: 43.75rem;
    height: 51.125rem;
    background: $colorWhite;
    box-shadow: 0 0.25rem 0.5rem #0000004D;
    opacity: 1;
}
.modal-title-container {
    width: 43.75rem;
    height: 8.688rem;
    background: #3FADCE;
    border-radius: 0.25rem 0.25rem 0 0;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.day-time-container {
    width: 7.563rem;
    height: 1.563rem;
    margin: 2.063rem 0 0 3.125rem;
}
.day-time-container-date-time {
    width: 7.563rem;
    height: 1.563rem;
    text-align: left;
    font: normal normal normal 1rem/0.875rem Roboto;
    letter-spacing: -0.01rem;
    color: $colorBlack;
    opacity: 1;
}
.message-title-container-text {
    width: 14.813rem;
    height: 1.938rem;
    text-align: left;
    font: normal normal bold 1.25rem/1.375rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
}
.message-title-container {
    margin: 1.53rem 0 0 3.125rem;
}
.message-content {
    width: 38.25rem;
    height: 4.563rem;
    text-align: left;
    font: normal normal normal 1rem/1.375rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
    opacity: 1;
}
.message-content-container {
    margin: 0.343rem 0 0 3.125rem;
}
.modal-image {
    width: 37.5rem;
    height: 20.813rem;
    margin: 1.22rem 0 0 3.063rem;
}
.modal-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 2.5rem 3.188rem 0 0;
}
.modal-title-container-icon {
    width: 4rem;
    height: 4rem;
    background: $colorWhite;
    opacity: 1;
    border-radius: 100%;
}
.modal-title-container-icon-align {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3.125rem;
}
.lsx-icon-message-style {
    color: #3FADCE;
    font-size: 1.952rem;
    opacity: 1;
}
.modal-title-container-heading{
    text-align: left;
    font: normal normal bold 1.875rem/2.188rem Roboto;
    letter-spacing: 0;
    color: $colorWhite;
    opacity: 1;
}
.v-dialog {
    overflow-y: clip !important;
}
</style>
  