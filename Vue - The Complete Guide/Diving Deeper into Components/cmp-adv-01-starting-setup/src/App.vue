<template>
  <div>
    <TheHeader/>
    <BadgeList/>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals>
      <h2></h2>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';

import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    CourseGoals
    },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
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