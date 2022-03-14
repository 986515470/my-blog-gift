
window.onload = function()
{
        LoadQuestion();
//        alert("载入意见完成！");
}

 function LoadQuestion(){
            $.ajax({
                url: "queryQuestion",
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
                             		    html+='<li class="blog_comment_user">';

                             		    html+='<div class="commenter_div">';

                             		    html+='<div class="commenter">';

                                        if("WCY"==n.name||n.name=="王成宇"||n.name=="wcy"||n.name=="Wcy")
                             		        html+='<img alt="img" src="images/author.png" class="avatar">';
                             		     else
                             		     if("CY"==n.name||n.name=="成瑶"||n.name=="cy"||n.name=="Cy")
                             		         html+='<img alt="img" src="images/cyAuther_爱奇艺.jpg" class="avatar">';
                             		     else
                             		         html +='<img alt="admin" src="images/category/匿名.jpg" class="avatar">';
                             		    html+='</div>';

                             		    html+='<div class="comment_block">';
                             		    html+='<h4>'+n.name+' <span class="reply" onclick="reply('+n.id+')"><a class="reply" >Reply <i class="ion-chevron-right"></i><i class="ion-chevron-right"></i></a></span></h4>';
                             		    html+='<p>'+n.question+'</p>';
                             		    html+='<h6>'+n.time+'</h6>';
                             		    html+='</div>';
                                        html+='</div>';
                             		    html+='<div class="contact'+n.id+'" id="clear" data-aos="fade-up" data-aos-duration="900"></div>';
                                        $.ajax({
                                                        url: "queryAnswer",
                                                        async: false,
                                                        cache: false,
                                                        type: "get",
                                                        dataType: "json",
                                                        success: function (data) {
                                                            $.each(data,function(i,k){
                                                                 if(n.id==k.id){
                                                                       html+='<ul class="children">';
                                                                       html+='<li class="blog_comment_user">';
                                                                       html+='<div class="commenter_div">';
                                                                       html+='<div class="commenter">';

                                                                       if("WCY"==k.name||k.name=="王成宇"||k.name=="Wcy"||k.name=="wcy")
                                                                          html+='<img alt="img" src="images/author.png" class="avatar">';
                                                                       else
                                                                       if(k.name=="CY"||k.name=="成瑶"||k.name=="cy"||k.name=="Cy")
                                                                           html+='<img alt="img" src="images/cyAuther_爱奇艺.jpg" class="avatar">';
                                                                       else
                                                                           html +='<img alt="admin" src="images/category/匿名.jpg" class="avatar">';

                                                                       html+='</div>';
                                                                       html+='<div class="comment_block">';
                                                                       html+='<h4>'+k.name+' <span class="reply" onclick="reply1('+n.id+','+k.num+')"><a  class="reply" >Reply <i class="ion-chevron-right"></i><i class="ion-chevron-right"></i></a></span></h4>';
                                                                       html+='<p>'+k.answer+'</p>';
                                                                       html+='<h6>'+k.time+'</h6>';
                                                                       html+='</div>';
                                                                       html+='</div>';
                                                                       html+='</li><!-- #comment-## -->';
                                                                       html+='</ul><!-- .children -->';
                                                                       html+=' <div class="contactAnswer'+k.num+'" data-aos="fade-up" data-aos-duration="900"></div>';
                                                                 }

                                                              })

                                                             }
                                                 })

                             		    html+='</li><!-- #comment-## -->';

                             		    $('#info').append(html);
//                             		    $("#info").listview(“refresh”); //在使用’ul’标签时才使用，作用:刷新列表
//                                        $("#info").trigger(“create”); //重新加载所在标签的样式。不加这一句动态append的标签将丢失Css样式
//                                        $.parser.parse("#info");
                             		    $('#info').show();


                      })

                     }
                   })

                 }

function reply(eee)
 {
           for(let i=0;i<10000;i++){
               $('.contact'+i+'').empty();
                $('.contactAnswer'+i+'').empty();
                }
                 var Ahmad="";
         	    Ahmad +='<div class="contact" data-aos="fade-up" data-aos-duration="900">';
         	    Ahmad +='<form class="contact_form" action="answer" method="post">';
         	    Ahmad +='<div class="row">';
         	     Ahmad +='<div class="col-md-6 col-lg-6"> ';
                 Ahmad +='<div class="form-group"> ';
                  Ahmad +='<input readonly="readonly" name="id" value="'+eee+'" >';
                  Ahmad +='</div> ';
                  Ahmad +='</div> ';
         	    Ahmad +='<div class="col-md-12 col-lg-12" >';
         	    Ahmad +='<div class="form-group"> ';
         	    Ahmad +='<textarea type="text" name="message" class="form-control" placeholder="Your Reply Here*" required></textarea> ';
         	    Ahmad +='</div> ';
         	    Ahmad +='</div> ';
         	    Ahmad +='<div class="col-md-6 col-lg-6"> ';
         	    Ahmad +='<div class="form-group"> ';
         	    Ahmad +='<input type="text" name="name"  placeholder="Name*" required>';
         	    Ahmad +='</div> ';
         		Ahmad +='</div> ';
         		Ahmad +='<div class="col-md-12 col-lg-12"> ';
         		Ahmad +='<div class="form-group"> ';
         		Ahmad +='<input class="button" type="submit" value="Submit" name="submit"> ';
         		Ahmad +='</div> ';
         		Ahmad +='</div> ';
         		Ahmad +='</div> ';
         		Ahmad +='</div> ';
         		Ahmad +='</form> ';

                $('.contact'+eee+'').append(Ahmad);
         	   $('.contact'+eee+'').show();





 }
 function reply1(eee,aaa)
  {
            for(let i=0;i<10000;i++){
                $('.contact'+i+'').empty();
                 $('.contactAnswer'+i+'').empty();
                }
                  var Ahmad="";
          	    Ahmad +='<div class="contact" data-aos="fade-up" data-aos-duration="900">';
          	    Ahmad +='<form class="contact_form" action="answer" method="post">';
          	    Ahmad +='<div class="row">';
          	    Ahmad +='<div class="col-md-6 col-lg-6"> ';
                Ahmad +='<div class="form-group"> ';
                Ahmad +='<input readonly="readonly" name="id" value="'+eee+'" >';
                Ahmad +='</div> ';
                Ahmad +='</div> ';
          	    Ahmad +='<div class="col-md-12 col-lg-12" >';
          	    Ahmad +='<div class="form-group"> ';
          	    Ahmad +='<textarea type="text" name="message" class="form-control" placeholder="Your Reply Here*" required></textarea> ';
          	    Ahmad +='</div> ';
          	    Ahmad +='</div> ';
          	    Ahmad +='<div class="col-md-6 col-lg-6"> ';
          	    Ahmad +='<div class="form-group"> ';
          	    Ahmad +='<input type="text" name="name"  placeholder="Name*" required>';
          	    Ahmad +='</div> ';
          		Ahmad +='</div> ';
          		Ahmad +='<div class="col-md-12 col-lg-12"> ';
          		Ahmad +='<div class="form-group"> ';
          		Ahmad +='<input class="button" type="submit" value="Submit" name="submit"> ';
          		Ahmad +='</div> ';
          		Ahmad +='</div> ';
          		Ahmad +='</div> ';
          		Ahmad +='</div> ';
          		Ahmad +='</form> ';

               $('.contactAnswer'+aaa+'').append(Ahmad);
          	   $('.contactAnswer'+aaa+'').show();

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

	function htmlEncode(strHTML){
				var strTem = "";
				if(strHTML== null) return "";
				strTem = strHTML.replace(/&/g, "&gt;");
				strTem = strTem.replace(/</g, "&lt;");
				strTem = strTem.replace(/>/g, "&gt;");
				strTem = strTem.replace(/ /g, "&nbsp;&nbsp;&nbsp;");
//				strTem = strTem.replace(/\'/g, "&#39;");
//				strTem = strTem.replace(/\"/g, "&quot;");
				strTem = strTem.replace(/\n/g, "<br/>");
				return strTem;
			}


   function submitText()
   {
              var value=document.getElementById("question").value;
   			  var aaa=htmlEncode(value);

//               alert(aaa);
                   $('#question').val(aaa);

                var form = document.getElementById('from');
                //再次修改input内容
                form.submit();
   }

