// import React, { createContext, useEffect, useState } from 'react'
// export const navigateLinkAuthorizationContext = createContext()

// function NavigateLinkAuth({children}) {
//     const [isAuthorized,setIsAuthorized] = useState(false)
//     useEffect(() => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       console.log(user);
    
//       setIsAuthorized((prevIsAuthorized) => {
//         if (user !== null) {
//           console.log("there is user");
//           return true;
//         } else {
//           console.log("there is no user");
//           return false;
//         }
//       });
//     }, []);
    
//       return (
//         <navigateLinkAuthorizationContext.Provider value={{isAuthorized,setIsAuthorized}}>
//             {children}
//         </navigateLinkAuthorizationContext.Provider>
//       )
// }

// export default NavigateLinkAuth
