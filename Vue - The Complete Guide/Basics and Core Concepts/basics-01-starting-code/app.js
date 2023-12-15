const app = Vue.createApp({

    data() {
        return {
            courseGoals: "Finish the Course and learn Vue",
            vueLink: "https://vuejs.org/",
        };
    },
    methods: {
        outputGoal() {
            const mathRandomNumber = Math.random();
            if (mathRandomNumber < 0.5) {
                return "Learn more"
            } else {
                return "Master Vue"
            }
        }
    }

})


app.mount('#user-goal')