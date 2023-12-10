import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../Contexts/AuthContext'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function UserBookings() {
  
  const {user} = useContext(AuthContext)
  const[formatDate,setFormatDate] = useState('')

  const userDetail = {
    userId:user && user._id
  }

  const navigate = useNavigate()
  const [userBookingData,setUserBookingData] = useState([])

  const deleteUserBooking = async(bookingdata)=>{
    try {
      const res = await fetch(`${BASE_URL}/booking/cancel/${bookingdata._id}`,{
        method:'delete',
        credentials:'include',
        body:JSON.stringify({})
      })
      const result = await res.json()
      // alert("Successfully deleted the booking")
      getUserBooking()

      if(!res.ok){
        return alert(result.message)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  const getUserBooking = async()=>{
    try {

      const res = await fetch(`${BASE_URL}/booking/user`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(userDetail)
      })

      const result = await res.json()
      setUserBookingData(result.data.userBookings)

      if(!res.ok){
        return alert(result.message)
      }

    } catch (err) {
      alert(err.message)
    }
  }

  const setTourData = (bookingdata)=>{
    sessionStorage.setItem("tourData",JSON.stringify(bookingdata))
    navigate('/tourdetails/edit')
  }

  useEffect(()=>{
    getUserBooking()
    sessionStorage.removeItem("tourData")
  },[])

  return (
    <>
      <div className="mt-5">
        <Container>
          <Row>
            {userBookingData.length > 0 ? (
              userBookingData.map((bookingdata, index) => (
                <Col lg={4} xl={4} md={6} sm={12}>
                  <Card style={{ height: "580px" }} className="mt-5">
                    <Card.Img
                      variant="top"
                      src={`/${bookingdata.tourDetails[0].photo}`}
                      height={"450px"}
                      alt="tour image"
                    />
                    <Card.Body>
                      <Card.Title>
                        {bookingdata.tourDetails[0].title}
                      </Card.Title>
                      <Card.Text>{bookingdata.fullName}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        
                          <i onClick={()=>setTourData(bookingdata)}
                            class="fa-solid fa-pen-to-square"
                            style={{ cursor: "pointer" }}
                          ></i>
                      
                        <i
                          onClick={() => deleteUserBooking(bookingdata)}
                          class="fa-solid fa-trash"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h5>No Booking Records</h5>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserBookings
