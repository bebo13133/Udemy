const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {

    outputFullName (){
      if(this.name===""){
        return ''
      }
      return this.name + ' ' + "Iliev"

    },

    resetInput (){
      this.name = ""
    },

    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
