import { Eye } from 'lucide-react'
import Logo from '../assets/kaiser-removebg-preview 1.svg'

export function SignIn() {
  return (
    <div className=" flex flex-col justify-center items-center text-gray-100 w-full p-8 gap-8">
      <img src={Logo} alt="" />
      <form className=" w-1/2 flex flex-col flex-1 space-y-4">
        <div className=" w-full bg-kaiserGray-900 p-2 rounded-md">
          <input type="text" placeholder="Email" className=" w-full" />
        </div>
        <div className=" w-full bg-kaiserGray-900 p-2 rounded-md flex">
          <input type="text" placeholder="Senha" className=" w-full" />
          <Eye className=" text-kaiserGray-400" />
        </div>

        <button
          type="submit"
          className=" bg-kaiserPurple-base rounded-sm cursor-pointer min-h-12 font-bold w-2/3 mx-auto"
        >
          Logar
        </button>
        <a
          href="/"
          className=" flex items-center justify-center font-bold text-kaiserGray-400"
        >
          Cadastro
        </a>
      </form>
    </div>
  )
}
