import UpdateForm from "@/components/edit-form";
import { getDistributorByID } from "@/lib/data";
import { notFound } from "next/navigation";

const EditDistributorPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const distributor = await getDistributorByID(id);

  if (!distributor) {
    notFound();
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Distributor</h1>
      <UpdateForm distributor={distributor} />
    </div>
  );
};

export default EditDistributorPage;
