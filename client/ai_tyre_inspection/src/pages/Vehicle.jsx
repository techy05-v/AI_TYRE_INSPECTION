import Layout from "../components/Layout";

const Vehicles = () => {
  const vehicles = [
    {
      id: 1,
      number: "KL08AB1234",
      model: "Toyota Innova",
      status: "Healthy",
    },
    {
      id: 2,
      number: "KL07XY4567",
      model: "Honda City",
      status: "Inspection Due",
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Vehicles</h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Vehicle
          </button>
        </div>

        <div className="grid gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-lg shadow p-4 border"
            >
              <h2 className="font-semibold text-lg">
                {vehicle.number}
              </h2>

              <p className="text-gray-600">
                {vehicle.model}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded text-sm ${
                  vehicle.status === "Healthy"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {vehicle.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Vehicles;