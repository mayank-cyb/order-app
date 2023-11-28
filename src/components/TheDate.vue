<template>
    <div class="text-right date-time-wrapper">
      <span class="date">{{ dayOfMonth }}</span>
      <span class="time">{{ time }}</span>
    </div> 
</template>


<script setup>
  import { useDate } from 'vuetify/labs/date'
  import { ref, computed, watch, onUnmounted } from 'vue'

  const date = useDate();
  const currentTime = ref(new Date());


  let dayOfMonth = ref('');
  let hours = ref('');
  let minutes = ref('')
  let derivedHours = ref('');
  let derivedMinutes = ref('');
  let time = ref('');
  let intervalID;

  const timeIntervalPromise = new Promise((resolve) => {
    intervalID = setInterval(() => {
        currentTime.value = new Date();
    }, 1000);
    resolve(intervalID);
  })

  const getInterval = () => {
    timeIntervalPromise
    .then(intervalID => {
      return intervalID
    })
  }
  
  watch(currentTime, (newTime) => {
    setDateTime(newTime);
  }, {deep: true})

  const setDateTime = newTime => {
    dayOfMonth.value = date.format(newTime, 'normalDateWithWeekday').split(',')[1].toLocaleUpperCase();
    hours.value = newTime.getHours();
    minutes.value = newTime.getMinutes();
  }


  derivedHours = computed(() => (
    hours.value > 12 ? String(hours.value % 12) : hours.value.toString()
  ))

  derivedMinutes = computed(() => (
    minutes.value < 10 ? minutes.value.toString().padStart(2, '0') : minutes.value.toString()
  ))

  time = computed(() => (
    `${derivedHours.value}:${derivedMinutes.value} ${hours.value >= 12 ? 'PM' : 'AM'}`
  ))

  onUnmounted(() => {
    clearInterval(getInterval());
  })
  
</script>

<style lang="scss" scoped>
@import './src/assets/variables.scss';
  .date-time-wrapper {
    color: $colorWhite;
    display: flex;
    align-items: center;
    gap: 1.125rem;
    margin-right: 1.375rem;
    font-size: 1.875rem;
    font-family: $fontRoboto;
    font-weight: $light;
    letter-spacing: -0.01875rem;
    
    .date {
      display: flex;
      align-items: center;
      gap: 1.125rem;
      &:after {
        content: '';
        display: inline-flex;
        width: 0.125rem;
        height: 2.4375rem;
        background: $colorWhite;
      }
    }
  }
</style>