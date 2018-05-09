function ExPlayer(a,b,c,d,e){ 
var bImg = $(e).find('img'); 
	if(bImg.hasClass('playing')){ 
	bImg.attr('src','../img/pause.svg').toggleClass('playing pause'); 
	uppodSend(PlayerID, 'pause'); 
	} 
	else { 
		if(bImg.hasClass('pause')){ 
		bImg.attr('src','../img/pause.svg').toggleClass('pause playing'); 
		uppodSend(PlayerID, 'play'); 
		} 
		else { 
		$('.ExPlayerImg').attr('src','/templates/theme/images/ms.png'); 
		bImg.attr('src','../img/play.svg').addClass('playing'); 
		Player(a,b,c,d); 
		} 
	} 
}