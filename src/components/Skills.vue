<template>
	<v-sheet height="100vh">
		<v-container
			fill-height
			class="black white--text text-center py-16 d-flex flex-column justify-center"
			fluid
		>
			<h2 class="text-h4 pb-16">Skill<span class="title-span-dark">s</span></h2>

			<v-sheet class="mx-auto" max-width="70%" dark rounded="xl">
				<v-slide-group class="pa-4" show-arrows>
					<v-slide-item v-for="skill in skills" :key="skill.title">
						<v-card
							class="ma-4 skill-icon"
							width="100"
							elevation="0"
							v-scrollAnimation
						>
							<v-row align="center" justify="center">
								<v-sheet
									rounded="xl"
									height="90"
									width="90"
									class="d-flex flex-column align-center justify-center"
									color="black"
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
							</v-row>
						</v-card>
					</v-slide-item>
				</v-slide-group>
			</v-sheet>
		</v-container>
	</v-sheet>
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
					{ title: 'Node JS', icon: 'mdi-nodejs' },
					{ title: 'PostgreSQL', icon: 'mdi-database' },
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
