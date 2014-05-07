handler = Gmaps.build('Google');
handler.buildMap({ 
		internal: {id: 'map' },
		provider: {
			zoom: 15,
			center: new google.maps.LatLng(42.088824, -75.966983) //binghamton coords
		}
	}
);