import Component from '@ember/component';

export default Component.extend({
	actions: {
		hasParams(id) {
			console.log(`in child component ${id}`);
			this.get('hasParams')(id);
		}
		// actionBulling() {
		// 	console.log('in child component action bulling');
		// 	return true;
		// }
		// bubble() {
		// 	console.log('inside btn ');
		// }
	}

});
