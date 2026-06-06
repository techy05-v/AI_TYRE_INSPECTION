import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4">
          Login
        </h1>

        <input
          className="border w-full p-2 mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border w-full p-2 mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;