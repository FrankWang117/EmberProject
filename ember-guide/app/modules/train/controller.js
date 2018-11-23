import Controller from "@ember/controller";

export default Controller.extend({
	init() {
		this._super(...arguments);
		this.set("title", "Welcome to use component!");
	}
});
