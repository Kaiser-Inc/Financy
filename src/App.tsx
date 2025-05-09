import { useState } from 'react'
import { SignIn } from './screens/SignIn'
import { SignUp } from './screens/SignUp'
import './styles.css'

export function App() {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    <div className=" flex flex-col min-h-dvh bg-kaiserGray-800 justify-center items-center font-display">
      {isSignIn ? <SignIn /> : <SignUp />}
      <button
        type="button"
        onClick={() => setIsSignIn(!isSignIn)}
        className=" text-kaiserGray-400 font-bold bg-kaiserPurple-low rounded-sm p-2"
      >
        {isSignIn ? 'Cadastrar' : 'Logar'}
      </button>
    </div>
  )
}
