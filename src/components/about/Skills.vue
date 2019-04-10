<template>
    <div class="skills">
        <h3>Skills <i class="fal fa-code"></i></h3>
        <div class="frontend">
            <h4>Frontend</h4>
            <p>
                One of my favourite parts of the website creation process is designing,
                because first impressions are very important and a good design is the begginning of a great webpage.
                I usually start with a pen and paper but also I have plenty experience with Photoshop.
            </p>
            <p>
                For structure I would usually just use plain HTML but recently I have been getting used to
                some templating languages like Blade and Handlebars and frameworks like Angular and Vue.js.
            </p>
        </div>
        <div class="backend">
            <h4>Backend</h4>
            <p>
                On the server side, my language of choice is PHP, because of the framework Laravel.
                I've been using Laravel for the a year and with it I've pushed the boundries on what I've been
                able to achieve in a website.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills"
}
</script>

<style lang="sass" scoped>
    @import '../../sass/_variables'
    div
        h4
            color: $grey
            padding: 10px 0
            font-weight: 600
        
        ul
            li
                color: red
</style>
