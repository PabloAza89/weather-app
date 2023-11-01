import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import * as s from '../../styles/MapSX';
import $ from 'jquery';

interface mapI {
  latitude: number,
  longitude: number,
}

const Map = ({ latitude, longitude }: mapI)  => {

  const [ scrollWidth, setScrollWidth ] = useState<number>(0)

  const width = useSelector((state: {width:number}) => state.width)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  useEffect(() => {
    $(function() {
      var scrollDiv = document.createElement("div"); // Creates the div
      scrollDiv.className = "scrollbar-measure";
      document.body.appendChild(scrollDiv);
      $(`.scrollbar-measure`)
        .css("overflowY", "scroll") // Creates a ScrollBar
        .css("width", "fit-content") // Set width to auto considering the ScrollBar width
      typeof scrollDiv.offsetWidth === 'number' ? setScrollWidth(scrollDiv.offsetWidth) : setScrollWidth(0)
      document.body.removeChild(scrollDiv); // Delete the div
    })

  },[])

  return (
    <Box style={s.background({ scrollWidth, width, minPort, minLand })}>
      <MapContainer
        style={s.mapContainer()}
        center={[latitude, longitude]}
        zoom={5}
        scrollWheelZoom={true}
        minZoom={1}
      >
        <TileLayer
          //attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken={`${process.env.REACT_APP_MAP}`}
          //accessToken={'${{ secrets.SECRET_NAME }}'} ////
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </Box>
  )
}

export default Map;
