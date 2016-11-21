(function() {
	Vue.component('pagination', {
		template: `
			<div class="pagination-component">
				<p>
					Viewing results {{ page * maxResults - 100 }} - {{ page * maxResults }} of {{ total }}
				</p>
				<nav>
					<ul class="pager">
						<li v-bind:class="{ disabled: page === 1 }">
							<a v-on:click="first">
								<< first
							</a>
						</li>
						<li v-bind:class="{ disabled: page === 1 }">
							<a v-on:click="prev">
								< previous
							</a>
						</li>
						<li><input type="text" v-model.number="page" class="form-control" maxlength="4" disabled/></li>
						<li v-bind:class="{ disabled: page * maxResults === total }">
							<a v-on:click="next">
								next >
							</a>
						</li>
						<li v-bind:class="{ disabled: page * maxResults === total }">
							<a v-on:click="last">
								last >>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		`,
		props: ['page', 'total', 'maxResults'],
		filters: {

		},
		methods: {
			prev: function() {
				this.$emit('results-previous');
			},
			next: function() {
				this.$emit('results-next');
			},
			first: function() {
				this.$emit('results-first');
			},
			last: function() {
				this.$emit('results-last');
			}
		}
	})
}());