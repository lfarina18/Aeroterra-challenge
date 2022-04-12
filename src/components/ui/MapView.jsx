import { useEffect, useRef, useState } from 'react';
import { createMapView } from '../../utils/map';

export const MapView = ({ basemap, zoom }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { basemap };
    const viewProperties = zoom;
    // Create map and view
    setView(createMapView(mapRef.current, mapProperties, viewProperties));

    return () => {
      view && view.destroy();
    };
  }, [basemap, zoom]);

  useEffect(() => {
    if (!view) return;
    view.map.basemap = basemap;
  }, [view, basemap]);


  // useEffect(() => {
  //   if (!view) return;
  //   const handle = view.on('click', onClick);
  //   return function removehandle() {
  //    handle && handle.remove();
  //   }
  // },[view, onClick]);


  return <div style={{ height: 400 }} ref={mapRef} />;
};
