import { useState } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const onFinishHandler = async (data) => {
    data.preventDefault()
    // console.log(formData);
    try {
      const res = await axios.post('/api/v1/user/register', formData)
      if (res.data.success) {
        console.log("registered success");
        navigate('/login')
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Header />
      <div className="login-page">
        <form onSubmit={onFinishHandler} className="login-content">
          <h1 className="">Register</h1>
          <input
            className="login-input"
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter your Username"
          />
          <input
            className="login-input"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <p className="">
            Already have an accound? <a href="/login">Login</a>
          </p>
          <button type="submit" className="login-btn" style={{ marginTop: "5rem" }}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
