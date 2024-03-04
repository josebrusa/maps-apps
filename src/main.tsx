import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp.tsx";

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNsc29xbXAydTBjMXQyaXFtZ3RycjdjZDAifQ.bfVUQC9VKAj7NMrK6mrLQQ'


if(!navigator.geolocation) {
  alert('No tienes acceso a la geolocalizacion')
  throw new Error('No tienes acceso a la geolocalizacion') 
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
