import React, { useState } from 'react';
import {Map, GeoJSON} from 'react-leaflet';
import countries from './../data/countries.json';
import 'leaflet/dist/leaflet.css'
//do not change the order leaflet.css & css after!
import "./MyMap.css"

const MyMap = () => {
    console.log(countries)

const [color, setColor] = useState("#fff00")

const colors = ["yellow", "red", "blue", "green", "purple"]

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

const colorChange=(e)=>{
    setColor(e.target.value)
}

const onCountryClick=(e)=>{
    console.log("clicked")
}

const onCountryMouseover=(event)=>{
    event.target.setStyle({
        color: color,
        fillColor: "blue",
})}

const onEachCountry=(country, layer)=>{
    const countryName = country.properties.ADMIN
    console.log(countryName)
    //layer = shown on the screen
    layer.bindPopup(countryName)
//8. Random Country Colors With Opacity
    layer.options.fillOpacity = Math.random()
    layer.options.fillColor=colors[Math.floor(Math.random()*colors.length)]

    layer.on({
        click: onCountryClick,
        mouseover : onCountryMouseover
    })
}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>My Map</h1>
            <Map style={{height: "80vh"}} zoom={5} center={[37.56948,126.97364]}>
                <GeoJSON style={countryStyle} data={countries.features} onEachFeature={onEachCountry} />
            </Map>
            <input type="color" value={color} onChange={colorChange}/>
        </div>
    );
};

export default MyMap;

//1. Zoom & Centers ([x, y]) Required
//2. Add GeoJSON (to fetch data) -> GeoJSON has "data" 
//3. style Map (background -> Map, color the countries -> GeoJSON)
//4. display Pop-Up with onEachFeature
//5. Layer.BindPopUp
//6. Adding Events
//7. REFACTORING
//8. Adding a color picker input= color