window.onload = function()
{
        LoadAdvice();
//        alert("载入意见完成！");
}

        function LoadAdvice(){
            $.ajax({
                url: "queryAdvice",
                async: false,
                cache: false,
                type: "get",
                dataType: "json",
                success: function (data) {
//                    清除旧的数据
//                    $("#info").html("");
//                     增加新的数据


                    $.each(data,function(i,n){

                             		     var html="";
                             		     html +='  <article class="">';

                             		     html +='<div class="post_content">';


                             		     html +='<div class="post_header">';
                                           html +='<div class="author"><a href="#"><i class="ion-android-create"></i></a></div>';
                             		       html +='<h2 class="post_title">';
                                             if(i== 0)
                                                  html +='<a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'"'+n.advice+'"'+':         --- recent opinion'+'</a> ';
                                             else
                                                  html +='<a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'"'+n.advice+'"'+'</a> ';
                             		       html +='</h2>';
                             		     html +='</div>';

                             		     html +='</div>';
                             		     html +='</article>';

                             		    $('#info').append(html);
//                             		    $("#info").listview(“refresh”); //在使用’ul’标签时才使用，作用:刷新列表
//                                        $("#info").trigger(“create”); //重新加载所在标签的样式。不加这一句动态append的标签将丢失Css样式
//                                        $.parser.parse("#info");
                             		    $('#info').show();


                      })

                     }
                   })

                 }
           function getJsonLength(json){
                var jsonLength=0;
                for (var i in json) {
                    jsonLength++;
                }
                return jsonLength;
            }

$(window).on("unload", function(e) {
     var top=$(window).scrollTop();
     $.cookie("scroll_top",top);
 });

 $(document).ready(function(){
     var top=$.cookie("scroll_top");

     $('html,body').animate({
         scrollTop:top
         },100);
 });
































