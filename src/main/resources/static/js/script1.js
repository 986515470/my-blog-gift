$(function(){
  $(".error-pass, .error-email").hide();
  $(".overlay").hide();
  $(".confirmation").hide();
})

function checkEmail(email) {
  var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailReg.test(email);
}

	function clear_content()
	{
	            document.getElementById("username").value="";
	            document.getElementById("password").value="";
	}
	
	function  Login() 
	{
	    	var olog=document.getElementById("username").value;
	    	var opas=document.getElementById("password").value;
			 
			  // alert(olog);
			  // alert(opas);
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
					$(".overlay").show();
					$(".confirmation").show();
	//    	 		alert("登陆成功");
	    	 		 setTimeout(function()
	    	 		 {
	    	 		 window.location.href="Question.html";
	    	 		 },1500);
										 
	    	 	}
	    	 	else{
	    	 		           alert("账号或密码错误");
	    	 	              clear_content();
	    	 		}
	    	 		   	 	   	       	 	
	}
	/*
	* File Name / wagasa.js
	* Created Date / Aug 11, 2020
	* Aurhor / Toshiya Marukubo
	* Twitter / https://twitter.com/toshiyamarukubo
	*/
	
	(function () {
	  'use strict';
	  window.addEventListener('load', function () {
	    var canvas = document.getElementById('canvas');
	
	    if (!canvas || !canvas.getContext) {
	      return false;
	    }
	
	    /********************
	      Random Number
	    ********************/
	
	    function rand(min, max) {
	      return Math.floor(Math.random() * (max - min + 1) + min);
	    }
	    
	    /********************
	      Var
	    ********************/
	
	    var ctx = canvas.getContext('2d');
	    var X = canvas.width = window.innerWidth;
	    var Y = canvas.height = window.innerHeight;
	    var shapes = [];
	    var rad = Math.PI * 2 / 36;
	    var style = {
	      black: 'black',
	      white: 'white',
	      lineWidth: 4,
	    };
	    var colors = [
	      'rgb(77, 121, 155)',
	      'rgb(248, 215, 205)',
	      'rgb(177, 201, 179)'
	    ];
	
	    /********************
	      Animation
	    ********************/
	
	    window.requestAnimationFrame =
	      window.requestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.msRequestAnimationFrame ||
	      function(cb) {
	        setTimeout(cb, 17);
	      };
	
	    /********************
	      Shape
	    ********************/
	    
	    function Shape(ctx, x, y, r) {
	      this.ctx = ctx;
	      this.init(x, y, r);
	    }
	    
	    Shape.prototype.init = function(x, y, r) {
	      this.x = x;
	      this.y = y;
	      this.r = 1;
	      this.ri = r;
	      this.c = colors[rand(0, colors.length - 1)];
	      this.num = rand(0, 2);
	      this.a = rand(0, 360);
	      this.rad = this.a * Math.PI / 180;
	      this.random = Math.random();
	    };
	    
	    Shape.prototype.draw = function() {
	      var ctx  = this.ctx;
	      ctx.save();
	      ctx.fillStyle = this.c;
	      ctx.lineWidth = this.r / 100;
	      ctx.strokeStyle = style.white;
	      ctx.translate(this.x, this.y);
	      ctx.rotate(Math.sin(Math.sin(this.rad)));
	      ctx.translate(-this.x, -this.y);
	      ctx.beginPath();
	      for (var i = 0; i < 36; i++) {
	        var x = Math.cos(rad * i) * this.r + this.x;
	        var y = Math.sin(rad * i) * this.r + this.y;
	        if (i === 0) {
	          ctx.moveTo(x, y);
	        } else {
	          ctx.lineTo(x, y);
	        }
	      }
	      ctx.closePath();
	      ctx.fill();
	      ctx.stroke();
	      for (var i = 0; i < 36; i++) {
	        var x = Math.cos(rad * i) * this.r * 1.01 + this.x;
	        var y = Math.sin(rad * i) * this.r * 1.01 + this.y;
	        ctx.beginPath();
	        ctx.moveTo(this.x, this.y);
	        ctx.lineTo(x, y);
	        ctx.stroke();
	      }
	      ctx.strokeStyle = 'rgb(252, 250, 238)';
	      // pattern
	      switch (this.num) {
	        case 0:
	          this.drawCircle();
	          break;
	        case 1:
	          this.doubleCircle();
	          break;
	        default:
	          break;
	      }
	      ctx.restore();
	    };
	
	    Shape.prototype.drawCircle = function() {
	      ctx.lineWidth = this.r / 5;
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.r / 2, 0, Math.PI * 2, false);
	      ctx.stroke();
	    };
	    
	    Shape.prototype.doubleCircle = function() {
	      for (var i = 2; i < 4; i++) {
	        ctx.lineWidth = this.r / i / 5;
	        ctx.beginPath();
	        ctx.arc(this.x, this.y, this.r / i, 0, Math.PI * 2, false);
	        ctx.stroke();
	      }
	    };
	
	    Shape.prototype.updateParams = function(i) {
	      if (i % 2 === 0) this.a += this.random;
	      if (i % 2 !== 0) this.a -= this.random;
	      if (this.r < this.ri) this.r += 0.5;
	      this.rad = this.a * Math.PI / 180;
	    };
	
	    Shape.prototype.render = function(i) {
	      this.updateParams(i);
	      this.draw();
	    };
	
	   // Add Shape
	    function addShape() {
	      var overlap = false;
	      var setX = rand(0, X);
	      var setY = rand(0, Y);
	      var setR;
	      Math.random() < 0.3 ? setR = rand(50, 70) : setR = rand(100, 200);
	      for (var i = 0; i < shapes.length; i++) {
	        var x = Math.abs(setX - shapes[i].x);
	        var y = Math.abs(setY - shapes[i].y);
	        var d = x * x + y * y;
	        var dist = Math.floor(Math.sqrt(d));
	        if (dist < setR + shapes[i].ri / 2) {
	          overlap = true;
	          break;
	        }
	      }
	      if (overlap === true) {
	        return;
	      }
	      var s = new Shape(ctx, setX, setY, setR);
	      shapes.push(s);
	    }
	
	    for (var i = 0; i < 1; i++) {
	      var s = new Shape(ctx, rand(0, X), rand(0, Y), rand(50, 200));
	      shapes.push(s);
	    }
	
	    /********************
	      Confetti
	    ********************/
	    
	    var confettiNum = 200;
	    var confettis = [];
	    
	    function Confetti(ctx, x, y) {
	      this.ctx = ctx;
	      this.init(x, y);
	    }
	
	    Confetti.prototype.init = function(x, y) {
	      this.x = x;
	      this.y = y;
	      this.r = rand(5, 15);
	      this.c = colors[rand(0, colors.length - 1)];
	      this.a = rand(0, 360);
	      this.rad = this.a * Math.PI / 180;
	      this.v = {
	        x: rand(-1, 1) * Math.random(),
	        y: Math.random() + Math.random()
	      };
	      this.random = 1;
	    };
	
	    Confetti.prototype.draw = function() {
	      var ctx = this.ctx;
	      ctx.save();
	      ctx.fillStyle = this.c;
	      ctx.translate(this.x + this.r / 2, this.y + this.r / 2);
	      ctx.rotate(this.rad);
	      ctx.scale(Math.cos(this.rad * 7), Math.sin(this.rad * 3));
	      ctx.translate(-this.x - this.r / 2, -this.y - this.r / 2);
	      ctx.fillRect(this.x, this.y, this.r, this.r);
	      ctx.restore();
	    };
	
	    Confetti.prototype.updateParams = function(i) {
	      if (i % 2 === 0) this.a += this.random;
	      if (i % 2 !== 0) this.a -= this.random;
	      this.rad = this.a * Math.PI / 180;
	    };
	
	    Confetti.prototype.updatePosition = function() {
	      this.x += this.v.x;
	      this.y += this.v.y;
	    };
	
	    Confetti.prototype.wrapPosition = function() {
	      if (this.y > Y + this.r) {
	        this.y = 0 - this.r;
	        this.x = rand(0, X);
	      }
	    };
	
	    Confetti.prototype.render = function(i) {
	      this.updateParams(i);
	      this.updatePosition();
	      this.wrapPosition();
	      this.draw();
	    };
	
	    for (var i = 0; i < confettiNum; i++) {
	      var c = new Confetti(ctx, rand(0, X), rand(-Y / 2, 0));
	      confettis.push(c);
	    }
	   
	    /********************
	      Render
	    ********************/
	    
	    function render() {
	      ctx.clearRect(0, 0, X, Y);
	      for (var i = 0; i < shapes.length; i++) {
	        shapes[i].render(i);
	      }
	      for (var i = 0; i < confettis.length; i++) {
	        confettis[i].render(i);
	      }
	      addShape();
	      requestAnimationFrame(render);
	    }
	
	    render();
	
	    /********************
	      Event
	    ********************/
	    
	    function onResize() {
	      X = canvas.width = window.innerWidth;
	      Y = canvas.height = window.innerHeight;
	    }
	
	    window.addEventListener('resize', function() {
	      onResize();
	    });
	
	  });
	})();