import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

// export default Route.extend({
// 	model() {
// 		let model = EmberObject.create({
// 			navigations: [
// 				{
// 					route: 'object-guide.index', name: 'index'
// 				}
// 			]
// 		});

// 		return model;
// 	}
// });
const SelfRoute = Route.extend({
	model() {
		let model = EmberObject.create({
			navigations: [
				{
					route: 'object-guide.index', name: 'index'
				}
			]
		});

		return model;
	}
});

export default SelfRoute;