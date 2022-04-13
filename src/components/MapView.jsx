import Search from '@arcgis/core/widgets/Search';
import { useEffect, useRef, useState } from 'react';
import { createMapView } from '../utils/map';
import Graphic from "@arcgis/core/Graphic";

export const MapView = ({ basemap, zoom, formVal }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { basemap };
    const viewProperties = zoom;
    const coordProperties = formVal.coordinates;
    // Create map and view
    setView(
      createMapView(
        mapRef.current,
        mapProperties,
        viewProperties,
        coordProperties,
        
      )
    );
    return () => {
      view && view.destroy();
    };
  }, [basemap, zoom, formVal]);

  useEffect(() => {
    if (!view) return;

    const search = new Search({
      //Add Search widget
      view: view,
    });
    view.ui.add(search, 'top-right'); //Add to the map
    
    const point = {
      type: "point", // autocasts as new Point()
      longitude: -58.3724715,
      latitude: -34.595986
    };

    const markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 40],
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2
      }
    };

    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    view.graphics.add(pointGraphic);

    view.map.basemap = basemap;
  }, [view, basemap]);

  return <div style={{ height: 600 }} ref={mapRef} />;
};
