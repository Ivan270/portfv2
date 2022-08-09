const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: ['vuetify'],
	css: {
		loaderOptions: {
			// scss: {
			//   // Here we can specify the older indent syntax formatted SASS
			//   // Note that there is *not* a semicolon at the end of the below line
			//   data: `@import "@/assets/scss/_vars.sss"`
			// },
			scss: {
				// Here we can use the newer SCSS flavor of Sass.
				// Note that there *is* a semicolon at the end of the below line
				additionalData: `@import "@/scss/main.scss";`,
			},
		},
	},
});
