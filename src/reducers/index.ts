interface citiesI {
  id: number,
  name: string,
  country: string,
  min: number,
  max: number,
  wind: number,
  temp: number,
  weather: string,
  img: string,
  clouds: number,
  latitude: number,
  longitude: number,
}

interface initialStateI {
  wrongPath: boolean,
  cities: citiesI[],
  english: boolean,
  darkMode: boolean,
  width: number,
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  currentWidth: number,
  percentageResizedHeight: number,
}

const initialState: initialStateI = {
  wrongPath: false,
  cities: [],
  english: localStorage.getItem('langEn') === null ? true : JSON.parse(`${localStorage.getItem('langEn')}`),
  darkMode: localStorage.getItem('night') === null ? false : JSON.parse(`${localStorage.getItem('night')}`),
  width: window.screen.width,
  height: window.screen.height,
  minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  currentWidth: window.innerWidth,
  percentageResizedHeight: window.innerHeight / window.screen.height,
}

const reducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'WRONG_PATH':
      return {
        ...state,
        wrongPath: action.payload
      };
    case 'ADD_CITY':
      return {
        ...state,
        cities: action.payload
      };
    case 'DELETE_CITY':
      const clonedCities = [...state.cities];
      let indexToDelete = clonedCities.map(e => e.id).indexOf(action.payload)
      clonedCities.splice(indexToDelete, 1);
      return {
        ...state,
        cities: clonedCities
      };
    case 'LANGUAGE_CHANGER':
      return {
        ...state,
        english: action.payload
      };
    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: action.payload
    };
    case 'SET_WIDTH':
      return {
        ...state,
        width: action.payload
      };
    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.payload
      };
    case 'MIN_PORT':
      return {
        ...state,
        minPort: action.payload
      };
    case 'MIN_LAND':
      return {
        ...state,
        minLand: action.payload
      };
    case 'MED_PORT':
      return {
        ...state,
        medPort: action.payload
      };
    case 'MED_LAND':
      return {
        ...state,
        medLand: action.payload
      };
    case 'LAR_PORT':
      return {
        ...state,
        larPort: action.payload
      };
    case 'LAR_LAND':
      return {
        ...state,
        larLand: action.payload
      };
    case 'CURRENT_WIDTH':
      return {
        ...state,
        currentWidth: action.payload
      };
    case 'PERCENTAGE_RESIZED_HEIGHT':
      return {
        ...state,
        percentageResizedHeight: action.payload
      };
    default:
      return state
  }
};

export default reducer