import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.findAll('ershoufang');
		// return [
		// 	{
		// 		img: "https://image1.ljcdn.com/110000-inspection/test-5cca6d6b-1419-46aa-9938-b03dcb90602b.jpeg.296x216.jpg",
		// 		title: "南北通透两居室 2010年建成 板楼有电梯",
		// 		address: "鸿业兴园二区",
		// 		houseInfo: ["鸿业兴园二区 ", "2室1厅", "88.14平米", "南 北", "简装"],
		// 		positionInfo: ["高楼层(共18层)", "2009年建板塔结合", "玉泉营"],
		// 		followInfo: ["1135人关注", "33次带看"],
		// 		tag: ["房本满五年", "随时看房"],
		// 		totalPrice: 460,
		// 		perPrice: 52190
		// 	},
		// 	{
		// 		img: "https://image1.ljcdn.com/110000-inspection/test-dabcf77d-5c2c-4601-b528-e557a12deff9.jpeg.296x216.jpg",
		// 		title: "靠近地铁8号线，小区中间位置，中间楼层，已经满五年",
		// 		address: "和谐家园一区 ",
		// 		houseInfo: ["和谐家园一区  ", "3室2厅", "124.08平米", "南 北", "简装", "无电梯"],
		// 		positionInfo: ["低楼层(共6层)", "2006年建板楼", "回龙观"],
		// 		followInfo: ["1630人关注", "42次带看"],
		// 		tag: ["近地铁", "房本满五年", "随时看房"],
		// 		totalPrice: 540,
		// 		perPrice: 43521
		// 	}
		// ];
	},
	actions: {
		increaseTP(id) {
			console.log('-----------');
			console.log(id);
		}
	}
});