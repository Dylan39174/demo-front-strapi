<template>
    <section class="panel heroscreen">
        <picture class="imageResponsive">
            <img class="imageResponsive-block" :src="imageUrl" alt="Une Image">
        </picture>
    </section>
</template>

<script>

export default {
    name: 'HeroscreenPanel',
    props: ['imageUrl']
}

</script>

<style lang="sass" scoped>

    .heroscreen
        height: calc(100vh - 50px)

        .imageResponsive

            &, &-block
                display: block
                width: 100%
                height: 100%

            &-block
                width: 100%
                object-fit: cover

</style>
