import { CatalogueButton, HomeButton, UploadButton, DistributorButton, OrderButton, CreateButton } from "@/components/buttons";
import DistributorTable from "@/components/distributor-table";
import { Footer } from "@/components/footer";
import HeaderPage from "@/components/header";

const DistributorPage = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <HeaderPage />
      <div className="flex items-center justify-between mb-5">
        <HomeButton />
        <CatalogueButton />
        <OrderButton />
        <DistributorButton />
        <UploadButton />
      </div>
      <DistributorTable />
      <CreateButton />
      <Footer />
    </div>
  );
};

export default DistributorPage;
