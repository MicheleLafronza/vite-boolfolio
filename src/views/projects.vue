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
            })
            .catch(error => {
                console.log(error);
                
            })
            
        }
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

        <li v-for="project in projects">
            Titolo: {{ project.title }} <strong>||</strong> Descrizione: {{ project.description }} <strong>||</strong> Cliente : {{ project.client }} <strong>||</strong> Tipo: {{ project.type.name }} <strong>||</strong> 
             
            <ul v-if="project.technologies.length > 0">
                Tecnologie:
                <li v-for="tech in project.technologies">
                    {{ tech.name }}
                </li>
            </ul>
            <span v-else>Nessuna tecnologia</span>
        </li>
        
    </ul>
    
</div>

</template>

<style lang="scss" scoped>

.container {
    width: 60%;
    margin: 0 auto;
}

h1 {
    text-align: center;
}

li {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>