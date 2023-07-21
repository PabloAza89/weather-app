import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import * as s from '../../styles/MapSX';

interface mapI {
  latitude: number,
  longitude: number,
}

const Map = ({ latitude, longitude }: mapI)  => {

  const width = useSelector((state: {width:number}) => state.width)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)


  return (
    <Box style={s.test({ width, minPort, minLand, medPort, medLand, larPort, larLand })}>
      <MapContainer
        style={s.background({ width, minPort, minLand, medPort, medLand, larPort, larLand })}
        center={[latitude, longitude]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          //attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='"© <a href=""https://osm.org/copyright"">OpenStreetMap</a> contributors"'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken={`${process.env.REACT_APP_MAP}`}
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </Box>
  )
}

export default Map;