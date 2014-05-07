handler = Gmaps.build('Google');
handler.buildMap({ 
		internal: {id: 'map' },
		provider: {
			zoom: 15,
			center: new google.maps.LatLng(42.088824, -75.966983) //binghamton coords
		}
	},
	function(){
		var kmls = handler.addKml(
			{ url: "https://sites.google.com/site/dougjchau/Bus%2015.kml?attredirects=0&d=1"}
		);
	}
);