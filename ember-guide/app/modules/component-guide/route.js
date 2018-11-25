import Route from "@ember/routing/route";
import EmberOjbect from "@ember/object";
export default Route.extend({
	model() {
		let model = EmberOjbect.create({
			navigations: [
				{ route: "component-guide.index", name: "前言" },
				{ route: "component-guide.generate", name: "创建" },
				{ route: "component-guide.lifecycle", name: "生命周期" },
				{ route: "component-guide.passing-properties", name: "数据传递" },
				{ route: "component-guide.customizing", name: "自定义组件" },
				{ route: "component-guide.handing-events", name: "事件处理" },
				{ route: "component-guide.split", name: "拆分组件" },
				{ route: "component-guide.other", name: "其它" }


			]
		});

		return model;
	}
});
