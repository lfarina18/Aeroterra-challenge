import Search from '@arcgis/core/widgets/Search';
import { useEffect, useRef, useState } from 'react';
import { createMapView } from '../utils/map';
import Graphic from '@arcgis/core/Graphic';

export const MapView = ({ basemap, zoom, formVal }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef();
  const { description, direction, phone, coordinates, category } = formVal;

  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { basemap };
    const viewProperties = zoom;
    const coordProperties = coordinates;
    // Create map and view
    setView(
      createMapView(
        mapRef.current,
        mapProperties,
        viewProperties,
        coordProperties
      )
    );
    return () => {
      view && view.destroy();
    };
  }, [basemap, zoom, formVal]);

  useEffect(() => {
    if (!view) return;
    const search = new Search({
      view: view,
    });
    view.ui.add(search, 'top-right');

    if (formVal.coordinates) {
      const point = {
        type: 'point',
        longitude: formVal.coordinates[0],
        latitude: formVal.coordinates[1],
      };

      const markerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 2,
        },
      };

      const lineAtt = {
        Descripción: description,
        Dirección: direction,
        Teléfono: phone,
        'Coord X-Y': `${coordinates[0]}, ${coordinates[1]}`,
        Categoría: category,
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: lineAtt,
        popupTemplate: {
          title: 'Punto de interés',
          content: [
            {
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'Descripción',
                },
                {
                  fieldName: 'Dirección',
                },
                {
                  fieldName: 'Teléfono',
                },
                {
                  fieldName: 'Coord X-Y',
                },
                {
                  fieldName: 'Categoría',
                },
              ],
            },
          ],
        },
      });

      view.graphics.add(pointGraphic);
    }
    view.map.basemap = basemap;
  }, [view, basemap]);

  return <div style={{ height: 600 }} ref={mapRef} />;
};
