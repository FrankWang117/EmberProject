import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		noParams() {
			console.log('no Params in controller');
		},
		hasParams(id) {
			this.set('btnid', id);
			console.log(`When you have the params from component,you can do whatever you want.example ,this id ${id} is from send-action-in-component `);
			// return id;
		}
	}
});
