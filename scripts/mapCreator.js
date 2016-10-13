// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.


// async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE-4-HYH9Din8Tjjpa2Nwrvd6CfI4dFtA&callback=initMap"


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: 45.516, lng: -122.676},
		center: {lat: 45.518, lng: -122.678},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

initMap();

async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE-4-HYH9Din8Tjjpa2Nwrvd6CfI4dFtA&callback=initMap"

    // <script async defer
    // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCE-4-HYH9Din8Tjjpa2Nwrvd6CfI4dFtA&callback=initMap">
    // </script>
