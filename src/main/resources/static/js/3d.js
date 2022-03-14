'use strict';

window.onload = function () {
	var KEYMAP = {
		 '1.一起去爬山⛰': 8,
		        '2.一起散步🚶': 9,
		        '3.-起旅行🛫': 13,
		        '4.一起蹦极☁️': 16,
		        '5.一起看海👀': 17,
		        '6.一起游泳🏊🏻': 18,
		        '7.一起跨年⭐': 20,
		        '8.一起拍照📸': 32,
		        '9.一起滑冰⛸': 33,
		        '10.一起滑雪🏂': 34,
		        '11.一起买菜🥬': 35,
		        '12.一起下厨🔪': 36,
		        '13.一起洗碗🥣': 37,
		        '14.一起划船🚣🏼': 38,
		        '15.一起唱歌🎤': 39,
		        '16.一起跑步🏃🏻‍': 40,
		        '17.一起喝酒🍺': 45,
		        '18.一起DIY✂️': 46,
		        '19.一起吃西瓜🍉': 48,
		        '20.一起看电影📽️': 49,
		        '21.一起去鬼屋👻': 50,
		        '22.一起淋过雨🌧': 51,
		        '23.一起吹海风🌪️': 52,
		        '24.一起过生日🍰': 53,
		        '25.一起看星星⭐': 54,
		        '26.一起看日出🌅': 55,
		        '27.一起看日落🌇': 56,
		        '28.一起看烟火🎆': 57,
		        '29.一起打游戏🎮': 65,
		        '30.一起放风筝🪁': 66,
		        '31.一起逛超市🛒': 67,
		        '32.一起敷面膜🎭': 68,
		        '33.一起坐缆车🚡': 69,
		        '34.一起堆雪人☃️': 70,
		        '35.一起打扑克🃏': 71,
		        '36.一起吃火锅🍲': 72,
		        '37.一起吃宵夜🍚': 73,
		        '38.一起睡懒觉💤': 74,
		        '39.一起打羽毛球🏸': 75,
		        '40.一起坐过山车🎢': 76,
		        '41.一起坐摩天轮🎡': 77,
		        '42.一起去迪士尼🏰': 78,
		        '43.一起穿情侣装💑': 79,
		        '44.一起放孔明灯🏮': 80,
		        '45.一起看演唱会🏟️': 81,
		        '46.一起去游乐场🎠': 82,
		        '47.一起去动物园🐅': 83,
		        '48.一起吃路边摊🍡': 84,
		        '49.一起看恐怖片😱': 85,
		        '50.一起收拾房间🏘️': 86,
		        '51.一起过情人节💐': 87,
		        '52.一起过圣诞节🌳': 88,
		        '53.一起过儿童节🧒🏻': 89,
		        '54.一起翻童年相册👶🏻': 90,
		        '55.一起庆祝纪念日🎉': 112,
		        '56.一起换情侣头像💑': 113,
		        '57.一起养一只宠物🐱': 114,
		        '58.一起手牵手逛街👭🏻': 115,
		        '59.一起去海底世界🐳': 116,
		        '60.一起用情侣手机壳📱': 117,
		        '61.一起窝在沙发看电视🛋️': 118,
		        '62.一起发朋友圈秀恩爱🌈': 119,
		        '63.一起努力完成一件事情💪🏻': 120,
		        '64.一起去做一件疯狂的事🤪': 121,
		        '65.一起拍视频记录生活点滴🥜': 122,
		        '66.一起在对方生病时陪着对方💉': 123,
		        '67.公主抱👸🏻': 124,
		        '68.为对方剥虾🦐': 125,
		        '69.陪对方追剧📺': 126,
		        '70.陪对方看比赛⚡': 186,
		        '71.给对方刮胡子👨🏻': 187,
		        '72.穿对方的衣服👚': 188,
		        '73.送对方束花💐': 189,
		        '74.给对方唱首歌🎶': 190,
		        '75.等对方下班😁': 191,
		        '76.互送一封信✉️': 219,
		        '77.帮彼此吹头发👩🏻': 220,
		        '78.盖用一床被子🛏️': 221,
		        '79.背大宝贝走一段路🛣️': 222,
				 '80.打一整晚电话☎️':223,
				        '81.靠在你肩膀睡觉💤':224,
				        '82.一个用力的拥抱🤗':225,
				        '83.一次炙热的亲吻💋':226,
				        '84.为你做一次蛋糕🎂':227,
				        '85.互相给对方化妆💄':228,
				        '86.为对方挑选衣服👚':229,
				        '87.吃一次烛光晚餐🕯':231,
				        '88.讲故事哄我入睡💤':232,
				        '89.去彼此母校走一走🏫':233,
				        '90.为对方做一次早饭🍚':234,
				        '91.介绍给彼此的朋友🙋':245,
				        '92.用同一副耳机听歌🎧':246,
				        '93.为对方制造小惊喜🌈':247,
				        '94.坐在你的单车后座抱着你🚴':248,
				        '95.一起吃遍肯德基所有新品🍔':249,
				        '96.见过彼此父母🏠':250,
				        '97.一套属于我们的房子🔑':253,
				        '98.一起买家居用品装饰小窝💰':262,
				        '99.领证❤️':264,
				        '100.婚礼💒':238
	},
	    key_els = {};

	var rand = function rand() {
		var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		var gen = min + (max - min) * Math.random();
		return _int ? Math.round(gen) : gen;
	};

	(function init() {
		var a3d = document.querySelector('.a3d'),
		    f = document.createDocumentFragment(),
		    lims = [33, 41, 47, 58, 91, 127, 246],
		    len = lims.length,
		    unit = 360 / (len + 1);

		for (var p in KEYMAP) {
			var rot = document.createElement('div'),
			    key = document.createElement('div');

			key.dataset.name = p.replace('NUM_', '');
			key.dataset.code = KEYMAP[p];
			key.classList.add('key');

			for (var i = 0; i < len; i++) {
				if (KEYMAP[p] < lims[i]) {
					var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
					key.style.color = 'hsl(' + hue + ',100%,75%)';
					break;
				}
			}

			rot.classList.add('rot');

			key_els[p] = key;
			rot.appendChild(key);
			f.appendChild(rot);
		}

		a3d.appendChild(f);
	})();

	addEventListener('keydown', function (e) {
		e.preventDefault();

		for (var p in KEYMAP) {
			if (e.keyCode === KEYMAP[p]) {
				if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
				return;
			}
		}
	}, false);

	addEventListener('keyup', function (e) {
		e.preventDefault();
	}, false);

	addEventListener('animationend', function (e) {
		var t = e.target;
		if (e.animationName === 'hl') t.classList.remove('vis');
	}, false);
};