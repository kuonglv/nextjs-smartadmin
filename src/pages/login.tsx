import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGoogle,
  FaGooglePlusSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import { Meta } from '@/layouts/Meta';
import { LoginLayout } from '@/templates/Login';

const Login = () => {
  return (
    <LoginLayout
      meta={<Meta title="Smartadmin Login" description="Lorem ipsum" />}
    >
      <div className="mx-auto flex w-full max-w-4xl justify-between px-4 py-6 sm:p-6 lg:max-w-7xl lg:px-8">
        <div className="flex w-full">
          <div className="hidden w-2/3 py-12 lg:block lg:pr-2">
            <h1 className="text-3xl font-semibold">
              The simplest UI toolkit for developers & programmers
            </h1>
            <p className="mt-4 text-lg font-thin leading-8">
              Presenting you with the next level of innovative UX design and
              engineering. The most modular toolkit available with over 600+
              layout permutations. Experience the simplicity of SmartAdmin,
              everywhere you go!
            </p>
            <div className="mt-2">
              <Link href={`#`}>
                <a className="font-bold text-gray-300">Learn more &gt;&gt;</a>
              </Link>
            </div>
            <div className="mt-8 text-[12px] text-white">
              Find us on social media
            </div>
            <div className="mt-2 flex gap-2">
              <FaFacebookSquare className="h-6 w-6" />
              <FaTwitterSquare className="h-6 w-6" />
              <FaGooglePlusSquare className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6" />
            </div>
          </div>
          <div className="w-full py-12 lg:w-1/3">
            <div className="rounded-lg bg-gray-100 p-6 text-black">
              <label className="mb-1 flex w-full" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full rounded-md bg-white"
                placeholder="kuonglv@gmail.com"
              />
              <span className="w-full text-[11px] text-gray-600">
                Your unique username to app
              </span>
              <label className="mb-1 mt-4 flex w-full" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full rounded-md bg-white"
                placeholder="Password"
                defaultValue={`123456`}
              />
              <span className="w-full text-[11px] text-gray-600">
                Your password
              </span>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                <input type="checkbox" id="remember" name="remember"></input>
                <label htmlFor="remember">
                  Remember me for the next 30 days
                </label>
              </div>
              <div className="my-6 justify-between gap-4 lg:flex">
                <button className="flex w-full justify-center gap-2 rounded-lg bg-blue-500 py-3 px-6 text-white shadow-md lg:w-1/2">
                  <span>Sign in with</span>
                  <FaGoogle className="h-5 w-5" />
                </button>
                <button className="mt-4 flex w-full justify-center gap-2 rounded-lg bg-pink-500 py-3 px-6 text-white shadow-md lg:mt-0 lg:w-1/2">
                  Secure Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
