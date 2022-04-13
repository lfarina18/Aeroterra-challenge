import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from "@arcgis/core/config";

export const createMapView = (mapRef, basemap, zoom, coord = [-58.3724715, -34.595986]) => {
  esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY;
  const map = new Map(basemap);
  return new MapView({
    container: mapRef,
    map: map,
    center: coord, // Longitude, latitude
    zoom: zoom,
  });
};
