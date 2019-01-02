import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		playPause(id) {
			console.log(`playBtn in controller${id}`);
		},
		playPauseContainer() {
			window.alert('ahhh');
		}
	}
});
