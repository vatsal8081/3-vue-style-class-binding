const app = Vue.createApp({

    // we can also bind classes dynamically in multiple ways in vue

    data(){
        return {
            divClass: 'div-box',
            isGreen: true,
            greenBox: 'green-box',
            isPink: true

        };
    },

    computed: {

        setGreenOrNot(){
            let random = Math.random()
            return { 'green-box' : random > 0.5 ? true : false }
        }
    }
    

})


app.mount('#app')