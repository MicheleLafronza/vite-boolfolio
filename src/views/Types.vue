<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
    name: 'Types',

    data(){
        return{
            types: []
        }
    },
    methods: {
        getApi(){
            axios.get(store.apiURL + 'types/')
            .then(res =>{
                this.types = res.data.types;
                
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
            Elenco dei tipi utilizzati
        </h1>

        <ul>
            <li v-for="type in types">{{ type.name }}</li>
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