const app = Vue.createApp({

    data() {
        return {
            courseGoalsA: "Finish the Course and learn Vue",
            courseGoalsB: "Master vue build amazing apps!",
            vueLink: "https://vuejs.org/",
        };
    },
    methods: {
        outputGoal() {
            const mathRandomNumber = Math.random();
            if (mathRandomNumber < 0.5) {
                return courseGoalsA
            } else {
                return courseGoalsB
            }
        }
    }

})


app.mount('#user-goal')