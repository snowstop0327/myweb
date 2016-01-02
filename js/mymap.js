
var map;
var myLatLng = new google.maps.LatLng(24.987933, 121.288691);
var contentString = '<a href="https://goo.gl/maps/PyyNdMrSzsH2" target="_blank" style="text-align:left;color:#0071bc;text-decoration: none;">蔽宅！ </a>';

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00caff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#0094ff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "1.29"
            },
            {
                "gamma": "1.86"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#1994c1"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.71"
            }
        ]
    }
];

  var mapOptions = {
    zoom: 17,
    center: myLatLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
      // All of the below are set to true by default, so simply remove if set to true:
      panControl:true, // Set to false to disable
      mapTypeControl:true, // Disable Map/Satellite switch
      scaleControl:false, // Set to false to hide scale
      streetViewControl:true, // Set to disable to hide street view
      overviewMapControl:true, // Set to false to remove overview control
      rotateControl:true // Set to false to disable rotate control
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  var image = 'img/mylogo.svg';
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
