<template>
    <section class="about">
        <h2 class="subtitle">About</h2>
        <Education />
        <Skills />
        <Achievements />
    </section>
</template>

<script>
import Education from './about/Education.vue'
import Skills from './about/Skills.vue'
import Achievements from './about/Achievements.vue'

export default {
    name: "About",
    components: {
        Education,
        Skills,
        Achievements
    }
}
</script>

<style lang="sass" scoped>
    .about
        
</style>
