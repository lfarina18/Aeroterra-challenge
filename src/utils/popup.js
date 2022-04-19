import Graphic from '@arcgis/core/Graphic';

const newPopup = (view, formVal) => {
    
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
      Descripción: formVal.description,
      Dirección: formVal.direction,
      Teléfono: formVal.phone,
      'Coord X-Y': `${formVal.coordinates[0]}, ${formVal.coordinates[1]}`,
      Categoría: formVal.category,
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

export default newPopup;

