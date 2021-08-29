const app = Vue.createApp({

    data(){
        return {
            userClassInput: "",
            isParagraphVisible: true,
            color: ''
        }
    },

    computed: {
        addUserClass(){
            console.log('in');
            return this.userClassInput === 'user1' || 'user2' 
            ?  this.userClassInput
            :  '' 
        }
    }
});






app.mount('#app');