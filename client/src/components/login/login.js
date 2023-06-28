import Header from "../header/header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-page">
        <form className="login-content">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <input
            className="login-input"
            type="text"
            placeholder="Enter your Username"
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter your password"
          />
          <p className="mt-5 mb-5">
            Don't have an accound? <a href="/register">Register now!</a>
          </p>
          <button className="login-btn" style={{ marginTop: "5rem" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
