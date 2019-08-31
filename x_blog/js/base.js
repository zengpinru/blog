$(function(){
	//处理移动端导航
	var oH2 = $($("h2")[0]);
	var oUl = $($("ul")[0]);
	oH2.on("click",function(){
		if(oUl.css('display')=="block"){
			oUl.css('display','none');
			oH2.removeClass('open');
		}else{
			oUl.css('display','block');
			oH2.addClass('open');
		}
	});
});
