<!-- eslint-disable vue/valid-template-root -->
<template>
<section>
<h2 id="">My friends</h2>
<ul>
    <li></li>
</ul>
</section>
</template>


<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenzo",
          phone: "0894371779",
          email: "bebo@abv.bg",
        },
        {
          id: "john",
          name: "John Petrov",
          phone: "0894371779",
          email: "john@abv.bg",
        },
      ],
    };
  },
};
</script>
