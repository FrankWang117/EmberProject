import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	// change: service(),
	mut: service('change'),
	text: 'button',
	actions: {
		changeText(text) {
			// let newText = this.get('mut').changed(text);
			return text;
		}
	}

});