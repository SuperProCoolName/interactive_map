from re import M
import folium
from folium import plugins
import json

#my_map = folium.Map(location=[44.6116, 33.4921], zoom_start=50)
my_map = folium.Map(location=[44.6116, 33.4921], zoom_start=50)
plugins.Geocoder().add_to(my_map)

folium.GeoJson('geo.json', name='geojson map').add_to(my_map)

folium.Marker([44.6116, 33.4921], popup=folium.Popup('Chersonesus (Ancient Greek: Χερσόνησος)')).add_to(my_map)
folium.Marker([44.5052,33.5980], popup=folium.Popup('Possible place of living of Tauri')).add_to(my_map)

my_map.add_child(folium.LatLngPopup())

minimap = plugins.MiniMap(toggle_display=True)
my_map.add_child(minimap)
plugins.Fullscreen(position='topright').add_to(my_map)

plugins.MeasureControl(position='topright', primary_length_unit='meters', secondary_length_unit='miles', primary_area_unit='sqmeters', secondary_area_unit='acres').add_to(my_map)

folium.LayerControl().add_to(my_map)

my_map.save('index.html')