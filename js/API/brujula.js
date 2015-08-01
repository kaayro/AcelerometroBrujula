var brj = {
	watchID: null,
	onSuccess: function onSuccess(heading) {
		$('#brujula .scroll h2').html('Heading: ' + heading.magneticHeading);
	},
	onError: function (compassError) {
		alert('Compass error: ' + compassError.code);
	},
	start: function(){
		alert(1);
		if(brj.watchID == null){
			alert(2);
			var options = { frequency: 500 };
			brj.watchID = navigator.compass.watchHeading(brj.onSuccess, brj.onError, options);
		}
	},
	stop: function(){
		if(brj.watchID != null){
			navigator.compass.clearWatch(brj.watchID);
			$('#brujula .scroll h2').html('Detenido');
		}
	}
}