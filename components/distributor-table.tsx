import { getDistributors } from "@/lib/data";
import { EditButton } from "./buttons";

const DistributorTable = async () => {
  const distributors = await getDistributors();

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 bg-gray-50">
        <tr>
          <th className="py-3 px-6">NO</th>
          <th className="py-3 px-6">Distributor Name</th>
          <th className="py-3 px-6">City</th>
          <th className="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        {distributors.map((distributor, index) => (
          <tr key={distributor.id} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{distributor.distributor_name}</td>
            <td className="py-3 px-6">{distributor.city}</td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={distributor.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DistributorTable;
