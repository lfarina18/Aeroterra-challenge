import { MdDeleteForever } from 'react-icons/md';

export const PolItems = ({
  id,
  description,
  direction,
  phone,
  coordinates,
  category,
  index,
  handleDelete
}) => {
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {direction}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {phone}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {coordinates[1]}, {coordinates[0]}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {category}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        <button className="block mx-auto" onClick={() => handleDelete(id)}>
          <MdDeleteForever className="mx-auto text-red-600 text-3xl cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};
