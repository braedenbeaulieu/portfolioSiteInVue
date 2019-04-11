<template>
    <div class="landing">
        <div>
            <img id="assortedLines" src="../assets/images/assortedLinesWhiteResize.png" alt="Assorted Lines Logo">
            <h1>braeden beaulieu</h1>
            <p>Developer / Designer</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing'
}
</script>

<style lang="sass" scoped>

.landing
    width: 100%
    height: 100%
    background: url(../assets/images/wavesResize.jpg) 10%
    background-size: cover
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    box-shadow: 3px 3px 30px rgba(0, 0, 0, .5)
    margin: 0
    
    div
        img
            display: block
            width: 220px
            margin: 0 auto 0
            padding: 30px

        h1
            color: white
            font-size: 4em
            text-align: center
            font-family: sans-serif
            font-weight: 600

        p
            color: white
            text-align: center
            font-size: 1.6em
            margin-top: 20px 0

        #downArrow
            color: white
            text-align: center
            margin: 0 auto
            width: 100%
            font-size: 4em
            margin-top: 50px 
            cursor: pointer
            transition: all .3s
            z-index: 1

        &:hover
            text-shadow: 0 0 20px rgba(255, 255, 255, .8)

@media screen and (max-width: 640px)
	.landing
		div
			img
                margin-top: -50%
                width: 40%

			h1
				font-size: 2.5em
</style>
