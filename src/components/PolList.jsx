import { PolItems } from "./PolItems";

export const PolList = ({handleDelete, pol}) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Dirección
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Teléfono
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Coordenadas (X-Y)
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Categoría
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left">
                    Borrar
                  </th>
                </tr>
              </thead>
              <tbody>
                {pol.map((item, index) => (
                  <PolItems
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    direction={item.direction}
                    phone={item.phone}
                    index={index}
                    coordinates={item.coordinates}
                    category={item.category}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
