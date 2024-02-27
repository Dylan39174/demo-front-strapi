<template>
    <nav class="navigation">
        <ul class="navigation-list">
            <li class="navigation-item"><router-link class="navigation-link" to="/">Accueil</router-link></li>
            <li class="navigation-item"><router-link class="navigation-link" to="/restaurant">Restaurant</router-link></li>
            <li class="navigation-item"><router-link class="navigation-link" to="/hotel">Hotel</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationLayout'
}
</script>

<style lang="sass" scoped>
    .navigation
        background-color: white
        height: 50px
        width: 100%

        &-list
            display: flex
            justify-content: center
            align-items: center
            gap: 25px
            height: 100%

        &-link.router-link-active
            color: orange


</style>
