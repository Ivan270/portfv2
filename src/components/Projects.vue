<template>
	<v-container
		fluid
		fill-height
		class="projects_container grey darken-3 white--text py-16"
	>
		<v-row justify="space-around">
			<v-col cols="12">
				<h2 class="text-h4 text-center pb-16">Projects</h2>
				<v-container>
					<v-row>
						<v-divider dark></v-divider>
					</v-row>
				</v-container>
			</v-col>
			<v-col cols="12">
				<v-card
					max-width="380"
					height="300"
					class="mx-auto pa-2 text-center"
					tile
					dark
					outlined
					hover
					@click="dialog = true"
					v-for="project in projects"
					:key="project.name"
				>
					<v-img :src="project.thumbnail"></v-img>
					<v-chip class="mt-5">{{ project.date }}</v-chip>
					<v-card-title class="justify-center">{{ project.name }}</v-card-title>
					<div class="text-center">
						<v-dialog v-model="dialog" max-width="900" dark>
							<v-card>
								<v-card-title class="text-h5">
									{{ project.name }}
								</v-card-title>
								<v-carousel v-model="model">
									<v-carousel-item v-for="(img, i) in project.imgs" :key="i">
										<v-sheet height="100%" tile>
											<v-img :src="img" contain></v-img>
										</v-sheet>
									</v-carousel-item>
								</v-carousel>

								<v-card-text>
									{{ project.description }}
								</v-card-text>

								<v-divider></v-divider>

								<v-card-actions>
									<v-btn
										color="primary"
										rounded
										small
										@click="goToLink(project.gitlink)"
									>
										Visit GitHub
									</v-btn>
									<v-spacer></v-spacer>
									<v-btn
										color="purple"
										small
										rounded
										@click="goToLink(project.link)"
									>
										Visit Page
									</v-btn>
									<v-spacer></v-spacer>
									<v-btn color="error" small rounded @click="dialog = false">
										Close
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'projects-comp',
		// props: {},
		data: function () {
			return {
				dialog: false,
				model: 0,
				projects: [
					{
						name: 'AlfaWeb',
						date: 2022,
						description:
							'Descripción del proyecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla magnam nostrum earum nisi fugit ipsum, quaerat vero officiis atque iste provident eveniet molestiae odio. Consectetur provident esse dicta ad.',
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
				],
			};
		},
		// computed: {},
		methods: {
			goToLink(link) {
				window.open(link);
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
