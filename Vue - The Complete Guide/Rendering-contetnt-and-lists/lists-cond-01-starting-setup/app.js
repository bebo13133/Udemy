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
  }
});

app.mount('#user-goals');
