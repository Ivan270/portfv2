<template>
	<v-card
		max-width="380"
		height="300"
		class="mx-auto pa-2 text-center"
		tile
		dark
		outlined
		hover
		@click="dialog = true"
	>
		<v-img :src="item.thumbnail"></v-img>
		<v-chip class="mt-5">{{ item.date }}</v-chip>
		<v-card-title class="justify-center">{{ item.name }}</v-card-title>

		<v-dialog v-model="dialog" max-width="900" dark transition="fab-transition">
			<v-card>
				<v-card-title class="text-h5">
					{{ item.name }}
				</v-card-title>
				<v-carousel v-model="model">
					<v-carousel-item v-for="(img, i) in item.imgs" :key="i">
						<v-sheet height="100%" tile>
							<v-img :src="img" contain></v-img>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>

				<v-card-text>
					{{ item.description }}
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-btn color="primary" rounded small @click="goToLink(item.gitlink)">
						Visit GitHub
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="purple" small rounded @click="goToLink(item.link)">
						Visit Page
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="error" small rounded @click="dialog = false">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-card>
</template>

<script>
	export default {
		name: 'project-card-comp',
		props: ['item'],
		data: function () {
			return {
				model: 0,
				dialog: false,
			};
		},
		// computed: {},
		methods: {
			goToLink(link) {
				window.open(link);
			},
			// showDialog() {
			// 	this.dialog = true;
			// },
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
