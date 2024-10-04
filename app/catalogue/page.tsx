import { CatalogueButton, HomeButton, UploadButton, DistributorButton, OrderButton } from "@/components/buttons";
import CatalogueTable from "@/components/catalogue-table";
import { Footer } from "@/components/footer";
import HeaderPage from "@/components/header";

const CataloguePage = () => {
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
      <CatalogueTable />
      <Footer />
    </div>
  );
};

export default CataloguePage;
