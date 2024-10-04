import { formatDate } from "@/lib/utils";

export const Footer = () => {
  const date = Date.now();
  return (
    <div className="text-center mt-5 text-gray-800 text-lg">
      <h1>{formatDate(date)}</h1>
    </div>
  );
};
