import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { languageChanger } from '../../actions';
import * as s from '../../styles/LanguageSX';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import $ from 'jquery';
import { easings } from '../../styles/CommonsSX';

function Language() {

  easings() // Jquery easings..

  const dispatch = useDispatch()

  const [ show, setShow ] = useState<boolean>(false)

  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)

  useEffect(() => {
    $(function() {
      
      if (show) { /// show -> hidden
        $(`.buttonShow`)
          .stop()
          .css("left", "0px")
        $(`.flags`)
          .css("left", "-60px")
        $(`#buttonShow`).on("click", function() {
          $(`#buttonShow`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`.flags`)
            .stop()
            .animate( { left: minPort || minLand ? -60 : -60 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        })
      }

      else if (!show) { // hidden -> show
        $(`.buttonShow`)
          .stop()
          .css("left", "0px")
        $(`.flags`)
          .css("left", "-60px")
        $(`#buttonShow`).on("click", function() {
          $(`#buttonShow`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`.flags`)
            .stop()
            .animate( { left: minPort || minLand ? 30 : 30 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        })
      }
    })
  },[show, minLand, minPort])

  // useEffect(() => {
  //   let langEn: string | null = localStorage.getItem('langEn');
  //   if (langEn === ( null || 'true' )) dispatch(languageChanger(true))
  //   if (langEn === 'false') dispatch(languageChanger(false))
  // },[])

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
          sx={s.lanEnFlag({ english })}
        />
        <Box
          component="img"
          src={lanEs}
          onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(false)) }}
          sx={s.lanEsFlag({ english })}
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
