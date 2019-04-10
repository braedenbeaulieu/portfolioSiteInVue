<template>
    <section class="portfolio">
        <h2 class="subtitle">Portfolio</h2>
        <Firehouse />
        <CoolerDesigns />
        <Handiy />
    </section>
</template>

<script>
import Firehouse from './portfolio/Firehouse.vue'
import CoolerDesigns from './portfolio/CoolerDesigns.vue'
import Handiy from './portfolio/Handiy.vue'

export default {
    name: "Portfolio",
    components: {
        Firehouse,
        CoolerDesigns,
        Handiy
    }
}
</script>

<style lang="sass" scoped>

</style>

<style lang="sass">
    @import '../sass/_variables'

    .project
        border-bottom: 2px solid $lightgrey
        height: 400px

        h3
            padding: 20px
            font-size: 1.5em

        .info-container
            display: flex
            justify-content: space-between
            align-items: center

            .project-image
                width: 45%
                max-height: 250px
                border: 2px solid $grey
                border-radius: 4px
                background: pink
             
            p
                display: block
                width: 45%
                height: 250px
                line-height: 30px
                font-size: 1.1em
                text-indent: 20px

</style>
