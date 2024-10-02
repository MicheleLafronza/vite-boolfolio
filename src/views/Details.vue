<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
    name: 'Details',
    data(){
        return {
            project: []
        }
    },
    methods: {
        getDetails(slug){
            axios.get(store.apiURL + 'project/' + slug)
                .then(res =>{ 
                            this.project = res.data.project;         
            })
                .catch(error =>{
                    console.log(error);
                    
                })
        }
    },
    mounted(){
        const slug = this.$route.params.slug;
        this.getDetails(slug);
        this.getDate;
    }
}
</script>

<template>

    <div class="container">

        <h1>DETTAGLI PROGETTO</h1>

        <ul>
            <li>
                Titolo: {{ project.title }}
            </li>
            <li>
                Descrizione: {{ project.description }}
            </li>
            <li>
                Cliente: {{ project.client }}
            </li>
            <li>
                Creato: {{ project.created_at }}
            </li>
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

