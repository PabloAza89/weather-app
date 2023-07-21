import { useEffect, useState, useRef } from "react";
import { Box } from '@mui/material';
import L from "leaflet";

interface mapI {
  latitude: number,
  longitude: number,
}

let map: any

function Map({ latitude, longitude }: mapI) {

  let currentPos = useRef({ lat: 0, lng: 0, zoom: 0 })

  // lat && Lng Unequal Checker
  if ((currentPos.current.lat || currentPos.current.lng) === 0 ) currentPos.current = { lat: latitude, lng: longitude, zoom: 5 }

  useEffect(() => {

    if (map !== undefined) map.remove();
    map = new L.Map("map", {
      center: new L.LatLng(currentPos.current.lat, currentPos.current.lng),
      minZoom: 1,
      zoom: currentPos.current.zoom,
    });

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
      attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.REACT_APP_MAP,
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
    map.on('moveend', () => currentPos.current = { lat: map.getCenter().lat, lng: map.getCenter().lng, zoom: map.getZoom() })

  });

  return ( <Box /> )
}

export default Map;