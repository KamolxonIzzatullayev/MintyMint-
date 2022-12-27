<template>
  <div class="home">
    <h1>Timer</h1>
    <div class="minutes">
      <label for="minutes"> Minutes: </label>
      <input type="number" :disabled="isDisabled" v-model="minutes" />
    </div>
    <br />
    <div class="starter">
      <button v-if="!isDisabled" @click="setTimer">Set</button>
    </div>

    <div class="shower">
      <span class="min">{{ shownMinutes }}</span> :
      <span class="sec">{{ shownSeconds }}</span>
    </div>

    <button v-if="isDisabled" @click="stopTimer">Stop</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      minutes: 0,
      result: 0,
      isDisabled: false,
      timer: undefined,
    };
  },
  computed: {
    shownMinutes() {
      return Math.floor(this.result / 60);
    },
    shownSeconds() {
      return this.result % 60;
    },
  },
  methods: {
    setTimer() {
      this.isDisabled = true;
      this.result = this.minutes * 60;
      this.timer = setInterval(() => {
        this.result--;
        if (this.result == 0 || this.result < 0) {
          clearInterval(this.timer);
          this.isDisabled = false;
        }
      }, 1000);
    },
    stopTimer() {
      this.minutes = 0;
      this.result = 0;
      clearInterval(this.timer);
      this.isDisabled = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.shower {
  margin-top: 2rem;
  font-size: 4rem;
}
</style>
