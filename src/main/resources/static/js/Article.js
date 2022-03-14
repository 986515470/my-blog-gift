 document.write('<link href="/css/style.css" rel="stylesheet" type="text/css">');
window.onload = function()
{
        LoadArticle();
//        alert("载入意见完成！");
}

        function LoadArticle(){
            $.ajax({
                url: "queryArticle",
                async: false,
                cache: false,
                type: "get",
                dataType: "json",
                success: function (data) {
                  $("#info").empty();
                  var head="";
                   head +='<article class="blog_post">';
                   head +='<div class="post_content">';
                   head +='<div class="post_header">';
                   head +='<div class="author"><a href="#"><i class="ion-android-create"></i> By Website Author Wcy</a></div>';
                   head +='<h2 class="post_title">';
                   head +='<a href="#">Article describe</a>';
                   head +='</h2>';
                   head +='</div>';
                   head +='<div class="post_intro">';
                   head +='	<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following articles are published.Welcome to the writing website to post articles.(please ignore this article. As a template,there are data only used to test and guide background transmission.).You can view it by clicking on the title of the article.Thank you for your comments and articles. Love you! </p>';
//                  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here are some writing notes:<br>1、If the first line is indented with two spaces, use (copy the next line directly):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &ampnbsp;&ampnbsp;&ampnbsp;&ampnbsp;&ampnbsp;&ampnbsp;<br>2、To wrap a line, use (copy the next line directly):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;
                   head +='</div>';
                   head +='<div class="post_header">';
                   head +='<div class="author"><a href="#"><i class="ion-android-create"></i>Writing time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—2021/01/31</a></div>';
                   head +='</div>';
                   head +='</div>';
                   head +='</article> ';

                   $('#info').append(head);
                   $.each(data,function(i,n){

                             		     var html="";
                             		     html +='<article class="blog_post"> ';
                             		     html +='<div class="post_content">';

                             		     html +='<div class="post_header">';
                                             html +='<div class="author"><a href="#"><i class="ion-android-create"></i> By '+n.author+'</a></div>';
                             		         html +='<h2 class="post_title">';
                             		            html +='<a href="#" onclick="show('+n.id+')"  >' +n.title+'</a>';
                             		         html +='</h2>';
                             		     html +='</div>';

                                         var word=n.words;
                                         if(getLength(word)>=200){
                                            word=word.slice(0,200);
                                         }

                             		     html +='<div class="post_intro">';
                             		        html +='<p>'+word+'......</p>';
                             		     html +='</div>';

                             		     html +='<div class="post_header">';
                             		        html +='<div class="author"><a href="#"><i class="ion-android-create"></i>Writing time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-'+n.time+'</a></div>';
                             		     html +='</div>';

                                         html +='</div>';
                                         html +='</article>';

                             		    $('#info').append(html);
                             		    $('#info').show();

                      })

                     }
                   })

                 }

         function  show(id){
              $("#info").empty();
                $.ajax({
                               url: "queryArticle",
                               async: false,
                               cache: false,
                               type: "get",
                               dataType: "json",
                               success: function (data) {
               //                    清除旧的数据
               //                    $("#BdInfo").html("");
               //                     增加新的数据
                                   $.each(data,function(i,n){

                                                 if(id==n.id){
                                            		     var html="";
                                            		     html +='<article class="blog_post"> ';
                                            		     html +='<div class="post_content">';

                                            		     html +='<div class="post_header">';
                                                            html +='<div class="author"><a href="#"><i class="ion-android-create"></i> By '+n.author+'</a></div>';
                                            		         html +='<h2 class="post_title">';
                                            		            html +='<a href="javascript:void(0);" onclick="LoadArticle()"  >' +n.title+'</a>';
                                            		         html +='</h2>';
                                            		     html +='</div>';


                                            		     html +='<div class="post_intro">';
                                            		        html +='<p>'+n.words+'</p>';
                                            		     html +='</div>';

                                            		     html +='<div class="post_header">';
                                            		        html +='<div class="author"><a href="#"><i class="ion-android-create"></i>Writing time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-'+n.time+'</a></div>';
                                            		     html +='</div>';

                                                        html +='</div>';
                                                        html +='</article>';

                                            		    $('#info').append(html);
                                            		    $('#info').show();
                                            	}

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
function getLength(str) {
        ///<summary>获得字符串实际长度，中文2，英文1</summary>
           ///<param name="str">要获得长度的字符串</param>
           var realLength = 0, len = str.length, charCode = -1;
           for (var i = 0; i < len; i++) {
               charCode = str.charCodeAt(i);
               if (charCode >= 0 && charCode <= 128)
                     realLength += 1;
               else
                     realLength += 2;
           }
           return realLength;
    }

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
              var value=document.getElementById("article").value;
   			  var aaa=htmlEncode(value);

//               alert(aaa);
                   $('#article').val(aaa);

                var form = document.getElementById('from1');
                //再次修改input内容
                form.submit();
   }







