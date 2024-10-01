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
            <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
            <li><RouterLink :to="{name: 'about'}">About</RouterLink></li>
            <li><RouterLink :to="{name: 'projects'}">Progetti</RouterLink></li>
            <li><RouterLink :to="{name: 'contacts'}">Contatti</RouterLink></li>
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