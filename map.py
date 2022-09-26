import folium

my_map = folium.Map(location=[44.93995, 34.09124], zoom_start=50)

folium.CircleMarker(location=[44.93995, 34.09124], radius=50).add_to(my_map)

folium.Marker([44.93995, 34.09124]).add_to(my_map)

my_map.save('index.html')