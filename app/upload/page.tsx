import { CatalogueButton, HomeButton, UploadButton, DistributorButton, OrderButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import HeaderPage from "@/components/header";
import UploadForm from "@/components/upload-form";

const UploadPage = () => {
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
      <UploadForm />
      <Footer />
    </div>
  );
};

export default UploadPage;
