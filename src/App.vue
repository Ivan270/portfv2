<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: 'App',

		data: () => ({
			//
		}),
	};
</script>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@300&display=swap');
	body {
		font-family: 'Lora', serif;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
	@keyframes color-change {
		0% {
			color: black;
		}
		50% {
			color: #f57f17;
		}
		100% {
			color: black;
		}
	}
	@keyframes color-change-dark {
		0% {
			color: white;
		}
		50% {
			color: #f57f17;
		}
		100% {
			color: white;
		}
	}
	.title-span {
		animation: color-change 4s 6 ease-in-out;
	}
	.title-span-dark {
		animation: color-change-dark 6s 10 ease-in-out;
	}
</style>
