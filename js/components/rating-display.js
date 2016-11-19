(function() {
	var query = '&sort=[("ts", -1)]';

	const template = `
		<div>
			<loader v-bind:is-loaded="isLoaded"></loader>
		    <div v-if="isLoaded">
			    <pagination
			    	:page="pagedata.page"
			    	:total="pagedata.total"
			    	:max-results="pagedata.max_results"
				    @results-next="loadNext"
				    @results-previous="loadPrevious"
				    @results-first="loadFirst"
				    @results-last="loadLast">
				</pagination>
				<rating-table v-bind:ratings="ratings"></rating-table>
				<pagination
			    	:page="pagedata.page"
			    	:total="pagedata.total"
			    	:max-results="pagedata.max_results"
				    @results-next="loadNext"
				    @results-previous="loadPrevious"
				    @results-first="loadFirst"
				    @results-last="loadLast">
				</pagination>
			</div>
		</div>
	`;

	Vue.component('rating-display', {
		template: template,
		data: function() {
			return {
				isLoaded: false,
				ratings: [],
				pagedata: {},
				links: {}
			}
		},
		methods: {
			getData: function(url) {
				this.isLoaded = false;
				this.$http.get(this.apiUrl + url + query).then((response) => {
					this.links = response.body._links;
					this.pagedata = response.body._meta;
					this.ratings = response.body._items;
					this.isLoaded = true;
				}, (response) => {
					this.isLoaded = null;
				});
			},
			loadNext: function() {
				this.getData(this.links.next.href);
			},
			loadPrevious: function() {
				this.getData('ratings?page=' + (this.pagedata.page - 1)) ;
			},
			loadFirst: function() {
				this.getData('ratings?');
			},
			loadLast: function() {
				this.getData(this.links.last.href);
			},
		},
		created: function() {
			this.getData('ratings?');
		},
		props: ['apiUrl']
	});
}());