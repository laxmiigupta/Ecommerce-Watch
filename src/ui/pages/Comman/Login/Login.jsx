import axios from 'axios';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Login() {

  const [cookies, setCookie] = useCookies([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: formData,
    })
    .then((res) => {
      setCookie("user", res.data.data);
      setCookie("token", res.data.token);
      if (res.data.data.userType === "admin") navigate("/admin-dashbord");
      else navigate("/");
      toast.success("login successfully");
    })
    .catch((error) => {
      console.log("-----------  error----------->", error);
    });

    // if (validateForm()) {
      
    //   console.log('Login submitted:', formData);
    //   toast.success('Login successful');
    // }
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.email.trim()) {
      toast.error('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Email address is invalid');
      isValid = false;
    }

    if (!formData.password.trim()) {
      toast.error('Password is required');
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="login-container">
      <div className='d-flex justify-content-center'>
        <Form onSubmit={handleSubmit} className='login-form '>
          <h1 className='text-center'>Login</h1>
          <hr />
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </FormGroup>
          <FormGroup check className="checkbox">
            <Label check>
              <Input type="checkbox" onChange={toggleShowPassword} />{' '}
              Show Password
            </Label>
          </FormGroup>
          <Button type="submit" color="primary" className="submit-button">Login</Button>
          <Row className="mt-3">
            <Col>
              <p>If you don't have an account <span onClick={() => navigate("/signup")}><a href="#">SignUp</a></span></p>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
