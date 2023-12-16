const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed:{
 
    fullName (){
      console.log("hi")
      if(this.name===""){
        return ''
      }
      return this.name + ' ' + "Iliev"
    } 
  },
  methods: {

    outputFullName (){
    

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
