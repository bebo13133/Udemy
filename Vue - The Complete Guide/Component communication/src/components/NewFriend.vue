<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone"/>
      <label>Email</label>
      <input type="email" v-model="enteredEmail"/>
    </div>
    <div>
        <button>Add Friend</button>
    </div>
  </form>
</template>


<script>
export default {
emits:['add-contact'],
  data() {
    return{
        enteredName:'',
        enteredPhone:'',
        enteredEmail:'',
    }
  },
  methods:{
    submitData() {
        this.$emit('add-contact',this.enteredName, this.enteredPhone, this.enteredEmail)
    }
  }
};
</script>