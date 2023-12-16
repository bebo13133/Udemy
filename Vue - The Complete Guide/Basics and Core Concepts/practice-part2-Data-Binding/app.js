const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter (){
      if(this.counter>50) this.counter=0;
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = ''
    //   } else {

    //     this.fullName = value + ' ' + "Iliev"
    //   }
    // },
  },
  computed: {

    fullName() {
  
      if(this.name==="" && this.lastName===""){
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {

    outputFullName() {


    },

    resetInput() {
      this.name = ""
    },

    setName(event) {
      this.name = event.target.value;
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
