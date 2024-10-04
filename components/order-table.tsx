const OrderTable = async () => {
  return (
    <div className="w-full text-sm text-left text-gray-500 border">
      <div className="mb-3">
        <h1 className="text-2xl font-medium text-gray-900">Bean of the Day</h1>
        <h3>Cubita</h3>
      </div>

      <div className="mb-3">
        <h1 className="text-2xl font-medium text-gray-900">Sale Price</h1>
        <h3>$11.00</h3>
      </div>

      <div className="mb-3">
        <h1 className="text-2xl font-medium text-gray-900">Descriptions</h1>
        <h3>Cubita Coffe is sun dried and hand sorted. It originates from an elevation of over 2000 meters in the Andes Mountains of Ecuador, Which is located closest to the sun on the Equator. Superb aroma and rich flavor.</h3>
      </div>
    </div>
  );
};

export default OrderTable;
