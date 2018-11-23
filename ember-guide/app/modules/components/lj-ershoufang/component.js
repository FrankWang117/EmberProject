import Component from "@ember/component";

export default Component.extend({
	localClassNames: "lj-ershoufang",
	classNames: ["ershoufang-list"],
	tagName: "li",

	actions: {
		increaseTotalPrice(id) {
			this.sendAction("increaseTotalPrice", id);
		}
	}
});
