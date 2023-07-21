import { useEffect, useState, useRef } from "react";
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
/* import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer';
import { Marker } from 'https://cdn.esm.sh/react-leaflet/Marker';
import { Popup } from 'https://cdn.esm.sh/react-leaflet/Popup'; */
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import L from "leaflet";

// interface mapI {
//   latitude: number,
//   longitude: number,
// }

// let map: any

//function Maps({ latitude, longitude }: mapI) {

function Map() {


  // let currentPos = useRef({ lat: 0, lng: 0, zoom: 0 })
  // const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  // const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  // const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  // const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  // const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  // const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  // // lat && Lng Unequal Checker
  // if ((currentPos.current.lat || currentPos.current.lng) === 0 ) currentPos.current = { lat: latitude, lng: longitude, zoom: 5 }

  // useEffect(() => {

  //   if (map !== undefined) map.remove();
  //   map = new L.Map("map", {
  //     center: new L.LatLng(currentPos.current.lat, currentPos.current.lng),
  //     minZoom: 1,
  //     zoom: currentPos.current.zoom,
  //   });

  //   L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
  //     attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
  //     maxZoom: 18,
  //     id: "mapbox/streets-v11",
  //     tileSize: 512,
  //     zoomOffset: -1,
  //     accessToken: process.env.REACT_APP_MAP,
  //   }).addTo(map);

  //   L.marker([latitude, longitude]).addTo(map);
  //   map.on('moveend', () => currentPos.current = { lat: map.getCenter().lat, lng: map.getCenter().lng, zoom: map.getZoom() })

  //   //return map

  // },[/* minPort, minLand, medPort, medLand, larPort, larLand */]);

  //return ( <Box /> )
  //return map

  //const position = [51.505, -0.09]

  return ( 
  //   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  //   <TileLayer
  //     //accessToken={`${process.env.REACT_APP_MAP}`}
  //     //id="mapbox/streets-v11"
  //     //attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
  //     //url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  
  //   />
  //   <Marker position={[51.505, -0.09]}>
  //     <Popup>
  //       A pretty CSS3 popup. <br /> Easily customizable.
  //     </Popup>
  //   </Marker>
  // </MapContainer>

    <MapContainer style={{width:'90%',height:'99%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        //attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        id="mapbox/streets-v11"
        accessToken={`${process.env.REACT_APP_MAP}`}
      />
      <Marker position={[51.505, -0.09]} />
    </MapContainer>
 )
}

export default Map;