 var map = new BMap.Map("container");
	var point = new BMap.Point(115.866214,30.136402);// 创建地图实例     // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point,10);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    $(function(){
        getNowPos();
		// getLocal("province="+provinceName);

		// //省市下拉框查找网点
  //       $("#province").change(function(){
  //           var provinceName=$(this).val();
  //           $("#location-name").html("【"+provinceName+"】");
  //           getLocal("province="+provinceName);
  //       })

      // //根据门店的名称查找网点
      //  $("span.search-icon").click(function(){
      //       var content=$("#search_box_input").val();
      //       if(content==""){
      //           alert("请输入线下销售网点的信息");
      //           return false;
      //       }
      //       getLocal("content="+content);
      //   })
    });

    //搜索框按键查询
    $(document).keyup(function (e) {//捕获文档对象的按键弹起事件
        if (e.keyCode == 13) {//按键信息对象以参数的形式传递进来了
            //此处编写用户敲回车后的代码
            $("span.search-icon").click();
        }
    });


    function getNowPos(){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);//标出所在地
                map.panTo(r.point);//地图中心移动
                var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                var gc = new BMap.Geocoder();
                gc.getLocation(point, function(rs){
                    var addComp = rs.addressComponents;
                    $("#location-name").html("【"+addComp['province']+"】");
                    $("#province option[value='"+addComp['province']+"']").attr("selected", true);
                    getLocal("province="+addComp['province']);
                });
            }else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }

    var marker;
    function getLocal(urlData){
        //Ajax.call('/Marketing2.php?act=getlocal',urlData,returnToCartResponse,'POST', 'TEXT', true, true);
        //function  returnToCartResponse(result){
		    result=[
			{"id":"515","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u6c5f\u897f\u7406\u5de5\u5927\u5b66","shopaddr":"\u6c5f\u897f\u7701\u8d63\u5dde\u5e02\u7ae0\u8d21\u533a\u5357\u5916\u8857\u9053\u6c5f\u897f\u7406\u5de5\u5927\u5b66","location":"114.936671,25.859943"}
			,{"id":"516","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u6c5f\u897f\u4e2d\u533b\u836f\u9ad8\u7b49\u4e13\u79d1\u5b66\u6821","shopaddr":"\u6c5f\u897f\u7701\u629a\u5dde\u5e02\u4e34\u5ddd\u533a\u9752\u4e91\u8857\u9053\u8d63\u4e1c\u5927\u9053\u0031\u0031\u0031\u0035\u53f7\u6c5f\u897f\u4e2d\u533b\u836f\u9ad8\u7b49\u4e13\u79d1\u5b66\u6821","location":"116.364405,27.974593"}
			,{"id":"517","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u5b89\u798f\u53bf","shopaddr":"\u6c5f\u897f\u7701\u5409\u5b89\u5e02\u5b89\u798f\u53bf","location":"114.613219,27.38257"}
			,{"id":"518","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u5171\u9752\u5b66\u9662","shopaddr":"\u5357\u660c\u5927\u5b66\u5171\u9752\u5b66\u9662","location":"115.813664,29.234214"}
			,{"id":"519","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u6c5f\u897f\u5e08\u8303\u5927\u5b66","shopaddr":"\u6c5f\u897f\u5e08\u8303\u5927\u5b66\u0028\u7476\u6e56\u6821\u533a\u0029","location":"116.037792,28.686226"}
			,{"id":"520","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u5357\u660c\u5927\u5b66","shopaddr":"\u5357\u660c\u5927\u5b66\u0028\u524d\u6e56\u6821\u533a\u0029","location":"115.807698,28.662684"}
			// ,{"id":"520","province":"\u6c5f\u897f\u7701","area":"\u5b9c\u660c","shopname":"\u5357\u660c\u5927\u5b66","shopaddr":"\u5357\u660c\u5927\u5b66\u0028\u524d\u6e56\u6821\u533a\u0029","location":"115.807698,28.662684"}
			]


            reg=eval(result);
            if(reg.length<1){
                $("#store-list").children().remove();
                $("#store-list").append("<div style='text-align: center;line-height: 50px;'>暂无搜索的地点</div>");
                return false;
            }
            var storeList="";
            $("#store-num").html(reg.length);
            map.clearOverlays();
            var pointsView = [];
            for(var i=0;i<reg.length;i++){
                var n=i+1;
                var p= reg[i]['location'].split(',');
                var point = new BMap.Point(p[0],p[1]);
                pointsView.push(point);

                var content ="<p style='font-weight:600'>"+reg[i].shopname+"</p><p style='line-height: 20px;'>地址："+reg[i].shopaddr+"</p>";
                var myIcon = new BMap.Icon("../satellite/bd1.png", new BMap.Size(21, 33), {
                    offset: new BMap.Size(10, 25), // 指定定位位置
                });
                var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
                var label = new BMap.Label(n,{
                    offset : new BMap.Size(0,3)
                });
                label.setStyle({
                    width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
                });
                marker.setLabel(label);//显示地理名称 a
                map.addOverlay(marker);
                addClickHandler(content,marker);

                storeList+='<li onclick="to(this,'+i+','+p[0]+','+p[1]+',\''+reg[i].shopname+'\',\''+reg[i].shopaddr+'\')"><span class="location-num">'+n+'</span><div class="location-addr">'
                +'<h3>'+reg[i].shopname+'</h3> <p class="addr-info">'+reg[i].shopaddr+'</p></div>'
                +'</li>';
            }
            //让所有点在视野范围内
            map.setViewport(pointsView);
            $("#store-list").children().remove();
            $("#store-list").append(storeList);
       // }
    }

    var opts = {
        width : 250,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短息
    };


    //点击将信息内容加入白标注中
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
                    marker.setAnimation(null);
                    openInfo(content,e);
                }
        );
    }

    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }

    //移动到某一坐标点
    function to(obj,i,x,y,shopname,shopaddr){
        var allOverlay = map.getOverlays();
        var last=allOverlay.length-1;
        map.removeOverlay(allOverlay[last]);
        $(obj).addClass("addMove");
        $(obj).siblings().removeClass("addMove");
        var point=new BMap.Point(x,y);
        map.centerAndZoom(point,17);
        var myIcon = new BMap.Icon("../satellite/bd2.png", new BMap.Size(21, 33), {
            offset: new BMap.Size(25, 25), // 指定定位位置
        });
        var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
        var n=i+1;
        var label = new BMap.Label(n,{
            offset : new BMap.Size(0,3)
        });
        label.setStyle({
            width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果

		});
        marker.setLabel(label);//显示地理名称 a
        map.addOverlay(marker);
        var content ="<p style='font-weight:600'>"+shopname+"</p><p style='line-height: 20px;'>地址："+shopaddr+"</p>";
        addClickHandler(content,marker);
    }