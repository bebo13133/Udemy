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
                return this.courseGoalsA
            } else {
                return this.courseGoalsB
            }
        }
    }

})


app.mount('#user-goal')