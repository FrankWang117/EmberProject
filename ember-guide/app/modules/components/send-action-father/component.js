import Component from '@ember/component';

export default Component.extend({
	tagName: 'section',
	actions: {
		hasParams(id) {
			console.log('in father component');
			this.get('hasParams')(id);
		}
	}
});
