<template>
	<v-container fluid class="mb-16">
		<v-row justify="center">
			<v-col cols="12">
				<v-container>
					<v-row>
						<v-divider></v-divider>
					</v-row>
				</v-container>
				<h2 class="text-h4 text-center pt-16 pb-4">
					Ab<span class="title-span">o</span>ut me
				</h2>
			</v-col>
			<v-row justify="center" class="text-center">
				<v-col cols="12" md="6">
					<v-card class="mx-auto pa-5" elevation="5" outlined max-width="344">
						<v-img src="@/assets/profile.jpg" height="350px"></v-img>
					</v-card>
				</v-col>

				<v-col cols="12" md="6" align-self="center">
					<v-card
						max-width="700"
						class="ma-5 pa-5"
						elevation="10"
						outlined
						shaped
						color=""
					>
						<v-card-title class="about__title font-weight-black">
							<h5 class="text-h6">Hey there!</h5>
						</v-card-title>
						<v-card-text class="text-body-1 text-start about__text"
							>My name is Iván and I'm a former composer turned web developer,
							with 10 years of experience managing recording studios and
							handling projects for professional, amateur, and large enterprise
							clients. This year I completed a Fullstack Developer Bootcamp and
							have experience in Front End using technologies such as HTML, CSS,
							JavaScript, and Vue.js framework. I'm adaptable, have an interest
							in continuous learning, and a high ability to identify and solve
							problems. I'm currently working on gaining experience developing
							my own projects, which you will be able to look at below
							<span class="text-h5">&#128071;</span>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'about-comp',
		// props: {},
		data: function () {
			return {};
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

<style scoped></style>
