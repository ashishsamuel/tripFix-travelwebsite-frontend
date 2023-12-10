import React, { useContext, useState } from 'react'
import './Login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../Assets/customerImages/register.png'
import userIcon from '../Assets/customerImages/usericon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../Contexts/AuthContext.jsx'
import { BASE_URL } from '../utils/config.js'


function Register() {
  const navigate =useNavigate()

  const [credentials,setCredentials] = useState({
    username:undefined,email:undefined,password:undefined
  })

  const {dispatch} = useContext(AuthContext)

  const handleChange = (e)=>{
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleRegister = async (e)=>{
    e.preventDefault()
    
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok){
        alert(result.message)
      }

      dispatch({type:"REGISTER_SUCCESS"})
      navigate("/login")

    } catch (err) {
      alert(err.message)
    }

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

                <Form onSubmit={handleRegister}>
                <FormGroup className='mb-3'>
                    <input type="text" placeholder='Enter your Username' id="username" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <input type="text" required placeholder='Enter your Email' id="email" onChange={handleChange}/>
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
      <ToastContainer position='top-right' theme='colored' autoClose='2000'/>
      </Container>
    </section>
  )
}

export default Register
