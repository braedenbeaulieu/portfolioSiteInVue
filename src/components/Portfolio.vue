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

<style lang="sass">
    @import '../sass/_variables'
    .portfolio
        .project
            height: auto

            .info-container
                display: flex
                justify-content: space-between
                align-items: center
                padding-top: 10px

                a   
                    width: 45%

                    .project-image
                        width: 100%
                        max-height: 250px
                        border: 2px solid $grey
                        border-radius: 4px
                
                p 
                    width: 45%

    @media screen and (max-width: 1250px)
        .portfolio
            .project
                height: auto

                .info-container
                    flex-wrap: wrap

                    a
                        width: 450px
                        margin: 20px auto

                        .project-image
                            width: 100%

                    p
                        width: 100%
                        margin: 20px 0
                        height: auto

</style>
