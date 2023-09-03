'use client'
import SideBar from '@/components/SideBar'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { CgSpinner } from 'react-icons/cg'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Login from '@/components/Login';

export default function Home() {

  const [user, loading] = useAuthState(auth);

  if (!user) {
    return (
      <Login/>
    )
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <CgSpinner className='w-20 h-20 animate-spin'/>
      </div>
    )
  }

  return (
    <main className="grid w-full grid-cols-8">
      <div className="col-span-2">
        <SideBar/>
      </div>
      <div className="col-span-6 flex justify-center h-screen">
        <div className='flex flex-col items-center justify-center space-y-4'>
          <IoChatbubblesOutline className='w-24 h-24 text-gray-300'/>
          <p className='text-2xl text-gray-300'>대화를 시작합니다</p>
        </div>
      </div>
    </main>
  )
}
