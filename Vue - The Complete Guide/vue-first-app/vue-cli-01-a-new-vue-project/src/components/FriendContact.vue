<!-- eslint-disable vue/valid-template-root -->

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetailsVisible">Show</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzo",
        phone: "0894371779",
        email: "bebo@abv.bg",
      },
    };
  },
  methods:{
    toggleDetailsVisible(){
        this.detailsVisible = !this.detailsVisible;
    }
  }
};
</script>
