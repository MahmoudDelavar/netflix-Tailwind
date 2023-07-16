import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
//==================================================
const Login = () => {
  return (
    <div className='login_bg_gradient bg-cover h-screen grid place-items-center '>
      <div className='bg-[rgba(0,0,0,.7)] p-10 w-80 space-y-6'>
        <h2 className=' text-3xl font-medium'>sing in </h2>
        <button
          onClick={() => signIn('google')}
          className='bg-white text-black flex gap-2 items-center p-4 text-xl'
        >
          <FcGoogle size={30} />
          sing in with Goofle
        </button>
      </div>
    </div>
  );
};

export default Login;
