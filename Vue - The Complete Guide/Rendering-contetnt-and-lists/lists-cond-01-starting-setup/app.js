const app = Vue.createApp({
  data() {
    return {
      addInputValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.addInputValue)
      this.addInputValue = ''
    },
    removeGoal(idx) {
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
