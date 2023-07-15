import { useState, useEffect, useRef, useMemo } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { languageChanger } from '../../actions';
import * as s from '../../styles/LanguageSX';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import $ from 'jquery';
import { easings } from '../../styles/CommonsSX';

function Language() {

  easings() // Jquery easings..

  const dispatch = useDispatch()
  const location = useLocation()

  const [ show, setShow ] = useState<boolean>(false)

  const english = useSelector((state: {english:boolean}) => state.english)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  // useEffect(() => {
  //   let langEn: string | null = localStorage.getItem('langEn');
  //   if (langEn === ( null || 'true' )) dispatch(languageChanger(true))
  //   if (langEn === 'false') dispatch(languageChanger(false))
  // })

/*   return (
    <Box sx={s.background({ height, minLand, larPort, larLand, location:location.pathname, percentageResizedHeight })}>
      <Box
        component="img"
        src={lanEn}
        onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(true)) }}
        sx={s.lanEnFlag({ english, minPort, minLand, medPort, medLand, larPort })}
      />
      <Box
        component="img"
        src={lanEs}
        onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(false)) }}
        sx={s.lanEsFlag({ english, minPort, minLand, medPort, medLand, larPort })}
      />
    </Box>
  ) */

  useEffect(() => {
    $(function() {
      if (show) { // show -> hidden
        $(`.buttonShow`)
          .stop()
          .css("left", "0px")
        $(`.flags`)
          .css("left", "-60px")
        // if (!animRunning) {
        //   $(`.buttonShow`)
        //     .css(`animationName`,`shake`)
        //     .css(`animationDuration`,`6s`)
        //     .css(`animationDelay`,`3s`)
        //     .css(`animationIterationCount`,`infinite`)
        // }
        $(`#buttonShow`).on("click", function() {
          $(`#buttonShow`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`.flags`)
            .stop()
            .animate( { left: minPort || minLand ? -20 : -60 }, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
              // isRunning.current = false;
              // if (!isRunning.current) setAnimRunning(false)
            }})
        })
      } 
      
      else if (!show) { // hidden -> show
        $(`.buttonShow`)
          .stop()
          .css("left", "0px")
        $(`.flags`)
          .css("left", "-60px")
        // if (!animRunning) {
        //   $(`.buttonShow`)
        //     .css(`animationName`,`shake`)
        //     .css(`animationDuration`,`6s`)
        //     .css(`animationDelay`,`3s`)
        //     .css(`animationIterationCount`,`infinite`)
        // }
        $(`#buttonShow`).on("click", function() {
          $(`#buttonShow`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`.flags`)
            .stop()
            .animate( { left: minPort || minLand ? -20 : 30 }, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
              // isRunning.current = false;
              // if (!isRunning.current) setAnimRunning(false)
            }})
        })
      }
    })
  },[show, minLand, minPort])

  return (
    <Box sx={s.background}>
      <Box
        sx={s.sliderBox}
        className={`flags`}
        id={`flags`}
      >
        <Box
          component="img"
          src={lanEn}
          onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(true)) }}
          sx={s.lanEnFlag({ english, minPort, minLand, medPort, medLand, larPort })}
        />
        <Box
          component="img"
          src={lanEs}
          onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(false)) }}
          sx={s.lanEsFlag({ english, minPort, minLand, medPort, medLand, larPort })}
        />
      </Box>
      <Button
        className={`buttonShow`}
        id={`buttonShow`}
        sx={s.button}
        onClick={() => { setShow(!show) }}
      >
        <Typography sx={s.buttonTypo}>
          { english ? `LANGUAGE` : `LENGUAJE` }
        </Typography>
      </Button>
    </Box>
  )
}

export default Language;
