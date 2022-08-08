<template>
	<v-container class="black white--text text-center py-16" fluid>
		<h2 class="text-h4 pb-16">Skill<span class="title-span-dark">s</span></h2>
		<v-container>
			<v-row>
				<v-divider dark></v-divider>
			</v-row>
		</v-container>
		<v-row justify="center" justify-lg="space-around">
			<v-col cols="auto" lg="1" v-for="skill in skills" :key="skill.title">
				<v-sheet
					rounded="xl"
					height="90"
					width="90"
					class="d-flex flex-column align-center justify-center"
					dark
				>
					<v-hover v-slot="{ hover }">
						<v-icon x-large :class="{ 'change-color': hover }">{{
							skill.icon
						}}</v-icon>
					</v-hover>

					<h6 class="white--text ma-0 pa-0">
						{{ skill.title }}
					</h6>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'skills-comp',
		// props: {},
		data: function () {
			return {
				skills: [
					{ title: 'HTML', icon: 'mdi-language-html5' },
					{ title: 'CSS', icon: 'mdi-language-css3' },
					{ title: 'JavaScript', icon: 'mdi-language-javascript' },
					{ title: 'Vue', icon: 'mdi-vuejs' },
					{ title: 'Sass', icon: 'mdi-sass' },
					{ title: 'Vuetify', icon: 'mdi-vuetify' },
					{ title: 'Bootstrap', icon: 'mdi-sass' },
				],
			};
		},
		// computed: {},
		//methods: {}
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped>
	.change-color:not(.on-hover) {
		transform: rotate(360deg);
		color: #f57f17 !important;
	}
	.change-color {
		transition: transform 0.6s ease-in-out, color 0.6s ease-in-out;
	}
</style>
