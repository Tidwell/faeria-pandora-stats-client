(function() {
	Vue.component('loader', {
		template: '<span v-if="!isLoaded" class="loader"><i class="glyphicon glyphicon-refresh spinning"></i></span>',
		props: ['is-loaded']
	})
}());