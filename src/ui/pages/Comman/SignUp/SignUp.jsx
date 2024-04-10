import React, { useState } from 'react';
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'; // Import your CSS file for custom styles
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function SignUp() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneno: '',
    password: '',
    confirmPassword: ''
  });

  const [address, setAddress] = useState({
    add: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData({ ...formData, [name]: value });
    } else if (name in address) {
      setAddress({ ...address, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
      const formDataWithAddress = { ...formData, address };
      axios({
        method: "post",
        url: "http://localhost:9999/user/signup",
        data: formDataWithAddress,
      })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        setCookie("user", res.data.data);
        setCookie("token", res.data.token);
        if (res.data.data.userType === "admin") navigate("/admin-dashbord");
        else navigate("/");
        toast.success("Register successfully");
      })
      .catch((error) => {
        console.log("-----------  error----------->", error);
      });


     
    
  };

  const validateForm = () => {
    let isValid = true;
  
    // Validation for existing fields
    for (const key in formData) {
      if (!formData[key].trim()) {
        toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
        isValid = false;
      }
    }
  
    // Validation for address fields
    for (const key in address) {
      if (!address[key].trim()) {
        toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
        isValid = false;
      }
    }
  
  
    // Phone number validation
    if (!formData.phoneno.trim()) {
      toast.error('Mobile number is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      toast.error('Mobile number is invalid');
      isValid = false;
    }
  
    // Password validation
    if (!formData.password.trim()) {
      toast.error('Password is required');
      isValid = false;
    } else if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      isValid = false;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      isValid = false;
    }
  
    return isValid;
  };
  

  return (
    <div className="signup-container">
      <div className='d-flex justify-content-center'>
        <Form onSubmit={handleSubmit} className='signup-form '>
          <h1 className='text-center'>SignUp</h1>
          <hr />
          {/* Existing fields */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
          </Row>
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
              type="number"
              name="phoneno"
              id="phoneno"
              placeholder="Mobile No"
              value={formData.phoneno}
              onChange={handleChange}
              required
              className="input-field"
            />
          </FormGroup>
          {/* New address fields */}
          <Row>
            <Col md={6}>

              <FormGroup>
                <Input
                  type="text"
                  name="add"
                  id="add"
                  placeholder="Address"
                  value={address.add}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
            <Col md={6}>

              <FormGroup>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>

              <FormGroup>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  value={address.state}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
            <Col md={6}>

              <FormGroup>
                <Input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </FormGroup>
            </Col>
          </Row>
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
          <FormGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input-field"
            />
          </FormGroup>

          {/* Show Password checkbox and Sign Up button */}
          <FormGroup check className="checkbox">
            <Label check>
              <Input type="checkbox" onChange={toggleShowPassword} />{' '}
              Show Password
            </Label>
          </FormGroup>
          <Button type="submit" className="submit-button">SignUp</Button>

          <p className='pt-3'>If Already have account <span onClick={() => navigate("/login")}> <a href="">Login</a></span></p>
        </Form>
      </div>
    </div>
  );
}
