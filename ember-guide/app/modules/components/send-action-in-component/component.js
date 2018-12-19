import Component from '@ember/component';

export default Component.extend({
	actions: {
		hasParams(id) {
			console.log(`in child component ${id}`);
			this.get('hasParams')(id);
		}
	}

});
