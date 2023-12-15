const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      enteredValue: ''
    };
  },
  methods: {
    onAdd(num) {
      return this.counter = this.counter + Number(num);
    },
    onReducer(num) {
      return this.counter = this.counter - Number(num)

    }
  }
});

app.mount('#events');
