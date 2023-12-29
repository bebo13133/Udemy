<template>
  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="isInputInvalid">
        <h2>Input is invalid</h2>
        <p>Please entered a characters</p>
        <button @click="ErrorOkay">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      if (enteredGoal === "") this.isInputInvalid = true;
    },
    ErrorOkay() {
      this.isInputInvalid = false;
    },
  },
};
</script>