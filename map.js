var map = L.map('map', {
center: [44.6116, 33.4921],
zoom: 5,
layers: cities
});

/*var popup_latlng = L.popup();
function onMapClick(e) {
    popup_latlng
                .setLatLng(e.latlng)
                .setContent(e.latlng.toString())
                .openOn(map);
}
map.on('click', onMapClick);*/


var chersonesus = L.marker([44.6116, 33.4921]).bindPopup('This is Chersonesus');
var simferopol = L.marker([44.952195, 34.102378]).bindPopup('This is Simferopol');
var kerch = L.marker([45.354317, 36.453323]).bindPopup('This is Kerch');
var cities = L.layerGroup([chersonesus, simferopol, kerch]).addTo(map);

var overlayMaps = {
  "Cities": cities
};

var layerControl = L.control.layers(null, overlayMaps).addTo(map);


map.attributionControl.setPrefix('&copy <a href="https://leafletjs.com" target="_blank">Leaflet</a>')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | &copy; <a href="https://pt.2035.university/project/natures-handbook" target="_blank">GeoChemical Map</a>'
}).addTo(map);

var scale = L.control.scale();
scale.addTo(map);

var myLayer = L.geoJSON().addTo(map);
  // load GeoJSON from an external file
  fetch("geo.json").then(res => res.json()).then(data => {
    map_data = L.geoJson(data);
    map_data.addTo(map);
});

