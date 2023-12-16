const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      enteredValue: '',
      name:'',
      confirmName:'',
   
    };
  },
  methods: {
    confirmInput (){
      this.confirmName=this.name;
    },

    onSubmit (){
  
      alert('Submitted')
    },
    setName(e, lastName){
      this.name = e.target.value + ' ' + lastName;
    },
    onAdd(num) {
      return this.counter = this.counter + Number(num);
    },
    onReducer(num) {
      return this.counter = this.counter - Number(num)

    }
  },

});

app.mount('#events');
