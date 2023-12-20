const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value // използвам референция към инпута
    },
  },
  beforeCreate () {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },
  beforeMount( ){
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  }, 
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  }
});

app.mount('#app');

const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal:"Pizza"
    }
  }
})
app2.mount('#app2')