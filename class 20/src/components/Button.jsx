// import karo ga is component ko bhi

import'react'
import "./Button.css"
function Login() {
  return (
    <div className='login-btn' >
        <button  >Login</button>
    </div>
  )
}

// error a raha ha obiviously 

function SignUp() {
    return (
      <div className='submit-btn' >
          <button >SignUp</button>
      </div>
    )
  }

export {Login , SignUp} ;
