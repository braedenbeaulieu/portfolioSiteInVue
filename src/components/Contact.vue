<template>
    <section class="contact">
        <h2 class="subtitle">Contact</h2>
        <div class="contact-icons">
            
            <a href="mailto:braedenbeaulieu@gmail.com?Subject=Hello"><i class="fal fa-mailbox"></i> braedenbeaulieu@gmail.com</a>

            <a href="https://twitter.com/braedenbeaulieu" target="_blank"><i class="fab fa-twitter"></i> @braedenbeaulieu</a>

            <a href="https://www.linkedin.com/in/braedenbeaulieu/" target="_blank"><i class="fab fa-linkedin"></i> /braedenbeaulieu</a>

            <a href="https://behance.net/braedenbeaulieu" target="_blank"><i class="fab fa-behance"></i> /braedenbeaulieu</a>

            <a href="https://github.com/braedenbeaulieu" target="_blank"><i class="fab fa-github"></i> /braedenbeaulieu</a>

        </div> 
    </section>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style lang="sass" scoped>
    @import '../sass/_variables'

    .contact

        .contact-icons
            width: 400px
            margin: 10px auto
            text-align: left
            font-size: 1.3em

            a
                display: block
                line-height: 25px
                font-size: 1.1em
                margin: 0 0 10px
                color: $grey

                i
                    width: 50px
                    margin: 0 3px
        
</style>
