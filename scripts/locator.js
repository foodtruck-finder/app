function geoFindMe(){
		navigator.geolocation.getCurrentPosition(success, error, geo_options);

		function success(position) {
				var latitude = position.coords.latitude;
				var longitude = position.coords.longitude;
				var altitude = position.coords.altitude;
				var accuracy = position.coords.accuracy;

				//do something with above position thing e.g. below
				alert('I am here! lat:' + latitude +' and long : ' +longitude );
		}

		function error(error) {
				alert("Unable to retrieve your location due to "+error.code + " : " + error.message);
		};

		var geo_options = {
				enableHighAccuracy: true,
				maximumAge : 30000,
				timeout : 27000
		};
}

geoFindMe();
