import Header from "../header/header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="login-page">
        <form className="login-content">
          <h1 className="">Register</h1>
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
          <p className="">
            Already have an accound? <a href="/login">Login</a>
          </p>
          <button className="login-btn" style={{ marginTop: "5rem" }}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
