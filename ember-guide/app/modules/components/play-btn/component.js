/* eslint-disable one-var */
import Component from '@ember/component';

export default Component.extend({
	tagName: 'button',
	localClassNames: 'play-btn',
	/**
	 * A click event on a button will not bubble up the DOM tree if it has an `onClick` action handler. Set to true to
	 * enable the event to bubble
	 *
	 * @property bubble
	 * @type boolean
	 * @default false
	 * @public
	 */
	bubble: false,
	/**
	 *
	 */
	onClick() { },
	/**
	 * @method click
	 * @private
	 */
	click() {
		let action = this.get('onClick');

		action();
		// 	if (promise && typeof promise.then === 'function' && !this.get('isDestroyed')) {
		// 		this.set('state', 'pending');
		// 		promise.then(() => {
		// 			if (!this.get('isDestroyed')) {
		// 				this.set('state', 'fulfilled');
		// 			}
		// 		}, () => {
		// 			if (!this.get('isDestroyed')) {
		// 				this.set('state', 'rejected');
		// 			}
		// 		}
		// 		);
		// 	}
		// }

		return this.get('bubble');

	}
});
