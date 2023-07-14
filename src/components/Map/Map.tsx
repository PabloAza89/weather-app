import { useEffect } from "react";
import { Box } from '@mui/material';
import L from "leaflet";

interface mapI {
  latitude: number,
  longitude: number,
}

let map: any

function Map({ latitude, longitude }: mapI) {

  useEffect(() => {

    if (map !== undefined) map.remove();
    map = new L.Map("map", {
      center: new L.LatLng(latitude, longitude),
      minZoom: 1,
      zoom: 5,
    });

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
      attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.REACT_APP_KEY,
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);

  });

  return ( <Box/> )
}

export default Map;
