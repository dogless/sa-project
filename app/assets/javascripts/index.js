var completer;

completer = new GmapsCompleter({
	inputField: '#gmaps-input-address',
	errorField: '#gmaps-error',
	zoomLevel: 15,
	mapElem: '#map',
	pos: [42.088824, -75.966983]
});

completer.autoCompleteInit({
	country: "us"
});
