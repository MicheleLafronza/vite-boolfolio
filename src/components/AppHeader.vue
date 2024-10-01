<script>
import router from '@/router';

export default {
    name: 'AppHeader'
}

</script>

<template>

<header>

    <nav class="navbar">
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/chi-siamo">About</RouterLink></li>
            <li>Progetti</li>
            <li><RouterLink to="/contatti">Contatti</RouterLink></li>
        </ul>
    </nav>

</header>

</template>

<style lang="scss" scoped>

header {
    width: 100%;
    display: flex;
    justify-content: center;
}

.navbar {
    width: 70%;
    font-weight: 400;
}

ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

a {
 color: red;
 text-decoration: none;
}

.router-link-active {
    color: blue;
    text-decoration: underline;
}


</style>