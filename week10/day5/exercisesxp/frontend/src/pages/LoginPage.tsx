return (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Login Page</h1>

    {error && <p className="text-red-500 mb-2">{error}</p>}

    <input
      className="input input-bordered w-full mb-2"
      placeholder="email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      className="input input-bordered w-full mb-4"
      placeholder="password"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
  </div>
);