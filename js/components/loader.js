(function() {
	Vue.component('loader', {
		template: '<span v-if="!isLoaded">Loading</span>',
		props: ['is-loaded']
	})
}());