import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow p-5 rounded">
          <h3>Total Vehicles</h3>
          <p className="text-3xl font-bold">
            120
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h3>Total Inspections</h3>
          <p className="text-3xl font-bold">
            540
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h3>Critical Tyres</h3>
          <p className="text-3xl font-bold text-red-500">
            12
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h3>Healthy Tyres</h3>
          <p className="text-3xl font-bold text-green-500">
            528
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;