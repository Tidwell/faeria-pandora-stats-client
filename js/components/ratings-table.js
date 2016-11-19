(function() {
	const template = `
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Points</th>
					<th>Level</th>
					<th>Datapoint time</th>
				</tr>
			</thead>
			<tbody>
				<rating v-for="rating in ratings" v-bind:rating="rating"></rating>
			</tbody>
		</table>
	`;

	Vue.component('rating-table', {
		template: template,
		props: ['ratings']
	});
}());