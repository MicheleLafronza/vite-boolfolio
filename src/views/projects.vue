<script>

// importiamo axios
import axios from 'axios';

// importo store
import { store } from '../store/store';

export default {
    name: 'projects',
    data(){
        return {
            projects :[]
        }
    },
    methods: {
        getApi(){
            axios.get(store.apiURL + 'projects')
            .then(result => {
                this.projects = result.data.projects.data 
                // console.log(this.projects);
                console.log(this.projects);
                
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
    mounted(){
        this.getApi()
    }
}


</script>


<template>

<div class="container">
    <h1>
        Elenco dei miei progetti:
    </h1>

    <ul>

        <li class="project" v-for="project in projects" :key="project.id">
            <RouterLink :to="{ name: 'details', params: {slug: project.slug}}">
            <strong> Titolo: </strong> {{ project.title }} <strong>||</strong> <strong>Descrizione:</strong> {{ project.description }} <strong>|| Cliente : </strong> {{ project.client }} <strong>||</strong> Tipo: <span class="type"> {{ project.type.name }}</span> <strong>||</strong>  
            <ul v-if="project.technologies.length > 0">
                Tecnologie:
                <li class="tech" v-for="tech in project.technologies">
                    {{ tech.name }}
                </li>
            </ul>
            <span v-else>Nessuna tecnologia</span>
            </RouterLink>
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
}

li {
    margin-top: 15px;
    margin-bottom: 15px;
}

.project {
    border-bottom: 2px solid blue;
    padding: 10px;
}

.tech {
    list-style-type: none;
    color: red;
}

.type {
    color: burlywood;
}

a {
    text-decoration: none;
    color: black;
}
</style>