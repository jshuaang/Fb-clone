import LogoFB from '../assets/logo-facebook.png'
import Image from 'next/image'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className="m-20 w-1/2 mx-auto text-center">
            <Image 
                src={LogoFB}
                width={200}
                height={200}
                alt="logo facebook"
            />
            <div 
            className="border border-gray-200 text-center m-10 w-3/4 p-2 cursor-pointer hover:bg-gray-100 mx-auto"
            onClick={() => signIn()}
            >
                <p className="text-center font-bold text-gray-500">Login with facebook</p>
            </div>
        </div>
    )
}

export default Login
