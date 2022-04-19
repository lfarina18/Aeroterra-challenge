import { useState } from 'react';
import { BasemapSelect } from '../BasemapSelect';
import { MapView } from '../MapView';

export const MapPage = ({ formVal }) => {
  const [basemap, setBasemap] = useState('topo-vector');

  return (
    <>
      

      <MapView basemap={basemap} zoom="11" formVal={formVal} />
      <BasemapSelect value={basemap} changeBasemap={setBasemap} />
    </>
  );
};
