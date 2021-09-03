import React from 'react';
import {Map, GeoJSON} from 'react-leaflet';
import countries from './../data/countries.json';
import 'leaflet/dist/leaflet.css'
//do not change the order leaflet.css & css after!
import "./MyMap.css"

const MyMap = () => {
    console.log(countries)
 const countryStyle={
     fillColor: "green",
     //fillOpacity no btwn 0-1
     fillOpacity: 1,
     //color => borderColor
     color: "black",
     //borderWeight
     weight:2,
     dashArray :2
    }

const onEachCountry=(country, layer)=>{
    const countryName = country.properties.ADMIN
    console.log(countryName)
    layer.bindPopup
}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>My Map</h1>
            <Map style={{height: "80vh"}} zoom={5} center={[37.56948,126.97364]}>
                <GeoJSON style={countryStyle} data={countries.features} onEachFeature={onEachCountry} />
            </Map>
        
        </div>
    );
};

export default MyMap;

//1. Zoom & Centers ([x, y]) Required
//2. Add GeoJSON (to fetch data) -> GeoJSON has "data" 
//3. style Map (background -> Map, color the countries -> GeoJSON)
//4. display Pop-Up with onEachFeature
//5. Layer.BindPopUp