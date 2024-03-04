import axios from 'axios'

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNsc29xa3dheDA3OHkyam5qODk3dmh0MmQifQ.S7EnIX632Kjwbb-uzyTBgQ',
    }
})

export default searchApi;