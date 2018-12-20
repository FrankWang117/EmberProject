import Component from '@ember/component';

export default Component.extend({
	actions: {
		onClick(id) {
			console.log('in play btn component');
			this.sendAction('onClick', id);
		}
	}
});
