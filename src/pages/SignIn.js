import React, { useState } from "react";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", credentials);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Sign In</h2>
      <form onSubmit={handleLogin} className="shadow p-4 rounded bg-light w-50 mx-auto">
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" className="form-control mb-3" required />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" className="form-control mb-3" required />
        <div className="text-center">
          <button type="submit" className="btn btn-success px-4">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;