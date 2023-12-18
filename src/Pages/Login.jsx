import React, { useContext, useState } from 'react'
import './Login.css'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../Assets/customerImages/login.png'
import userIcon from '../Assets/customerImages/usericon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../Contexts/AuthContext.jsx'
import { BASE_URL } from '../utils/config.js'
import { navigateLinkAuthorizationContext } from '../Contexts/NavigateLinkAuth.jsx'

function Login() {

  const navigate =useNavigate()
  const {dispatch} = useContext(AuthContext)
  const {isAuthorized,setIsAuthorized} = useContext(navigateLinkAuthorizationContext)


  const [credentials,setCredentials] = useState({
    email:undefined,password:undefined
  })


  const handleChange = (e)=>{
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleLogin = async (e)=>{
    e.preventDefault()

    dispatch({type:'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        // credentials:'include',
        body:JSON.stringify(credentials)
      })

      const result = await res.json()
      if(!res.ok){
        alert(result.message)
      }


      dispatch({type:"LOGIN_SUCCESS",payload:result.data})
      setIsAuthorized(true)
      navigate('/')
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE",payload:err.message})
    }
    
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg={8} className='m-auto'>
            <div className="login_container">
              <div className="login_img">
                <img src={loginImg} alt="login image" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="user icon image" />
                </div>

                <h2>Login</h2>

                <Form onSubmit={handleLogin}>
                  <FormGroup className='mb-3'>
                    <input type="text" placeholder='Enter your Email' required id="email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <input type="password" placeholder='Enter your password' required id="password" onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn btn-dark auth_btn mb-3' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position='top-right' theme='colored' autoClose='2000'/>
    </section>
  )
}

export default Login
