from flask import Flask , render_template, request
from geopy.geocoders import ArcGIS
import folium
import geopandas as gpd
import rasterio




app=Flask(__name__)
@app.route('/')

def home():
    nom = ArcGIS()
    location = nom.geocode("National Authority for Remote Sensing")
    x = location.latitude 
    y = location.longitude 
    my_map = folium.Map(location=[x, y])
    my_map.add_child(folium.Marker(location=[x, y], popup="National Authority for Remote Sensing", icon=folium.Icon(color='red')))
    return render_template('index.html', map=my_map._repr_html_())

@app.route('/', methods=['POST'])

def homes():
    
        if (request.method=='POST'):
                nom = ArcGIS()

                x = request.form['latitude'] 
                y = request.form['longitude'] 
                if x and y and x.strip() and y.strip():
                    try:
                        x = float(x)
                        y = float(y)
                        my_map = folium.Map(location=[x, y])
                        my_map.add_child(folium.Marker(location=[x, y], icon=folium.Icon(color='red')))
                        return render_template('index.html', map=my_map._repr_html_())
                    except ValueError:
                        return "Invalid latitude or longitude values."
                else:
                    x="Please enter latitude and longitude values."
                    my_map = folium.Map(location=[0, 0])
                    my_map.add_child(folium.Marker(location=[0, 0], icon=folium.Icon(color='red')))
                    return render_template('index.html', error=x, map=my_map._repr_html_())

        

if __name__=="__main__":
    app.run(debug=True)


