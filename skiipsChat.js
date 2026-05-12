$(document).on("click","[onclick=\"Send_Rjoin('3ihxjl18itxx')\"]",function(){

$("#welcome-msg").remove();

$("body").append('<div id="welcome-msg">⚠️ تنبيه هام جداً<br><br>اعزاءنا الزوار نحب ننوه ان العام للسوالف العامة ويرفض نشر الصور الخادشه فيه او الانحراف بالكلام وشكراً لكم</div>');

$("#welcome-msg").css({position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(180deg,#8b0000,#ff0000)",color:"#fff",padding:"18px 40px",width:"380px",textAlign:"center",borderRadius:"14px",fontSize:"16px",lineHeight:"1.9",fontWeight:"bold",zIndex:"999999",display:"none",boxShadow:"0 0 25px rgba(255,0,0,0.7)",border:"1px solid #ff4d4d"});

$("#welcome-msg").fadeIn(300);

setTimeout(function(){$("#welcome-msg").fadeOut(400,function(){$(this).remove();});},10000);

});
