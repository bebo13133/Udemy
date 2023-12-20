const app = Vue.createApp({
    data(){
       return {
        detailsAreVisible: false,
        friends:[
            {id:'manuel', name:'Manuel Lorenz', phone:'01234 5678 991', email:'manuel@localhost.com'},
            {id:'julie', name:'Julie Jones', phone:'Julie Jones', email:'julie@localhost.com'}

        ]
    }
    },
    methods: {
        toggleDetails (){
            this.detailsAreVisible= !this.detailsAreVisible
        }
    }
})

app.mount('#app')