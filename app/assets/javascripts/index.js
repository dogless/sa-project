var completer;

completer = new GmapsCompleter({
	inputField: '#gmaps-input-address',
	errorField: '#gmaps-error',
	zoomLevel: 15,
	mapElem: '#map',
	pos: [42.088824, -75.966983],
	kml: 'https://sites.google.com/site/dougjchau/bus15and5.kml?attredirects=0&d=1'
});

completer.autoCompleteInit({
	country: "us"
});
