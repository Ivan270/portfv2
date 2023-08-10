<template>
	<v-sheet height="100vh" class="d-flex align-center">
		<v-container>
			<v-row align="center">
				<v-col cols="12">
					<h3 class="ps-1 pb-5 subtitle-1">Let's get in touch</h3>
					<a
						href="mailto:ivan270@gmail.com"
						class="text-h5 text-md-h3 text-lg-h1 text-decoration-none grey--text text--darken-4 text-start font-weight-black text-lowercase breaker"
					>
						ivan270@gmail.com
					</a>
				</v-col>
				<v-col>
					<a
						href="https://github.com/Ivan270"
						target="_blank"
						class="pe-5 text-decoration-none grey--text text--darken-4"
						>Github</a
					>
					<a
						href="https://www.linkedin.com/in/ivan-verdugo-c"
						target="_blank"
						class="text-decoration-none grey--text text--darken-4"
						>LinkedIn</a
					>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
	export default {
		name: 'contact-comp',
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

<style scoped>
	.breaker {
		word-wrap: break-word;
	}
</style>
