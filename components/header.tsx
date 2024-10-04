import Image from "next/image";
import logo from "../app/cofee_shop.png";

const HeaderPage = () => {
  return (
    <div className="flex items-center justify-start gap-1 mb-5">
      <Image src={logo} width={150} height={150} alt="LOGO COFFEE" />
      <div>
        <h1 className="text-3xl text-gray-800">Coffee Valley</h1>
        <h3 className="text-gray-600">Taste the love in every cup!</h3>
        <h3>One Alewife Center 3rd Floor</h3>
        <h3>Cambridge, MA 02140</h3>
      </div>
    </div>
  );
};

export default HeaderPage;
