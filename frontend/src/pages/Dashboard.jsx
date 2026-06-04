import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } =
    useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>
        Welcome {user?.name}
      </h2>

      <p>{user?.email}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;