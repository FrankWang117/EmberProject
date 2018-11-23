import Route from "@ember/routing/route";
import EmberOjbect from "@ember/object";
export default Route.extend({
	model() {
		let model = EmberOjbect.create({
			navigations: [
				{ route: "component-guide.index", name: "前言" },
				{ route: "component-guide.generate", name: "创建" }
			]
		});

		return model;
	}
});
