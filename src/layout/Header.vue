<template>
    <div class="header">
       <router-link class="logo link" to="/"><h1 v-on:click="slideHeader(true)">bb</h1></router-link>
        <div id="burger" v-on:click="slideHeader(isOpen)"><p id="navToggle">&#9776;</p></div>

        <nav id="desktop-nav">
            <ul>
                <router-link class="link" id="portfolioLink" to="/portfolio">Portfolio</router-link>
                <router-link class="link" id="aboutLink" to="/about">About</router-link>
                <router-link class="link" id="contactLink" to="/contact">Contact</router-link>
            </ul>
        </nav>

        <nav id="mobile-nav" ref="mobileNav" v-on:click="slideHeader(isOpen)">
            <ul>
                <router-link class="link" id="portfolioLink" to="/portfolio">Portfolio</router-link>
                <router-link class="link" id="aboutLink" to="/about">About</router-link>
                <router-link class="link" id="contactLink" to="/contact">Contact</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        slideHeader: function(isOpen) {
            if(!isOpen) {
                this.$refs.mobileNav.style.right = '0';
                this.isOpen = true;
            } else {
                this.$refs.mobileNav.style.right = '-50%';
                this.isOpen = false;
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables'

.header
    position: fixed
    width: 150px
    height: 100vh
    background: white
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .2)
    z-index: 2000

    .logo.link
        cursor: pointer
        margin: 0

        h1
            cursor: pointer
            font-size: 3.2em
            font-weight: bolder
            letter-spacing: -.2rem
            padding: 30px
            margin: 0

    .logo.link.router-link-exact-active
        h1
            color: #596b89


    #mobile-nav
        display: none

    #desktop-nav
        ul
            display: inline-flex
            align-items: center
            flex-wrap: wrap
            height: auto
            padding-bottom: 200px
            padding-left: 15px

            .link
                padding: 17px 15px
                margin: 0 10px
                transition: all .3s

                &:hover
                    cursor: pointer
                    color: $p-blue	

            .router-link-exact-active
                color: $p-blue

    #burger 
        margin: 0 12px
        height: 50px
        text-decoration: none
        font-size: 25px
        display: none
        cursor: pointer
        
        #navToggle 
            color: $grey
            line-height: 50px

@media screen and (max-width: 640px)
    .header
        width: 100%
        height: 50px

        .logo.link
            h1
                position: absolute
                left: 30px
                top: 1px
                padding: 0

        #burger
            font-size: 2em
            display: block
            position: absolute
            right: 30px

        #desktop-nav
            display: none

        #mobile-nav 
            display: block
            height: auto
            background: white
            width: 50%
            position: absolute
            top: 50px
            right: -50%
            padding: 10px 0
            transition: all .3s
            border-top: 1px solid rgba(0, 0, 0, .1)
            box-shadow: -3px 5px 5px rgba(0, 0, 0, .3)
            z-index: 1

            ul
                display: block
                text-align: center
                width: 100%
                padding: 0

                .link
                    display: block
                    margin: 0
                    padding: 10px 0
                    width: 100%

                    &:active, &:hover
                        background: rgba(0, 0, 0, .2)

                .router-link-exact-active
                    color: $p-blue
</style>
