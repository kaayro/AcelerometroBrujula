//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	ready: function(){
		document.addEventListener("deviceready",fn.init,false);
	},
	init: function(){
		$('#acelerometro .individual li').tap(fn.acc);
		$('#brujula .individual li').click(fn.brj);
	},
	acc: function(){
		if($(this).index() == 0)
			acc.start();
		else
			acc.stop();
	},
	brj: function(){
		if($(this).index() == 0)
			brj.start();
		else
			brj.stop();
	}
};
$(fn.init);