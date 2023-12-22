<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Friend)':''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite </button>

    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:[
  //   'name',
  //   'phoneNumber',
  //   'emailAddress'
  // ],
    props:{
      id:{
          type:String,
      required:true,
      },
    name: {
      type:String,
      required:true,
    },
    phoneNumber: {
      type:String,
      required:true,
    },
    emailAddress: {
      type:String,
      required:true,
    },
    isFavorite:{
      type:Boolean,
      required:false,
      default:false,
    }
    },
    emits:['toggle-favorite'],
    // emits:{
    //   'toggle-favorite': function(id){
    //     if(id){
    //       return true
    //     }else{
    //       console.log('Id is missing')
    //     return false
    //     }
    //   }
    // }, // валидация   дали съществува ИД
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite:this.isFavorite
 
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
     toggleFavorite() {
    this.$emit('toggle-favorite', this.id)
     }

  }
};
</script>