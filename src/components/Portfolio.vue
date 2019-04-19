<template>
    <section class="portfolio">
        <h2 class="subtitle">Portfolio</h2>
        <div v-bind:key="project.id" v-for="project in portfolio">
            <Project v-bind:project="project"/>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue';

export default {
    name: "Portfolio",
    components: {
        Project
    },
    data() {
        return {
            portfolio: [
                {
                    id: 1,
                    title: 'Tom and Ash',
                    url: 'https://cake.scweb.ca/tomandash/',
                    description: 'This is a wedding website made for Tom and Ash Pagliarella. It has many features that they asked for like a image gallery and a guestbook page where you can say congratulations. Click the image to see how it turned out.',
                    poster: "tomandash",
                    icons: ['fab fa-html5', 'fab fa-sass', 'fab fa-laravel', 'fab fa-git', 'fab fa-php', 'fab fa-bootstrap', 'fal fa-database', 'fab fa-node', 'fab fa-js']
                },
                {
                    id: 2,
                    title: 'Firehouse Catering',
                    url: 'http://www.firehousecatering.ca',
                    description: 'Firehouse Catering is a website I worked on in a group project for school. This was our first attempt at teaching ourselves Git and also my first time learning how difficult it can be to work on a website with three other people. Click the image to look through what we created.',
                    poster: 'firehouseCatering',
                    icons: ['fab fa-html5', 'fab fa-sass', 'fab fa-git', 'fab fa-php', 'fab fa-bootstrap', 'fab fa-js']
                },
                {
                    id: 3,
                    title: 'Cooler Designs',
                    url: 'https://www.coolerdesigns.ca',
                    description: 'I have a friend who is a graphic designer. He asked me if I could create a website to showcase everything he\'s made. He came to me with a few ideas and we sat together and designed this. You may want to hire him! Click the image to check out the site and some of his work.',
                    poster: 'coolerDesigns',
                    icons: ['fab fa-html5', 'fab fa-sass', 'fab fa-git', 'fab fa-php', 'fab fa-js']
                },
                {
                    id: 4,
                    title: 'HanDIY',
                    url: 'http://www.handiy.ca',
                    description: 'A guy I know came to me one day saying he is starting a company and would like someone to do a website for him. He gave me a few colours and folder with stock images and told me  I had 100% creative control. This is my first attempt at a real website and  although it was never truely finished, I\'m happy with how the look turned out.',
                    poster: 'HanDIY',
                    icons: ['fab fa-html5', 'fab fa-sass', 'fab fa-git', 'fab fa-php', 'fab fa-js']
                }
            ]
        }
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

            

            .technologies
                display: inline-flex
                justify-content: center
                align-items: center
                flex-wrap: wrap
                width: 80%
                margin: 0 auto
                
                .tech
                    font-weight: bolder
                    color: $p-blue
                    padding-top: 10px

                i
                    font-size: 2em
                    margin: 0 4px

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
