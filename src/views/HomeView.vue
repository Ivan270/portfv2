<template>
	<v-container fluid>
		<title-comp></title-comp>
		<about-comp></about-comp>
		<projects-comp></projects-comp>
		<Skills />
		<Contact />
	</v-container>
</template>

<script>
	import Title from '@/components/Title.vue';
	import About from '@/components/About.vue';
	import Projects from '@/components/Projects.vue';
	import Skills from '@/components/Skills.vue';
	import Contact from '@/components/Contact.vue';

	export default {
		name: 'Home-view',

		components: {
			'title-comp': Title,
			'about-comp': About,
			'projects-comp': Projects,
			Skills,
			Contact,
		},
	};
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
</style>
