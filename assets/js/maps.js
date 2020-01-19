function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 55.68,
            lng: 12.57
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 57, lng: 48},
        {lat: 41, lng: -73},
        {lat: 40, lng: 22},
        {lat: 40.4, lng: 22.2},
        {lat: 40.05, lng: 21.97},
        {lat: 55.68, lng: 12.57}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, 
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}