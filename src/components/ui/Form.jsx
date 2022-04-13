import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import validateCoords from '../../utils/validateCoords';

export const Form = ({setFormValues, values}) => {
  const [inputValue, handleInputChange] = useForm({
    description: '',
    direction: '',
    phone: '',
    coordinates: '',
    category: '',
  });
  const [coordLat, setCoordLat] = useState('');
  const [coordLng, setCoordLng] = useState('');

  const { description, direction, phone, category } = inputValue;

  const handleCoordinatesX = (e) => {
    setCoordLat(e.target.value);
  };
  const handleCoordinatesY = (e) => {
    setCoordLng(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lat = Number(coordLat);
    const lng = Number(coordLng);

    if(!validateCoords(lat, lng)) return;

    setFormValues({ ...inputValue, coordinates: [lng, lat] });
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg bg-neutral-200 max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="InputDescription"
            className="form-label inline-block mb-2 text-gray-700">
            Descripción
          </label>
          <input
            type="text"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="InputDescription"
            aria-describedby="emailHelp"
            placeholder="Ej: AEROTERRA S.A."
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="InputDirection"
            className="form-label inline-block mb-2 text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="InputDirection"
            placeholder="Ej: Av. Eduardo Madero 1020, C1001 CABA"
            name="direction"
            value={direction}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="InputPhone"
            className="form-label inline-block mb-2 text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="InputPhone"
            placeholder="Ej: 54 9 11 5272 0900"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="InputCoord"
            className="form-label inline-block mb-2 text-gray-700">
            Coordenadas X e Y
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="InputPhone"
              placeholder="Ej. Lat: -34.595986"
              name="coordinatesX"
              value={coordLat}
              onChange={handleCoordinatesX}
            />
            <input
              type="number"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="InputPhone"
              placeholder="Ej: Long: -58.3724715"
              name="coordinatesY"
              value={coordLng}
              onChange={handleCoordinatesY}
            />
          </div>
        </div>

        <div className="mb-4">
          <select
            name="category"
            onChange={handleInputChange}
            defaultValue={category}
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <option value="" disabled>
              Seleccione una categoría
            </option>
            <option>Comercial</option>
            <option>Residencial</option>
            <option>Mixta</option>
          </select>
        </div>

        <button
          type="submit"
          className="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">
          Agregar
        </button>
      </form>
    </div>
  );
};
