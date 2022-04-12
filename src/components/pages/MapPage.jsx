import { useState } from 'react';
import { BasemapSelect } from '../ui/BasemapSelect';
import { MapView } from '../ui/MapView';

export const MapPage = () => {
  const [basemap, setBasemap] = useState('topo-vector');
  
  
  return (
    <>
      <MapView basemap={basemap} zoom="13" />
      <BasemapSelect value={basemap} changeBasemap={setBasemap} />
    </>
  );
};
