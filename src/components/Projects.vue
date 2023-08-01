<template>
	<v-container
		fluid
		fill-height
		class="projects_container grey darken-3 white--text py-16"
	>
		<v-col cols="12">
			<h2 class="text-h4 text-center pb-16">Projects</h2>
			<v-container>
				<v-row>
					<v-divider dark></v-divider>
				</v-row>
			</v-container>
		</v-col>
		<v-row justify="center">
			<v-container>
				<v-expansion-panels inset dark>
					<v-expansion-panel>
						<v-expansion-panel-header
							>Fullstack Projects</v-expansion-panel-header
						>
						<v-expansion-panel-content>
							<v-slide-group class="pa-4" active-class="success" show-arrows>
								<v-slide-item>
									<v-row justify="space-around">
										<v-col
											cols="4"
											v-for="project in fullProjects"
											:key="project.name"
										>
											<ProjectCard :item="project" />
										</v-col>
									</v-row>
								</v-slide-item>
							</v-slide-group>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<v-expansion-panel>
						<v-expansion-panel-header
							>Front End Projects</v-expansion-panel-header
						>
						<v-expansion-panel-content>
							<v-slide-group class="pa-4" active-class="success" show-arrows>
								<v-slide-item>
									<v-row justify="space-around">
										<v-col
											cols="4"
											v-for="project in frontProjects"
											:key="project.name"
										>
											<ProjectCard :item="project" />
										</v-col>
									</v-row>
								</v-slide-item>
							</v-slide-group>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-container>
		</v-row>
		<v-row>
			<v-sheet
				class="mx-auto projects_container grey darken-2"
				elevation="2"
				max-width="75%"
			>
			</v-sheet>
		</v-row>
	</v-container>
</template>

<script>
	import ProjectCard from '@/components/ProjectCard.vue';

	export default {
		name: 'projects-comp',
		// props: {},
		data: function () {
			return {
				fullProjects: [
					{
						name: 'Bootcamp App',
						date: 2023,
						description: 'lorem ipsum dolor noseque',
						thumbnail: require('@/assets/bootcamp-home.png'),
						imgs: [
							require('@/assets/bootcamp-home.png'),
							require('@/assets/bootcamp-list.png'),
							require('@/assets/bootcamp-signup.png'),
							require('@/assets/bootcamp-login.png'),
							require('@/assets/bootcamp-profile.png'),
							require('@/assets/bootcamp-profile.png'),
						],
						gitlink: 'https://github.com/Ivan270/bootcamps_users',
						link: 'https://bootc-app.fly.dev/',
					},
				],
				frontProjects: [
					{
						name: 'AlfaWeb',
						date: 2022,
						description:
							"Vue.js app environment with: Vue Router for protecting routes and redirecting the user, creation of routines to connect to Firebase Authentication and Firestore Cloud, managing the information provided by the database with Vuex. Vuetify as the main UI Framework. Overall it's an online course managing system using Firebase for database administration, only letting registered users to log into the web.",
						thumbnail: require('@/assets/alfaweb-login.png'),
						imgs: [
							require('@/assets/alfaweb-login.png'),
							require('@/assets/alfaweb-signin.png'),
							require('@/assets/alfaweb-home.png'),
							require('@/assets/alfaweb-admin.png'),
							require('@/assets/alfaweb-404.png'),
						],
						gitlink: 'https://github.com/Ivan270/alfaweb',
						link: 'https://alfaweb-51b99.web.app/login',
					},
					{
						name: 'Good Moovs',
						date: 2022,
						description:
							"A simple movie database front-end project. I'm consuming 'The Movie Database' API for getting and storing its information in Vue Store, using dynamic routing for showing the desired movie information (rating, genres, cast, poster and its teaser/trailer video in Youtube). All with my own aesthetic design.",
						thumbnail: require('@/assets/moovs-main.png'),
						imgs: [
							require('@/assets/moovs-main.png'),
							require('@/assets/moovs-movie-list.png'),
							require('@/assets/moovs-movie-view.png'),
						],
						gitlink: 'https://github.com/Ivan270/goodmoovs',
						link: 'https://good-moovs.netlify.app/',
					},
					{
						name: 'Shopping App',
						date: 2022,
						description:
							"A Vuetify shopping app that consumes 'Fake Store Api' for fetching a variety of products in different categories. The shopping cart information is being stored in Vuex's store, from where I can calculate the cart's total and check or change the amount of items for each product. At the checkout I'm using Vuelidate for validating required, email, number and phone number inputs. At the end, after confirming the order the user is taken to a confirmation screen which shows the order's ID.",
						thumbnail: require('@/assets/shop-checkout.png'),
						imgs: [
							require('@/assets/shop-home.png'),
							require('@/assets/shop-category.jpg'),
							require('@/assets/shop-product.png'),
							require('@/assets/shop-cart.png'),
							require('@/assets/shop-checkout.png'),
							require('@/assets/shop-confirmation.png'),
						],
						gitlink: 'https://github.com/Ivan270/store_app',
						link: 'https://store-fakestoreapi.netlify.app/',
					},
				],
				classArray: ['selected', 'underlined'],
			};
		},
		// computed: {},
		// methods: {},
		// watch: {},
		components: {
			ProjectCard,
		},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
