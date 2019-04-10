<template>
    
    <div class="header">
        <h4 id="logo">bb</h4>
        <div id="burger"><p id="navToggle">&#9776;</p></div>

        <nav id="nav">
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
    name: 'Header'
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
    z-index: 2

    h4
        color: rgba(0, 0, 0, .7)
        cursor: pointer
        font-size: 3.2em
        font-weight: bolder
        letter-spacing: -.2rem

    #nav
        ul
            display: inline-flex
            align-items: center
            flex-wrap: wrap
            height: auto

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
            color: grey
            line-height: 50px

    @media screen and (max-width: 640px)
        h1
            position: absolute
            left: 30px
            top: 1px

        #burger
            font-size: 2em
            color: grey
            display: block
            position: absolute
            right: 30px
        
        #nav 
            height: auto
            background: white
            display: none
            width: 100%
            position: absolute
            top: 50px
            padding: 10px 0

            ul
                display: block
                text-align: center

                li
                    margin: 0
</style>
