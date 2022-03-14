//初始化地图
var map = new AMap.Map('container', {
  resizeEnable: true, //是否监控地图容器尺寸变化
  zoom: 11, //初始地图级别
});

var geocoder,marker,lnglat;
function regeoCode() {
	if(!geocoder){
		geocoder = new AMap.Geocoder({
			city: "010", //城市设为北京，默认：“全国”
			radius: 1000 //范围，默认：500
		});
	}
	 if(!marker){
		marker = new AMap.Marker();
		map.add(marker);
	}
	marker.setPosition(lnglat);

	geocoder.getAddress(lnglat, function(status, result) {
		if (status === 'complete'&&result.regeocode) {
			var address = result.regeocode.formattedAddress;
			document.getElementById('address').value = address;
		}else{
			log.error('根据经纬度查询地址失败')
		}
	});
}

map.on('click',function(e){
	lnglat = e.lnglat;
	regeoCode();
})
// 获取输入提示信息
function autoInput(){
  var keywords = document.getElementById("input").value;
  AMap.plugin('AMap.Autocomplete', function(){
	// 实例化Autocomplete
	var autoOptions = {
	  city: '全国'
	}
	var autoComplete = new AMap.Autocomplete(autoOptions);
	autoComplete.search(keywords, function(status, result) {
	  // 搜索成功时，result即是对应的匹配数据
	  console.log(result);
	  let tips = result.tips;
	  let tishtml = "";
	  tips.forEach((item)=>{
		tishtml+=`<span lat="${item.location.lat}" lng="${item.location.lng}">${item.name}</span>`
	  })
	  $("#input-info").html(tishtml);
	})
  })
}

autoInput();

document.getElementById("input").oninput = autoInput;
$("#input-info").on("click",'span',function(){
	let lat = $(this).attr("lat");
	let lng = $(this).attr("lng");
	map.panTo([lng, lat]);
	lnglat=[lng, lat];
	regeoCode();
})