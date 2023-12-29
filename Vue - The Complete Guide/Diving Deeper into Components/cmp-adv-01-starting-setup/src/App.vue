<template>
  <div>
    <TheHeader/>
    <!-- <BadgeList/>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals #default="slotProps">

      <h2>{{slotProps.item}}</h2>
      <p>{{slotProps["anotherProp"]}}</p>
   -->
    <!-- </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active</button>
    <button @click="setSelectedComponent('manage-goals')">Manage</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponent"></component>
  

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';


export default {
  components: {
    TheHeader,

    ActiveGoals,
    ManageGoals
    },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(component){
      this.selectedComponent = component;
    }

  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>