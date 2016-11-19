(function() {
	const template = `
		<tr>
			<td>{{rating.name}}</td>
			<td>{{rating.points}}</td>
			<td>{{rating.level}}</td>
			<td>{{rating.ts | moment}}</td>
		</tr>
	`;

	Vue.component('rating', {
		template: template,
		props: ['rating'],
		filters: {
			moment: function(value) {
				return moment(value).format('llll');
			}
		}
	})
}());