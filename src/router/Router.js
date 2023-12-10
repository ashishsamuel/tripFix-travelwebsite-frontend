import React, { useContext, useLayoutEffect } from 'react'
import Home from '../Pages/Home';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ThankYou from '../Pages/ThankYou';
import { tokenAuthorizationContext } from '../Contexts/TokenAuth';
import UserProfile from '../Pages/UserProfile';
import About from '../Pages/About';
import TourdetailsupdatePage from '../Pages/TourdetailsupdatePage';
import UserBookings from '../Pages/UserBookings';


const Router = () => {
  const location = useLocation();

   // Scroll to top if path changes
   useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorizationContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/user-profile' element={<UserProfile/>}/>
        <Route path='/bookings' element={<UserBookings/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/tourdetails/edit' element={<TourdetailsupdatePage/>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
