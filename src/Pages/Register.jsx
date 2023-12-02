import React, { useState } from 'react'
import './Login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import registerImg from '../Assets/customerImages/register.png'
import userIcon from '../Assets/customerImages/usericon.png'


function Register() {

  const [credentials,setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
})
  const handleChange = (e)=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleClick = (e)=>{
    e.preventDefault()
    
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8} className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="login image" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="user icon image" />
                </div>

                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                <FormGroup className='mb-3'>
                    <input type="text" required placeholder='Enter your Username' id="username" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <input type="email" required placeholder='Enter your Email' id="email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <input type="password" required placeholder='Enter your password' id="password" onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn btn-dark auth_btn mb-3' type='submit'>Register</Button>
                </Form>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
