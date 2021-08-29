const app = Vue.createApp({

    // we can also bind styles dynamically in multiple ways in vue
    data(){
        return {
            redColor: 'background-color:red',
            oranceColor: 'orange',
            height: 100,

            divStale1: {
                backgroundColor: 'gray',
                width: '100px'
            },

            divStyle2: {
                backgroundColor: 'yellow'
            },
            divStyle3: {
                height:'100px',
                width: '100px'
            }
        };
    }

})


app.mount('#app')