const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    onAdd (){
      return this.counter++;
    },
    onReducer () {
      return this.counter-=1

    }
  }
});

app.mount('#events');
