window.onload = function()
{
        LoadBdfComment();
//        alert("载入意见完成！");
}

        function LoadBdfComment(){
            $.ajax({
                url: "queryBdfComment",
                async: false,
                cache: false,
                type: "get",
                dataType: "json",
                success: function (data) {
//                    清除旧的数据
//                    $("#BdInfo").html("");
//                     增加新的数据

                    $.each(data,function(i,n){

                             		     var html="";
                             		     html +='  <li class="blog_comment_user"> ';
                             		     html +='<div class="commenter_div">';

                             		     html +='<div class="commenter">';

                             		     if("LXZ"==(n.name).toUpperCase()||n.name=="刘小珍")
                             		        html +='<img alt="admin" src="images/category/pig3.jpg" class="avatar">';
                             		     else
                             		     if("LYJ"==(n.name).toUpperCase()||n.name=="刘玉洁")
                                            html +='<img alt="admin" src="images/category/pig2.jpg" class="avatar">';
                             		     else
                             		     if("ZSQ"==(n.name).toUpperCase()||n.name=="周思琪")
                                             html +='<img alt="admin" src="images/category/pig4.jpg" class="avatar">';
                             		     else
                             		     if("WCY"==(n.name).toUpperCase()||n.name=="王成宇")
                                             html +='<img alt="admin" src="images/author.jpg" class="avatar">';
                             		     else
                             		     if("CY"==(n.name).toUpperCase()||n.name=="成瑶")
                                             html +='<img alt="admin" src="images/cyAuther_爱奇艺.jpg" class="avatar">';
                             		     else
                             		         html +='<img alt="admin" src="images/category/匿名.jpg" class="avatar">';
                             		     html +='</div>';


                                         html +='<div class="comment_block">';
                             		     html +='<h4>'+n.name+' <span class="reply"><a  class="reply" >Reply <i class="ion-chevron-right"></i><i class="ion-chevron-right"></i></a></span></h4>';
                             		     html +='<p>'+n.comment+'</p>';
                             		     html +='<h6>'+n.time+'</h6>';
                             		     html +='</div>';

                             		     html +='</div>';
                             		     html +='</li><!-- #comment-## -->';

                             		    $('#BdInfo').append(html);
//
                             		    $('#BdInfo').show();

                      })

                     }
                   })

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








