import Service from '@ember/service';

export default Service.extend({
	changed(text) {
		return text + ' is changed!';
	}
});