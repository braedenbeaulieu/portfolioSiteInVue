<template>
    <div class="project">
        <h3>{{project.title}}</h3>
        <div class="info-container">
            <a :href=project.url target="_blank"><img class="project-image" :src="getImgUrl(project.poster)" /></a>
            <p>
                {{project.description}}
            </p>
        </div>
        
        <div class="technologies">
            <p class="tech">Technologies:</p>
            <i :key="icon" v-for="icon in project.icons" :class="`${icon}`"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: ['project'],
    methods: {
        // gets the project poster dynamically from the images folder
        getImgUrl(img) {
            let images = require.context('../assets/images/', false, /\.jpg$/)
            return images('./' + img + ".jpg")
        }
    }
}
</script>

<style lang="sass" scoped>
</style>
