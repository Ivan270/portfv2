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
<style>
	@keyframes show {
		from {
			opacity: 0;
			filter: blur(5px);
			scale: 25%;
			transform: translateY(100%);
			transition: all 0.5s;
		}

		to {
			opacity: 1;
			filter: blur(0px);
			scale: 100%;
			transform: translateY(0);
		}
	}
	.blockAnim {
		view-timeline-name: --block;
		view-timeline-axis: block;
		animation-timeline: --block;
		animation-name: show;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
	}

	.before-enter {
		opacity: 0;
		filter: blur(15px);
		transform: translateX(-100%);
		transition: all 1.2s;
	}
	@media (prefers-reduced-motion) {
		.before-enter {
			transition: none;
		}
	}

	.enter {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}
	.skill-icon:nth-child(2) {
		transition-delay: 200ms;
	}
	.skill-icon:nth-child(3) {
		transition-delay: 400ms;
	}
	.skill-icon:nth-child(4) {
		transition-delay: 600ms;
	}
	.skill-icon:nth-child(5) {
		transition-delay: 800ms;
	}
	.skill-icon:nth-child(6) {
		transition-delay: 1000ms;
	}
	.skill-icon:nth-child(7) {
		transition-delay: 1200ms;
	}
	.skill-icon:nth-child(8) {
		transition-delay: 1400ms;
	}
	.skill-icon:nth-child(9) {
		transition-delay: 1600ms;
	}
</style>
