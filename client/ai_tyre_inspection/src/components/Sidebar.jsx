import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold p-6">
        Tyre AI
      </h1>

      <nav className="flex flex-col gap-4 p-4">
        <Link to="/">Dashboard</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/inspections">Inspections</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;