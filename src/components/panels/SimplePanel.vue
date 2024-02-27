<template>
    <section class="panel simple">
        <p>{{ content }}</p>
    </section>
</template>

<script>
export default {
    name: 'SimplePanel',
    props: ['content']
}
</script>

<style lang="sass" scoped>

    .simple
        padding: 5vw 9vw
        text-align: center

</style>