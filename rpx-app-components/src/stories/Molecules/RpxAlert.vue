<template>
    <v-card class="alert-container">
        <div class="alert-icon">
            <i :class="`lsx-icon ${icon} icon-type`"></i>
        </div>
        <div class="header-content">

            <div class="first-row">
                <div class="alert-content-left">
                    <p>{{ alertId }}</p>
                    <div class="content-container-line"></div>
                    <p>{{ alertTitle }}</p>
                </div>
                <div class="alert-content-right">
                    <div class="alert-device-img">
                        <v-img :src="deviceImage" alt="Icon" />
                    </div>
                    <div class="sub-content-right">
                        <p class="alert-device-id">{{ alertDeviceId }}</p>
                        <div class="content-container-line"></div>
                        <p class="alert-day-time">{{ dayTime }}</p>
                    </div>
                </div>
            </div>

            <div class="body-content">
                <div class="alert-description">
                    {{ message }} 
                </div>
                <div class="custom-link" @click="toggleContent">{{ toggleText }}</div>
                <v-expand-transition>
                    <div class="pt-2" v-show="expand">
                        <p class="font-weight-bold">Details</p>
                        <p class="font-weight-regular">{{ extraMessage }}</p>
                    </div>
                </v-expand-transition>
            </div>

            <card-actions class="action-btn">
                <div class="left-button">
                    <rpx-button :buttonText="helpButton" :btnFill="outline" :appendIcon="appendIcon"
                        :show-tooltip="false"></rpx-button>
                </div>
                <div class="right-button">
                    <rpx-button :buttonText="firstButton" :show-tooltip="false"></rpx-button>
                    <rpx-button :buttonText="secondButton" :show-tooltip="false"></rpx-button>
                    <rpx-button :buttonText="thirdButton" :show-tooltip="false"></rpx-button>
                </div>
            </card-actions>
        </div>
    </v-card>
</template>
<script>
import { reactive, ref } from 'vue';
import RpxButton from '../Atoms/RpxButton.vue'
export default {
    name: "RpxAlert",
    components: {
        RpxButton
    },
    props: {
        alertId: {
            type: String,
            default: 'X-1111'
        },
        alertTitle: {
            type: String,
            default: 'A printer system error occured'
        },
        alertDeviceId: {
            type: String,
            default: 'XX111-X1'
        },
        dayTime: {
            type: String,
            default: (new Date()).toDateString()
        },
        message: {
            type: String
        },
        extraMessage: {
            type: String
        },
        helpButton: {
            type: String,
            default: 'Help'
        },
        appendIcon: {
            type: String,
        },
        firstButton: {
            type: String,
            default: 'Maintenance'
        },
        secondButton: {
            type: String,
            default: 'Remind Me Later'
        },
        thirdButton: {
            type: String,
            default: 'Resolved'
        },
        deviceImage: {
            type: String,
        },
        icon: {
            type: String,
            // default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAACioqKIiIj6+vr19fXs7OzV1dX09PQlJSXm5ubJyclzc3PT09Pd3d1GRkZfX19HR0eQkJAsLCwzMzN8fHy9vb2oqKi0tLShoaEmJiYNDQ2ZmZlnZ2fGxsYTExM8PDxSUlIcHBw/Pz9aWlpOTk6UlJSLi4uurq43NzeAgIBsbGwMRfnYAAAJRUlEQVR4nO1d61riMBBF7AV6k4sICqKAq6u+//utin6QSVrSzJm2izm/aZhp0rnPpNfz8PDw8PDw8PDw8PDw8PDwqIMgGERJEedxkUSDIGibHCCiIu1fvo+nFyqm4/e31U0RtU0eD1G6ut9dVGM3mqyTtgl1QrSY0W0rxzBb/F+bGebP9tz9YPuShm0TbocwzZa12dtjma0HbZN/EnE2dGTveyezvG0WqhDOr1ns7THsd/W0FjMAe3vMiraZMSAdwfj7xFPaNkME6R8of5+46hKP8Sm17oZdV4ROgT2fxxh14XsMLsX4+8Rb63J1UY/gh+10+1DvkUWr/CVWAub6aTZf58WxuTIo8vV8tnm1efxPi4b57UnqXrN5XEVgFM+z02z2G+OIULc5QdiHw2Dj6AYfbsiJlTateB43lTTdPdcTg/Gq2hu5EeKiHEFWQc71JHZYsphUndes4bhHUqHj79euxATpffmyj40KnLSckBfeJxM9ly+9BlFvgVUZDUOE1OvflS2/AqxuhbcSArZ9zLcSzMu86Blk/ZMoM0NvcQZWWKZpRw3Im/DR/N8ZNsIyKJHVj+J26sCstq5c1EM14rHxn6bCsarI/IXImFVz438NRe0bM4NXUpoqMW6jJIsDI4OSMtyol+RYDE3f4BD/BR4jNinHqZC4CUxSdCQdpA5NyulRRmmY/moi8k8qTHbcSOKPTJZMMz6NyU97w/+N4ZtfNhXtyw2pHrh8W+v/MWzOnUkM8gYcME70f7hrMs5nEuPQF2wQo1fNBjJDXflDBapuBjfM4AeLVxoNGW51XZhJ278GGA4qTJRH2tLDNpLRoW4zosy3DV142U4UOtGUxgazcF97dW1lvXKNklvEsrqiaD46+wNdICBOk5Z8acIWLYNmowLOqZY+EzF6raGZ/+zkW0hXvGu3pkdzwpdcxaxleGUd3tOIKUGXvPUKul5jYedSaE4OL9dPj/0YRCYH1EJlCQZNAXWhElRTXxz1THNo/LhoOOCb7NQEuXJfiibRuGc0uP18ZeO/zGV61M1wd4bpiWfK0eSncvEPU+NQeer85ukWMv2x6FBI88p0Xqm/6rqJT2Qd5ps/lstMJTYglDmKU6oLmXa8KgKZ8obmF910Iily2TKJUjNJTP8k3KrEOSWHqUU659HUmyircfUOzby5vH6idYbcyJZq4XJd14BY4C7vnwR+2Mr+Ersc2YBp/RWowcalCM1hj9BXX1cTlcN37NEcqt91fWVNQ3f8uB2aQxLjHNaVNcSeuWcTBOewR2rg6to1Ge9xA+AcknRYzWMaqsHXa0ASBM5hoLYg1QzYkEOKCCDCOaSypp4jTB5GhJ/wHBInqt42qJLUQZ3qwHNIjJK7Oo8SSQwJsAlwSMJudTQaCXRDenMEOCTHtE74m+gKBDUSHBLLrY4Ldef8ZDkkOFRd2BofIolIYjqPJDgkX5N9NJdoQ0wuWYJDIhHtLS81S8cNjH1DgkNi1jxbP6jatKCiDgkOiUi09w/UYD43QPMNEQ7VcM3O9jFyukEZQxEOVY24tJUYJFAKyjeJcEikvq1polY8vGJokeGwp4oa284oNaD8BKJFhsONsqptjFKtBkb1GslwqFo1tumQd+UpkCgV4lAVpu+WT6kJSFTXnwyHqsywTSSqjiWqiE2GQzVwbemqB8pDGOewJ8Uh0Wx2BibhEFUDJcMhyZXacUgeApEixCFxgu0iisRoQ5HSCId2ZhuxhFCkNMKhnYWpfrwPKFKEOFQnpdiJRdVeH6JIEeJQTejb+UFOKuY0hDh0Ud7nv4fn/x2evyw9f314/jaNkF36IsKhk10q5FuosRHUjDIn30LIP1TVLKrrzE15q6XBsMk+x32osMYbNx9fJk6jWBKwmn+3OI1MrO34fePa+9xibTLx0g8k+0Loe+Dkjo1Cq228VCbm/YUkXeTQySRuMW+ZvIUIHPMWMrknETjmnmTyhyJQRal9e5BIDlgErjlgkTy+BEge3752S6QWQwLOtRgi9TQScK6nEamJkoBq0dQJmknUtUlAJbPOTkjUJgqAUZsoUV8qADJhoZZEFKgRFgCjRliizvsLg3gdw4YysOq8c87Dpfi7jx7wW533YNXqC/Rb9IpDGGOHkF3EoHmo2RZE9AUgWKOeKYCXz+uZwfc90WFTfFOQ2fcE712js8jZ0TZu7xq6/1AbksI2I9QYuoOPB+4hJfRcsFvy+T2k4D5gffgpM4ZHOvJdjBJoL3eg3zTAc6wRvdzQfnzDaEmejkX042NnKtAZG8w5ZJCZCti5GPqdSaw5uZi5GJp04JjM+kBATmsxaLYJdj4NHd3HGH2Em08DnTFE51dxFD5sxpC2iaz3ruZ7WPE7OieKYcZDZ30d+wKs8TTAWV/geW3By76AaXnJUjzavDZWBAI8cy/IF/1FznSn6RnleXbnPzfx/Gdf6vNLWxkDfYA+v5QdQjr7GbSGWddtzhGeUGIQ867PfxZ0p+d5g0octXN6bjPZf8Fc/Y7cjaDfUwIUCN283wKZfTfdUdLsLhoY3EGrYPRPsdnh7KYr+8BFMIabR5u8K8hw4Rv8cvmzv+/pF9zZ9QvuXdOjNl9/JS1vBqYXixWjB7Ry/6HpUkmp+w+7c4el4Lk5+3tIS++ShVxKpEF32+QZ/AX3Abd+p/OuCYv/3O/l7rV5t7qIJWOCUYZ/YoiIm9yargDenxLA6pYweBo/eOGJukiLFx4A64S0IsRkwX3jfu16WIOU1oYd4bHhpohgVk7LxfXERXkUk+uKNbPm+1pMPs0Bd8/1mIxXZkX7g1ai0NGmkqaP176IbF58EC2qDsQnNm217ZjNqmNcZ/O4ympN4nlWdTb3gI0nqI/k1DZ+YbqZzW/y4tjoGRT5zXy2ebV5fNNui+fCEEKpwMN2un04/bMjLFvvugr0ei4keEUNIBRlhiofo670I5U4Olzs2srimZBrN86yMYaHfJlIsWf1qWv8faI4pbftMevK90cRzk9r79MY9rsgP0sRZ2XeqyV7WZfEixlBmtWzAg54yNad3r4Dwvy5/nEdTtL/hL1vRIu3an9I4e7DDWmbYCdE6ep+V31kl1ejybrL01MsEBVp//J9TDd0On5/W90U/+fWmREEYZQUcR4XSRQG3Z214eHh4eHh4eHh4eHh4eHh0U38AwN5a6ACfJkKAAAAAElFTkSuQmCC"
            default: "error"
        }
    },
    setup(props, { emit }) {
        props = reactive(props);
        let expand = ref(false);
        let toggleText = ref("View More");
        const toggleContent = () => {
            expand.value = !expand.value;
            toggleText.value = expand.value ? "View Less" : "View More";
            emit("click");
        };
        return {
            expand,
            toggleText,
            toggleContent,
            props
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.alert-container {
    display: flex;
    width: 61.25rem;
    padding: 1.25rem 1rem 2rem 1rem;
    /* UI Properties */
    background: $colorWhite 0% 0% no-repeat padding-box;
    border-radius: 0.375rem;
}
.alert-icon {
    // display: flex;
    padding: 0.3125rem;
    width: 2.5rem;
    height: 2.5rem;
}

.header-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
    .first-row {
        display: flex;
        flex-grow: 1;
        gap: 0.75rem;
        align-items: center;
    }
    .body-content {
        padding: 1rem 0 1rem 0;
        font: normal normal normal 1rem/1.375rem Roboto;
        letter-spacing: 0px;
        color: $colorBlack;
        .alert-description{
            width: 36.25rem;
        }
        .custom-link {
            width: 4.75rem;
            color: $colorPrimary;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.alert-content-left {
    display: flex;
    flex-grow: 1;
    gap: 0.5rem;
    width: 36.25rem;
    font: normal normal bold 1.25rem/1.5rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
}
.alert-content-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: normal normal bold 1.25rem/1.5rem Roboto;
    letter-spacing: 0;
    color: $colorBlack;
    .alert-device-img {
        width: 3.4375rem;
        height: 2.3125rem;
        mix-blend-mode: multiply;
    }
    .sub-content-right {
        display: flex;
        gap: 0.5rem;
        .alert-device-id {
            height: 1.1875rem;
            font: normal normal bold 1rem/1.1875rem Roboto;
            letter-spacing: 0;
        }
        .alert-day-time {
            height: 1.1875rem;
            font: normal normal bold 1rem/1.1875rem Roboto;
            letter-spacing: 0;
        }
    }
}

.content-container-line {
    width: 0.125rem;
    background: $colorBlack 0% 0% no-repeat padding-box;
    opacity: 1;
}

.action-btn {
    display: flex;
    justify-content: space-between;
}

.right-button {
    display: flex;
    gap: 0.75rem;
}
.icon-type {
    font-size: 1.875rem;
    line-height: 1.875rem;
}
</style>