import 'react'
import Navbar from './components/Navbar'
import { Login, SignUp } from './components/Button'
import { BiAdjust } from "react-icons/bi";
function App() {
  return (
    <>
      <div>
      <Navbar/>
      </div>
      <div>
      <Login/>
      </div>
      <div>
      <SignUp/>
      </div>
      <div>
      <BiAdjust />
      </div>
        </>
  )
}

export default App