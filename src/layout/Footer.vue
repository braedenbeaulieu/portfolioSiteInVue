<template>
    <div class="footer">
        <p>all content &copy; {{date.getFullYear()}} braeden beaulieu</p>
    </div>
</template>

<script>
export default {
    methods(){
        let date = new Date();
        //document.write(d.getFullYear());
    }
    
}
</script>


<style lang="sass" scoped>
footer
	text-align: center
	font-size: .8em
	padding: 10px 0
	background: $grey

	p
		color: $white
</style>
