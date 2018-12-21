import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		playPause() {
			console.log('in route ');
		},
		nestPlay(id) {
			console.info(id);
			console.info('in controller nest component');
		}
	}
});
