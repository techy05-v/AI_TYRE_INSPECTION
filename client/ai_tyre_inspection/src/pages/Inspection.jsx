import { useState } from "react";
import Layout from "../components/Layout";

const Inspection = () => {
  const [vehicle, setVehicle] = useState("");
  const [tyrePosition, setTyrePosition] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      vehicle,
      tyrePosition,
      image,
    });
  };

  return (
    <Layout>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">New Inspection</h1>
          <p className="text-gray-500">Upload a tyre image for AI analysis</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Vehicle</label>

              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select Vehicle</option>

                <option value="KL08AB1234">KL08AB1234</option>

                <option value="KL07XY4567">KL07XY4567</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Tyre Position</label>

              <select
                value={tyrePosition}
                onChange={(e) => setTyrePosition(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="">Select Position</option>

                <option value="Front Left">Front Left</option>

                <option value="Front Right">Front Right</option>

                <option value="Rear Left">Rear Left</option>

                <option value="Rear Right">Rear Right</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Upload Tyre Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Analyze Tyre
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Inspection;
