export const BasemapSelect = ({ changeBasemap }) => {
  const typeMap = [
    'satellite',
    'hybrid',
    'terrain',
    'oceans',
    'osm',
    'dark-gray-vector',
    'gray-vector',
    'streets-vector',
    'topo-vector',
    'streets-night-vector',
    'streets-relief-vector',
    'streets-navigation-vector',
  ];

  const options = (e) => {
    changeBasemap(e.target.value);
  };

  return (
    <div className="flex">
      <div className="m-3 xl:w-96">
        <select
          onChange={options}
          defaultValue=""
          className="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example">
          <option value="" disabled>
            Seleccione el tipo de mapa
          </option>
          {typeMap.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
