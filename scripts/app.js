// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var allGPS = {};


	$(document).on("ready", function() {
		var source = $("#quakes-template").html();
		var template = Handlebars.compile(source);	
		
		$.get(weekly_quakes_endpoint, function(data) {
		var quakeResults = data.features;
		var quakeNames = template({quakes: quakeResults});
		
			$("#info").append(quakeNames);
		});

initMap();

});

	function initMap() {
  		var myLatlng = {lat: 39.76, lng: -105.01};
  		var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 1,
    	center: myLatlng   

  });

	$.get(weekly_quakes_endpoint, function(data) {
		data.features.forEach(function(quake) {
			var lat = quake.geometry.coordinates [0];
			var lng = quake.geometry.coordinates [1];
			var coordmarker = new google.maps.Marker({position: {lat:lat, lng:lng},
    		map: map,
    		title: 'allCoordinates'
			});
});

});
}
	//$.get(weekly_quakes_endpoint, function(latlng) {
		
		//console.log(latlng);
		//var coordinates = latlng.geometry[0];