import axios from 'axios'

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview: 'simplified',
        steps:false,
        access_token:'pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNsc29xa3dheDA3OHkyam5qODk3dmh0MmQifQ.S7EnIX632Kjwbb-uzyTBgQ',
    }
})

export default directionsApi;