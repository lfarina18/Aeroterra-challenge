import Search from '@arcgis/core/widgets/Search';
import { useEffect, useRef, useState } from 'react';
import { createMapView } from '../utils/map';
import newPopup from '../utils/popup';



export const MapView = ({ basemap, zoom, formVal }) => {
  const [view, setView] = useState(null);
  const [search, setSearch] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { basemap };
    const viewProperties = zoom;
    // Create map and view
    setView(
      createMapView(
        mapRef.current,
        mapProperties,
        viewProperties,
      )
    );
    return () => {
      view && view.destroy();
    };
  }, [basemap, zoom, formVal]);

  useEffect(() => {
    if (!view) return;
    if(!search) {
      const s = new Search({
        view: view,
      });
      view.ui.add(s, 'top-right');
      setSearch(true);
    }

    if (formVal[0].coordinates) {
      
     formVal.forEach(item => {
      newPopup(view, item);
     });
     
    }
    view.map.basemap = basemap;
  }, [view, basemap, formVal]);

  return <div style={{ height: 600 }} ref={mapRef} />;
};
