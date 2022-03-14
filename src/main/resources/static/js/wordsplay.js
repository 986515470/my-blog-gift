 $(function(){
			function xmTanUploadImg(obj) {
                var file = obj.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = '<img src='+ e.target.result +'>';
                    srcword = e.target.result;
					img = '<div class="item">'+img+'<i class="iconfont icon-guanbi1"></i></div>';
					$('#lee').html(img);
                }
               reader.readAsDataURL(file);
            }
			//上传文件
			$('.sftg-yourinfo').on('change','.sftglong-input a input',function(event){
				event.stopPropagation();
				event.preventDefault();
				var val = $(this).val();
				var dataval=[];
				val = val.split('\\')[2];
				$(this).parent().parent().find('span').html(val);
				$('#lee').css({'height':'180px','margin-top':'36px'});
			    xmTanUploadImg(this);
			    console.log('aaa');
			    setTimeout(add,500);
			});
			//绘制词云
			function add(){
				var myChart = echarts.init(document.getElementById('main'));
				var presents = [
		  '一起去爬山⛰️',
		 		    '一起散步🚶‍',
		 		    '一起旅行🛫',
		 		    '一起蹦极☁',
		 		    '一起看海👀',
		 		    '一起游泳🏊🏻',
		 		    '一起跨年⭐',
		 		    '一起拍照📸',
		 		    '一起滑冰⛸',
		 		    '一起滑雪🏂',
		 		    '一起买菜🥬',
		 		    '一起下厨🔪',
		 		    '一起洗碗🥣',
		 		    '一起划船🚣🏼',
		 		    '一起唱歌🎤',
		 		    '一起跑步🏃🏻‍',
		 		    '一起喝酒🍺',
		 		    '一起DIY✂',
		 		    '一起吃西瓜🍉',
		 		    '一起看电影📽️',
		 		    '一起去鬼屋👻',
		 		    '一起淋过雨🌧',
		 		    '一起吹海风🌪️',
		 		    '一起过生日🍰',
		 		    '一起看星星⭐',
		 		    '一起看日出🌅',
		 		    '一起看日落🌇',
		 		    '一起看烟火🎆',
		 		    '一起打游戏🎮',
		 		    '一起放风筝🪁',
		 		    '一起逛超市🛒',
		 		    '一起敷面膜🎭',
		 		    '一起坐缆车🚡',
		 		    '一起堆雪人☃',
		 		    '一起打扑克🃏',
		 		    '一起吃火锅🍲',
		 		    '一起吃宵夜🍚',
		 		    '一起睡懒觉💤',
		 		    '一起打羽毛球🏸',
		 		    '一起坐过山车🎢',
		 		    '一起坐摩天轮🎡',
		 		    '一起去迪士尼🏰',
		 		    '一起穿情侣装💑',
		 		    '一起放孔明灯🏮',
		 		    '一起看演唱会🏟️',
		 		    '一起去游乐场🎠',
		 		    '一起去动物园🐅',
		 		    '一起吃路边摊🍡',
		 		    '一起看恐怖片😱',
		 		    '一起收拾房间🏘️',
		 		    '一起过情人节💐',
		 		    '一起过圣诞节🌳',
		 		    '一起过儿童节🧒🏻',
		 		    '一起翻童年相册👶🏻',
		 		    '一起庆祝纪念日🎉',
		 		    '一起换情侣头像💑',
		 		    '一起养一只宠物🐱',
		 		    '一起手牵手逛街👭🏻',
		 		    '一起去海底世界🐳',
		 		    '一起用情侣手机壳📱',
		 		    '一起窝在沙发看电视🛋️',
		 		    '一起发朋友圈秀恩爱🌈',
		 		    '一起努力完成一件事情💪🏻',
		 		    '一起去做一件疯狂的事🤪',
		 		    '一起拍视频记录生活点滴🥜',
		 		    '一起在对方生病时陪着对方💉',
		 		    '公主抱👸🏻',
		 		    '为对方剥虾🦐',
		 		    '陪对方追剧📺',
		 		    '陪对方看比赛⚡',
		 		    '给对方刮胡子👨🏻',
		 		    '穿对方的衣服👚',
		 		    '送对方束花💐',
		 		    '给对方唱首歌🎶',
		 		    '等对方下班😁',
		 		    '互送一封信✉',
		 		    '帮彼此吹头发👩🏻',
		 		    '盖用一床被子🛏️',
		 		    '背大宝贝走一段路🛣️',
		 		    '打一整晚电话☎',
		 		    '靠在你肩膀睡觉💤',
		 		    '一个用力的拥抱🤗',
		 		    '一次炙热的亲吻💋',
		 		    '为你做一次蛋糕🎂',
		 		    '互相给对方化妆💄',
		 		    '为对方挑选衣服👚',
		 		    '吃一次烛光晚餐🕯',
		 		    '讲故事哄我入睡💤',
		 		    '去彼此母校走一走🏫',
		 		    '为对方做一次早饭🍚',
		 		    '介绍给彼此的朋友🙋',
		 		    '用同一副耳机听歌🎧',
		 		    '为对方制造小惊喜🌈',
		 		    '坐在你的单车后座抱着你🚴',
		 		    '一起吃遍肯德基所有新品🍔',
		 		    '见过彼此父母🏠',
		 		    '一套属于我们的房子🔑',
		 		    '一起买家居用品装饰小窝💰',
		 		    '领证❤',
		 		    '婚礼💒',
		   '一起去爬山⛰️',
		  		    '一起散步🚶‍',
		  		    '一起旅行🛫',
		  		    '一起蹦极☁',
		  		    '一起看海👀',
		  		    '一起游泳🏊🏻',
		  		    '一起跨年⭐',
		  		    '一起拍照📸',
		  		    '一起滑冰⛸',
		  		    '一起滑雪🏂',
		  		    '一起买菜🥬',
		  		    '一起下厨🔪',
		  		    '一起洗碗🥣',
		  		    '一起划船🚣🏼',
		  		    '一起唱歌🎤',
		  		    '一起跑步🏃🏻‍',
		  		    '一起喝酒🍺',
		  		    '一起DIY✂',
		  		    '一起吃西瓜🍉',
		  		    '一起看电影📽️',
		  		    '一起去鬼屋👻',
		  		    '一起淋过雨🌧',
		  		    '一起吹海风🌪️',
		  		    '一起过生日🍰',
		  		    '一起看星星⭐',
		  		    '一起看日出🌅',
		  		    '一起看日落🌇',
		  		    '一起看烟火🎆',
		  		    '一起打游戏🎮',
		  		    '一起放风筝🪁',
		  		    '一起逛超市🛒',
		  		    '一起敷面膜🎭',
		  		    '一起坐缆车🚡',
		  		    '一起堆雪人☃',
		  		    '一起打扑克🃏',
		  		    '一起吃火锅🍲',
		  		    '一起吃宵夜🍚',
		  		    '一起睡懒觉💤',
		  		    '一起打羽毛球🏸',
		  		    '一起坐过山车🎢',
		  		    '一起坐摩天轮🎡',
		  		    '一起去迪士尼🏰',
		  		    '一起穿情侣装💑',
		  		    '一起放孔明灯🏮',
		  		    '一起看演唱会🏟️',
		  		    '一起去游乐场🎠',
		  		    '一起去动物园🐅',
		  		    '一起吃路边摊🍡',
		  		    '一起看恐怖片😱',
		  		    '一起收拾房间🏘️',
		  		    '一起过情人节💐',
		  		    '一起过圣诞节🌳',
		  		    '一起过儿童节🧒🏻',
		  		    '一起翻童年相册👶🏻',
		  		    '一起庆祝纪念日🎉',
		  		    '一起换情侣头像💑',
		  		    '一起养一只宠物🐱',
		  		    '一起手牵手逛街👭🏻',
		  		    '一起去海底世界🐳',
		  		    '一起用情侣手机壳📱',
		  		    '一起窝在沙发看电视🛋️',
		  		    '一起发朋友圈秀恩爱🌈',
		  		    '一起努力完成一件事情💪🏻',
		  		    '一起去做一件疯狂的事🤪',
		  		    '一起拍视频记录生活点滴🥜',
		  		    '一起在对方生病时陪着对方💉',
		  		    '公主抱👸🏻',
		  		    '为对方剥虾🦐',
		  		    '陪对方追剧📺',
		  		    '陪对方看比赛⚡',
		  		    '给对方刮胡子👨🏻',
		  		    '穿对方的衣服👚',
		  		    '送对方束花💐',
		  		    '给对方唱首歌🎶',
		  		    '等对方下班😁',
		  		    '互送一封信✉',
		  		    '帮彼此吹头发👩🏻',
		  		    '盖用一床被子🛏️',
		  		    '背大宝贝走一段路🛣️',
		  		    '打一整晚电话☎',
		  		    '靠在你肩膀睡觉💤',
		  		    '一个用力的拥抱🤗',
		  		    '一次炙热的亲吻💋',
		  		    '为你做一次蛋糕🎂',
		  		    '互相给对方化妆💄',
		  		    '为对方挑选衣服👚',
		  		    '吃一次烛光晚餐🕯',
		  		    '讲故事哄我入睡💤',
		  		    '去彼此母校走一走🏫',
		  		    '为对方做一次早饭🍚',
		  		    '介绍给彼此的朋友🙋',
		  		    '用同一副耳机听歌🎧',
		  		    '为对方制造小惊喜🌈',
		  		    '坐在你的单车后座抱着你🚴',
		  		    '一起吃遍肯德基所有新品🍔',
		  		    '见过彼此父母🏠',
		  		    '一套属于我们的房子🔑',
		  		    '一起买家居用品装饰小窝💰',
		  		    '领证❤',
		  		    '婚礼💒',
					 '一起去爬山⛰️',
							    '一起散步🚶‍',
							    '一起旅行🛫',
							    '一起蹦极☁',
							    '一起看海👀',
							    '一起游泳🏊🏻',
							    '一起跨年⭐',
							    '一起拍照📸',
							    '一起滑冰⛸',
							    '一起滑雪🏂',
							    '一起买菜🥬',
							    '一起下厨🔪',
							    '一起洗碗🥣',
							    '一起划船🚣🏼',
							    '一起唱歌🎤',
							    '一起跑步🏃🏻‍',
							    '一起喝酒🍺',
							    '一起DIY✂',
							    '一起吃西瓜🍉',
							    '一起看电影📽️',
							    '一起去鬼屋👻',
							    '一起淋过雨🌧',
							    '一起吹海风🌪️',
							    '一起过生日🍰',
							    '一起看星星⭐',
							    '一起看日出🌅',
							    '一起看日落🌇',
							    '一起看烟火🎆',
							    '一起打游戏🎮',
							    '一起放风筝🪁',
							    '一起逛超市🛒',
							    '一起敷面膜🎭',
							    '一起坐缆车🚡',
							    '一起堆雪人☃',
							    '一起打扑克🃏',
							    '一起吃火锅🍲',
							    '一起吃宵夜🍚',
							    '一起睡懒觉💤',
							    '一起打羽毛球🏸',
							    '一起坐过山车🎢',
							    '一起坐摩天轮🎡',
							    '一起去迪士尼🏰',
							    '一起穿情侣装💑',
							    '一起放孔明灯🏮',
							    '一起看演唱会🏟️',
							    '一起去游乐场🎠',
							    '一起去动物园🐅',
							    '一起吃路边摊🍡',
							    '一起看恐怖片😱',
							    '一起收拾房间🏘️',
							    '一起过情人节💐',
							    '一起过圣诞节🌳',
							    '一起过儿童节🧒🏻',
							    '一起翻童年相册👶🏻',
							    '一起庆祝纪念日🎉',
							    '一起换情侣头像💑',
							    '一起养一只宠物🐱',
							    '一起手牵手逛街👭🏻',
							    '一起去海底世界🐳',
							    '一起用情侣手机壳📱',
							    '一起窝在沙发看电视🛋️',
							    '一起发朋友圈秀恩爱🌈',
							    '一起努力完成一件事情💪🏻',
							    '一起去做一件疯狂的事🤪',
							    '一起拍视频记录生活点滴🥜',
							    '一起在对方生病时陪着对方💉',
							    '公主抱👸🏻',
							    '为对方剥虾🦐',
							    '陪对方追剧📺',
							    '陪对方看比赛⚡',
							    '给对方刮胡子👨🏻',
							    '穿对方的衣服👚',
							    '送对方束花💐',
							    '给对方唱首歌🎶',
							    '等对方下班😁',
							    '互送一封信✉',
							    '帮彼此吹头发👩🏻',
							    '盖用一床被子🛏️',
							    '背大宝贝走一段路🛣️',
							    '打一整晚电话☎',
							    '靠在你肩膀睡觉💤',
							    '一个用力的拥抱🤗',
							    '一次炙热的亲吻💋',
							    '为你做一次蛋糕🎂',
							    '互相给对方化妆💄',
							    '为对方挑选衣服👚',
							    '吃一次烛光晚餐🕯',
							    '讲故事哄我入睡💤',
							    '去彼此母校走一走🏫',
							    '为对方做一次早饭🍚',
							    '介绍给彼此的朋友🙋',
							    '用同一副耳机听歌🎧',
							    '为对方制造小惊喜🌈',
							    '坐在你的单车后座抱着你🚴',
							    '一起吃遍肯德基所有新品🍔',
							    '见过彼此父母🏠',
							    '一套属于我们的房子🔑',
							    '一起买家居用品装饰小窝💰',
							    '领证❤',
							    '婚礼💒'

		]
				var chooseurl = $('#lee').find('img').attr('src');
	   			var data = [];
				 for (var i = 0; i < presents.length; ++i) {
				     data.push({
				         name: presents[i],
				         value: (presents.length - i) * 2
				     });
				 }
				 for (var i = 10; i < presents.length; ++i) {
				     var cnt = Math.floor(Math.random() * 10);
				     for (var j = 0; j < cnt; ++j) {
				         data.push({
				             name: presents[i],
				             value: Math.random() * 100
				         });
				     }
				 }
					 var maskImage = new Image();
					 maskImage.onload = function() {
					     myChart.setOption({
					         tooltip: {
					             show: false
					         },
					         series: [{
					             type: 'wordCloud',
					             gridSize: 1,
					             sizeRange: [6, 20],
					             rotationRange: [0, 180],
					             rotationStep: 90,
//					             shape:'trapezoidal',
 								 maskImage: maskImage,
					             textStyle: {
					                 normal: {
					                     color: function(v) {
					                         if (v.value > 190) {
					                             return 'rgb(110, 206, 7)';
					                         } else if (v.value > 160) {
					                             return 'rgb(7, 49, 206)';
					                         } else if (v.value > 130) {
					                             return 'rgb(105, 7, 206)';
					                         } else if (v.value > 110) {
					                             return 'rgb(185, 45, 225)';
					                         } else if (v.value > 90) {
					                             return 'rgb(247, 65, 193)';
					                         } else if (v.value > 60) {
					                             return 'rgb(223, 31, 126)';
					                         } else if (v.value > 40) {
					                             return 'rgb(66, 152, 177)';
					                         } else if (v.value > 20) {
					                             return 'rgb(229, 208, 66)';
					                         } else if (v.value > 10) {
					                             return 'rgb(189, 117, 82)';
					                         } else {
					                             return 'rgb(20, 186, 167)';
					                         }
					                     }
					                 },
					             },
					             width: 500,
					             top: 40,
					             data: data
					         }]
					     });
					 };
					 maskImage.src = chooseurl;
			}
			var myChart = echarts.init(document.getElementById('main'));
			myChart.on('click', function (params) {
			    	$('#choose').show();
			    	$('#choose').html(params.name);
			});
			$('#choose').on('click',function(){
				$('#choose').hide();
			});
		});