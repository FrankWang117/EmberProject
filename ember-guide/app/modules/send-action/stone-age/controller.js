import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		playPause() {
			console.log('in route ');
		},
		nestPlay(id) {
			console.log(id);
			console.log('in controller nest component');
		}
	}
});
