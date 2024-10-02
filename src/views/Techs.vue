<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
    name: 'Techs',
    data(){
        return {
            techs: []
        }
    },
    methods: {
        getApi(){
            axios.get(store.apiURL + 'technologies/')
            .then(res =>{
                this.techs = res.data.techs;
                // console.log(this.techs)               
            })
            .catch(error => {
                console.log(error);
                
            })
        }
            

    },
    mounted(){
        this.getApi();
    }
}
</script>


<template>

    <div class="container">

        <h1>
            Elenco delle tecnologie utilizzate
        </h1>

        <ul>
            <li v-for="tech in techs">{{ tech.name }}</li>
        </ul>

    </div>

    

</template>

<style lang="scss" scoped>

.container {
    width: 60%;
    margin: 0 auto;
    background-color: blueviolet;
}

h1 {
    padding: 10px;
    text-align: center;
    color: white;
}

ul {
    background-color: azure;
    list-style-type: none;
    padding-top: 10px;
    padding-bottom: 10px;    
}

li {
    margin-top: 15px;
    margin-bottom: 15px;
}

</style>