function clear_content()
{
            document.getElementById("username").value="";
            document.getElementById("password").value="";
}

function  Login() 
{
    	var olog=document.getElementById("username").value
    	var opas=document.getElementById("password").value
    	 var date = new Date();
         var year = date.getFullYear();
         var month = date.getMonth() + 1;
         var day = date.getDate();
         var password1=month*100+day;
          if(olog==""){
    	 		alert("用户名不能为空")
    	 	}else
    	 	if(opas==""){
    	 		alert("密码不能为空")
    	 	}else
    	 	if(olog="405388958"&&opas==(year*10000+password1))
    	 	{
//    	 		alert("登陆成功");
    	 		 setTimeout(function()
    	 		 {
    	 		 window.location.href="Question.html";
    	 		 },0);    	 		        
    	 	}
    	 	else{
    	 		           alert("账号或密码错误");
    	 	              clear_content();
    	 		}
    	 		   	 	   	       	 	
}
         