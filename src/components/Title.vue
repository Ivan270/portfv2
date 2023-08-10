<template>
	<v-sheet height="100vh">
		<v-container fill-height fluid no-gutters>
			<v-row justify="space-between" align="center">
				<v-col cols="12" md="7">
					<p
						class="text-h3 text-lg-h1 text-start pb-1 font-weight-black text-capitalize"
					>
						Iván Verdug<span class="title-span">o</span>
					</p>
					<h3 class="text-h6 text-start font-weight-light pt-1">
						Web Developer
					</h3>
				</v-col>

				<v-col cols="3" md="1" class="rounded-pill">
					<v-hover v-slot="{ hover }">
						<v-card
							min-height="20px"
							class="rounded-pill"
							:class="{ 'change-color': hover }"
							:color="greyl"
						></v-card>
					</v-hover>
				</v-col>

				<v-col
					cols="3"
					md="2"
					align-self="end"
					class="grey darken-3 rounded-pill"
				></v-col>
				<v-col
					cols="3"
					md="1"
					align-self="start"
					class="black rounded-pill me-3"
				>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
	export default {
		name: 'title-comp',
		// props: {},
		data: function () {
			return {
				greyl: '#BDBDBD',
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
		background-color: #f57f17 !important;
	}
	.change-color {
		transition: transform 0.6s ease-in-out, background-color 0.6s ease-in-out;
	}
</style>
