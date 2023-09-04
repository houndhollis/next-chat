'use client';
import { auth } from '@/firebase';
import React, { FormEvent } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>()

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className='flex justify-center items-center min-h-screen'>
      <div className='w-[392px]'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label 
              className='block mb-2 text-sm text-[#999999]'
              htmlFor='email'  
            >
              이메일
            </label>
            <input
              className='border border-[#999] w-full p-2.5 rounded text-sm'
              id='emal'
              placeholder='이메일을 입력해 주세요!'
              type='email' value={email || ''} onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='mt-4'>
            <label 
              className='block mb-2 text-sm text-[#999999]'
              htmlFor='password'  
            >
              비밀번호
            </label>
            <input
              className='border border-[#999] w-full p-2.5 rounded text-sm'
              id='password'
              placeholder='비밀번호를 입력해 주세요!'
              type='password' value={password || ''} onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='mt-10 text-center'>
            <button 
              type='submit'
              className='px-6 py-2 border duration-200 w-full bg-[#3ad65a] text-white rounded
              hover:text-[#3ad65a] hover:bg-white hover:border border-[#3ad65a]'
            >
              로그인
            </button>
            <button 
              className='px-6 py-2 mt-4 border duration-200 w-full bg-[#ffffff] text-gray-900 rounded
              hover:text-[#ffffff] hover:bg-gray-900 hover:border border-gray-900'
              onClick={() => signInWithGoogle()}
            >
              Google 계정으로 로그인
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login