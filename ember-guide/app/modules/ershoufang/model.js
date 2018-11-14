import DS from "ember-data";

export default DS.Model.extend({
	img: DS.attr("string"),
	title: DS.attr("string"),
	address: DS.attr("string"),
	houseinfo: DS.attr(),
	positioninfo: DS.attr(),
	followinfo: DS.attr(),
	tag: DS.attr(),
	totalprice: DS.attr("number"),
	perprice: DS.attr("number")
});
