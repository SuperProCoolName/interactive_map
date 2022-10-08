var map = L.map('map').setView([44.6116, 33.4921], 5)

map.attributionControl.setPrefix('&copy <a href="https://leafletjs.com" target="_blank">Leaflet</a>')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | &copy; <a href="https://pt.2035.university/project/natures-handbook" target="_blank">GeoChemical Map</a>'
}).addTo(map);

var myLayer = L.geoJSON().addTo(map);
  // load GeoJSON from an external file
  fetch("geo.json").then(res => res.json()).then(data => {
    map_data = L.geoJson(data);
    map_data.addTo(map);
  });

  
var scale = L.control.scale();
scale.addTo(map);

