import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export const createMapView = (mapRef, basemap, zoom) => {
  const map = new Map(basemap);
  return new MapView({
    container: mapRef,
    map: map,
    center: [-58.3724715, -34.595986],
    zoom: zoom,
  });
};
