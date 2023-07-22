import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import cloudDontAgree from '../../images/cloudDontAgree.gif';
import * as s from '../../styles/ErrorSX';
import loadingImage from '../../images/loadingImage.png';
import { wrongPath } from '../../actions';

function Error() {

  const dispatch = useDispatch()

  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)

  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    dispatch(wrongPath(true))
      return () => {
        dispatch(wrongPath(false))
      }
  },[dispatch])

  return (
    <Box sx={s.background({ minPort, minLand, medPort, medLand })}>
      <Box sx={s.leftRightHelper({ minPort, minLand })} />
      <Box sx={s.mainContainer({ minPort, minLand, medPort, medLand })}>
        <Box>
          <Box
            component="img"
            src={cloudDontAgree}
            onLoad={() => setLoaded(true)}
            sx={s.errorGif({ loaded, minPort, minLand, medPort, medLand })}
          />
          <Box
            component="img"
            src={loadingImage}
            sx={s.placeholderAnimation({ loaded, minPort, minLand, medPort, medLand })}
          />
        </Box>
        <Typography sx={s.message({ darkMode, minPort, minLand, medPort, medLand })}>
          { english ? `This page does not exist.` : `Esta página no existe.` }
        </Typography>
      </Box>
      <Box sx={s.leftRightHelper({ minPort, minLand })} />
    </Box>
  )
}

export default Error;