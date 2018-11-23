export default function () {
	this.namespace = "/api";
	this.get("/ershoufangs", function () {
		return {
			data: [
				{
					type: "ershoufang",
					id: "ershoufang01",
					attributes: {
						img: "https://image1.ljcdn.com/110000-inspection/514871d9-f37d-40d1-ac3f-7dbcd61844a9.jpg.296x216.jpg",
						title: "南北通透两居室 2010年建成 板楼有电梯",
						address: "鸿业兴园二区",
						houseinfo: ["鸿业兴园二区 ", "2室1厅", "88.14平米", "南 北", "简装"],
						positioninfo: ["高楼层(共18层)", "2009年建板塔结合", "玉泉营"],
						followinfo: ["1135人关注", "33次带看"],
						tag: ["房本满五年", "随时看房"],
						totalprice: 460,
						perprice: 52190
					}
				},
				{
					type: "ershoufang",
					id: "ershoufang02",
					attributes: {
						img: "https://image1.ljcdn.com/x-se/hdic-frame/567ac579-2727-44e8-9cfe-8157431e86f6.png.280x210.jpg",
						title: "靠近地铁8号线，小区中间位置，中间楼层，已经满五年",
						address: "和谐家园一区 ",
						houseinfo: ["和谐家园一区  ", "3室2厅", "124.08平米", "南 北", "简装", "无电梯"],
						positioninfo: ["低楼层(共6层)", "2006年建板楼", "回龙观"],
						followinfo: ["1630人关注", "42次带看"],
						tag: ["近地铁", "房本满五年", "随时看房"],
						totalprice: 540,
						perprice: 43521
					}
				}
			]
		};
	});
}
