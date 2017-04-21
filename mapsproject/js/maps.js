"use strict";

//Model

var Rinks = [
		{
			name: "Snoopy's Home Ice, Santa Rosa",
			position: {lat: 38.460572, lng: -122.7365327},
			googleID: "ChIJezO1WG84hIAR2RPkV0Hh7gY",
			fsID: "4b818690f964a52072ac30e3"
		},
		{
			name: "Oakland Ice Skating and Bowling Center",
			position: {lat: 37.8074183, lng: -122.2736053},
			googleID: "ChIJ6ZByA7KAj4AROShmR9udnGI",
			fsID: "44ca2f99f964a520f9351fe3"
		},
		{
			name: "Yerba Buena Skating Rink, San Francisco",
			position: {lat: 37.783142, lng: -122.4026857},
			googleID: "ChIJTx9N3n2AhYARYw-9OmioTfA",
			fsID: "49f099d3f964a52038691fe3"
		},
		{
			name: "Sharks Ice Fremont",
			position: {lat: 37.555159, lng: -121.9796647},
			googleID: "ChIJ2fqNpS8zjoARe3meHef4vb4",
			fsID: "4b788b46f964a520aed52ee3"
		},
		{
			name: "Ice Center Cupertino",
			position: {lat: 37.3272431, lng: -122.01538},
			googleID: "ChIJqbKAopi1j4AR3tULk-xiOrU",
			fsID: "47bae80cf964a520cf4d1fe3"
		},
		{
			name: "Sharks Ice South San Jose",
			position: {lat: 37.3194214, lng: -121.8663716},
			googleID: "ChIJ2fqNpS8zjoARe3meHef4vb4",
			fsID: "4a10fa36f964a5200b771fe3"
		},

];


var currentInfoWindow;





//Viewmodel

function ViewModel() {



	//Declaring variables and functions
	var self = this;
	self.Markers = [];
	self.Rinks = ko.observableArray(Rinks);
	self.searchTerm = ko.observable("");
	function contentString(fsInfo) {
			return ('<div id="content" class="windowInfo">'+ '<h2>' + fsInfo.name + '</h2>'+ '<div>'+  fsInfo.formattedAddress[0] + '<br>' + fsInfo.formattedAddress[1] + '<br>' + fsInfo.formattedPhone + '<br>' + fsInfo.url + '<br><br><small class="attribution">Info courtesy of Foursquare</small>' + '</div>' + '</div>');
	};
	//FS credentials
		var CLIENT_ID_Foursquare = '33UEGUFU31FFHTQSCBAPJFXKUNSSLIXMFH03BB334UBGBB20';
		var CLIENT_SECRET_Foursquare = 'TK2WBEKFXBFN4C1QKMZIQ0YPGQVLER03NKBTWHT34YEL133A';

	//Google Map
	//Center of map is the Marin County Civic Center, ideal as it is a well-known Marin landmark in the 'middle' of the //county. Marin has the worst problem and is in the right place to show all of the Rinks.
	loadMap();
	var map;
	function loadMap() {
			map = new google.maps.Map(document.getElementById("map"), {
			center: {lat: 37.997726, lng: -122.5329007},
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			//Used the 'Hockey' style - how perfect!- from Snazzy but made labels and major highways Black for better readability and cool factor.
			styles: [{
				"featureType": "all",
				"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": 100
		}, {
			"color": "#000000"
		}, {
			"lightness": 15
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000045"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000045"
		}, {
			"lightness": 17
		}, {
			"weight": 1.2
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#82bcc8"
		}, {
			"lightness": 20
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#6ab0be"
		}, {
			"lightness": 21
		}, {
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels.text",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#000000"
		}]
	}, {
		"featureType": "road.highway.controlled_access",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#3e8695"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#196e80"
		}, {
			"lightness": 25
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#5cacbc"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#6a95c7"
		}, {
			"lightness": 25
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [{
			"color": "#33899a"
		}, {
			"lightness": 19
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#8acddb"
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [{
			"color": "#4091a2"
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"color": "#266572"
		}, {
			"lightness": 17
		}]
	}]

	});

	};






	/*
	var image = {
     url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
     // This marker is 20 pixels wide by 32 pixels high.
     size: new google.maps.Size(20, 32),
     // The origin for this image is (0, 0).
     //origin: new google.maps.Point(0, 0),
     // The anchor for this image is the base of the flagpole at (0, 32).
     //anchor: new google.maps.Point(0, 32)
   };

	 /* function drop() {
	        //clearMarkers();
	        for (var i = 0; i < neighborhoods.length; i++) {
	          addMarkerWithTimeout(neighborhoods[i], i * 200);
	        }
	      }

	      function addMarkerWithTimeout(position, timeout) {
	        window.setTimeout(function() {
	          markers.push(new google.maps.Marker({
	            position: position,
	            map: map,
	            animation: google.maps.Animation.DROP
	          }));
	        }, timeout);
	      }
				*/

	//create markers
	self.Rinks().forEach(function callback(rink, index) {

		//window.setTimeout(function() {  ---tried to add the drop pins with delay effect but can't get it right - ;(
		console.log(index);
		var marker = new google.maps.Marker({
			position: rink.position,
			map: map,
			//title: rink.title,
			//URL: rink.shortUrl,
			//beachflag pin has good contrast with Hockey theme
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
			//icon: image,
			animation: google.maps.Animation.DROP
		});

		//add markers to array
		rink.marker = marker;
		rink.marker.setVisible(true);
		self.Markers.push(rink.marker);



	//FS ajax
						$.ajax({
								type: "GET",
								dataType: 'json',
								cache: false,
								url: 'https://api.foursquare.com/v2/venues/' + rink.fsID + '?client_id=' + CLIENT_ID_Foursquare + '&client_secret=' + CLIENT_SECRET_Foursquare+ '&v=20170419',
								async: true,
								success: function(data) {
										//console.log(data.response);
										console.log(data.response.venue.name);
										console.log(data.response.venue.location.formattedAddress);
										console.log(data.response.venue.contact.formattedPhone);
										console.log(data.response.venue.url);
										console.log(data.response.venue.hours);

										//Limited testing for valid information on the fields I know that can be incomplete
										// Note, I did submit missing data to Foursquare. I wonder if they will update their db, see Oakland Rink
										var urlOk = data.response.venue.url;
										if (urlOk == undefined) {urlOk = "no website info available"};
										var phoneOk = data.response.venue.contact.formattedPhone;
										if (phoneOk == undefined) {phoneOk = "no phone info available"};
										//create infoWindow for each marker
										var infoWindow = new google.maps.InfoWindow({
											content: contentString({
												name: data.response.venue.name,
												formattedAddress: data.response.venue.location.formattedAddress,
												formattedPhone: phoneOk,
												url: urlOk,
											})
										});
										rink.infoWindow = infoWindow;
										//make marker clickable and show infoWindow when clicked
										rink.marker.addListener('click', function () {
										if (currentInfoWindow !== undefined) {
												currentInfoWindow.close();
										}
										currentInfoWindow = rink.infoWindow;
										rink.infoWindow.open(map, marker);
										rink.marker.setAnimation(google.maps.Animation.BOUNCE);
										setTimeout(function () {
												rink.marker.setAnimation(null);
										}, 2100); //this value gives a clean 4 bounces with a smooth (not jerky) finish
										});
								},
								error: function(error) {
										alert("Foursquare could not load data. Check your Internet connection as a possible source of the problem.");
								}
						});
//}, index * 400); //trying unsuccessfully to get markers to drop one-at-a-time
	});

	//Click on Rink in rink List
	self.listViewClick = function(rink) {
		if (rink.name) {
			map.setZoom(12);
			map.panTo(rink.position);
		rink.marker.setAnimation(google.maps.Animation.BOUNCE);
			 if (currentInfoWindow !== undefined) { //close open window if any
								currentInfoWindow.close();
						}
						currentInfoWindow = rink.infoWindow;
						currentInfoWindow.open(map, rink.marker); // open infoWindow
		}
		setTimeout(function() {
			rink.marker.setAnimation(null); // End animation on marker after 1.5 seconds
		}, 2100); //this value gives a clean 4 bounces with a soft landing
	};
//arrayfilter routine looks for search character string position in each list item, returning -1 if not found
	self.rinkList = ko.computed(function() {
	return ko.utils.arrayFilter(self.Rinks(), function(stringSearch) {
	var stringOffset = stringSearch.name.toLowerCase().indexOf(self.searchTerm().toLowerCase());
	console.log(stringOffset);
	if (stringOffset === -1) {
		stringSearch.marker.setVisible(false);
		} else {
		stringSearch.marker.setVisible(true);
		}
		return stringOffset >= 0;
		});
	}, this);
};

//View

//Reset map button
function reloadPage(){
	console.log("button press");
   window.location.reload();
};

function mapsError() {
		alert('Google Maps could not load. Check your Internet connection as a likely source of the problem.')

document.getElementById("map").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>------------------------------------------------------------------- ------------If you can read this, there has been an error loading Google Maps. Please Try Again.";
};


//Invoke
function initApp() {
	//loadMap();
	var app = new ViewModel();
	ko.applyBindings(app);
};

/* Yelp Creds

App ID
fXgfpYRLJD4hnKyQZ8VHBQ
App Secret
dhvununW1lgLCwRuAP4Df08gVpwKz9j5YDy75vFYALYT6doBGXE9Jh9rAywF1P9U

Post token response

{
  "access_token": "kPodXcnBFEG3S2kN61Lg--lOvCL_Tv-Y3y6QMHE2OONLluAVIPvJ42K_a6jpib14z2lXHGFgGJExsjuT-uTKCSd_v-Eb366ZjbsgoPo17r7BN7RV9p1t6DXpifX2WHYx",
  "expires_in": 15551999,
  "token_type": "Bearer"
}

*/
