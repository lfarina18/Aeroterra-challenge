import React from 'react';

export const Form = () => {
  return (
    <div className=" p-6 rounded-lg shadow-lg bg-neutral-200 max-w-md">
      <form>
        <div className="mb-6">
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
          />
        </div>

        <div className="mb-6">
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
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="InputPhone"
            className="form-label inline-block mb-2 text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="InputPhone"
            placeholder="Ej: Av. Eduardo Madero 1020, C1001 CABA"
          />
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
