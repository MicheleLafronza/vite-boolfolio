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
            <li>Home</li>
            <li>About</li>
            <li>Progetti</li>
            <li>Contatti</li>
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
    // debug
    border: 2px solid red;
}

ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }


</style>