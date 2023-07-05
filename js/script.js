const {createApp} = Vue;

createApp({

    data(){

        return{

        }
    }
}).mount('#app')

for(let i = 0 ; i < 10 ; i++){
    axios.get('')
    .then(function(response){
        const result = response.data
        console.log(response.data.response)
    });

    
}