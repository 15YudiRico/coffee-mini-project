import { getCatalogues } from "@/lib/data";

const CatalogueTable = async () => {
  const catalogues = await getCatalogues();

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 bg-gray-50">
        <tr>
          <th className="py-3 px-6">NO</th>
          <th className="py-3 px-6">Bean</th>
          <th className="py-3 px-6">Description</th>
          <th className="py-3 px-6">Price/Unit</th>
        </tr>
      </thead>
      <tbody>
        {catalogues.map((catalogue, index) => (
          <tr key={catalogue.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{catalogue.bean}</td>
            <td className="py-3 px-6">{catalogue.description}</td>
            <td className="py-3 px-6">${catalogue.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CatalogueTable;
