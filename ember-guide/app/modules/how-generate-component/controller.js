import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
	house: alias('model'),
	actions: {
		increaseTotalPrice(id) {
			console.log('in controller');
			// let ershoufang = this.store.peekRecord('ershoufang', id),
			// 	newTP = ershoufang.incrementProperty('totalprice'),
			// 	dirtyAttributes = ershoufang.get('hasDirtyAttributes'),
			// 	changedAttributes = ershoufang.changedAttributes(),
			// 	objectAttributes = {
			// 		newTP: newTP,
			// 		dirtyAttributes: dirtyAttributes,
			// 		changedAttributes: changedAttributes
			// 	};

			// this.set('objectAttributes', objectAttributes);
		},
		deleteRecord() {
			let ershoufang1 = this.store.peekRecord('ershoufang', 'ershoufang01');

			// isDeleted = '';
			/**
			 * Record.deleteRecord();
			 */

			ershoufang1.deleteRecord();
			// isDeleted = ershoufang1.get('isDeleted');
			ershoufang1.save();

		}
	}
});