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
	var currentInfoWindow;

	//FS credentials
		var CLIENT_ID_Foursquare = '33UEGUFU31FFHTQSCBAPJFXKUNSSLIXMFH03BB334UBGBB20';
		var CLIENT_SECRET_Foursquare = 'TK2WBEKFXBFN4C1QKMZIQ0YPGQVLER03NKBTWHT34YEL133A';

	//Google Map
	//Center of map is the Marin County Civic Center, ideal as it is a well-known Marin landmark in the 'middle' of the //county.
	//Marin (where I live) has the worst problem and is in the right place to show all of the Rinks.
	loadMap();
	var map;
	function loadMap() {
			map = new google.maps.Map(document.getElementById("map"), {
			center: {lat: 37.997726, lng: -122.5329007},
			zoom: 8, //optimal setting for mobile even though 9 is possible on PC screens
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



	//create markers
	self.Rinks().forEach(function callback(rink, index) {

		//window.setTimeout(function() {  //---tried to add the drop pins with delay effect but can't get it right - ;(
		var marker = new google.maps.Marker({
			position: rink.position,
			map: map,
			//beachflag pin has good contrast with Hockey theme
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
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

						//make marker clickable and show infoWindow when clicked
						rink.infoWindow = infoWindow;
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
					alert("Foursquare could not load data. The pins on the map will not show information if you click them. Please try the app later.");
				}
		});
		//}, index * 100); //trying unsuccessfully to get markers to drop one-at-a-time
	});

	//Click on rink in rinkList function (note this list a ko observable).
	//Clicking zooms to that location and opens infoWindow
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
			rink.marker.setAnimation(null);
		}, 2100); //this value gives a clean 4 bounces with a soft landing
	};

	//Arrayfilter routine looks for search character string in search input and calculates offset position in each list item, returning -1 if not found
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
	window.location.reload();
};

//Google Maps error handling
function mapsError() {
		alert('Google Maps could not load. Please try the app again later.')

//this might have limited value on a web server. It was helpful when run locally.
document.getElementById("map").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>------------------------------------------------------------------- ------------If you can read this, there has been an error loading Google Maps. Please Try Again.";
};


//Invoke
function initApp() {
	//loadMap();
	var app = new ViewModel();
	ko.applyBindings(app);
};
