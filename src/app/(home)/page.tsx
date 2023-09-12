'use client'
import {useEffect} from 'react';
import SideBar from '@/components/SideBar'
import Login from '@/components/Login';
import { IoChatbubblesOutline } from 'react-icons/io5'
import { CgSpinner } from 'react-icons/cg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function Home() {
  
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {
    if (user) {
      setDoc(doc(db, 'users', user.uid),
        {
          email: user.email,
          lastActive: serverTimestamp(),
          photoURL: user.photoURL,
          displayName: user.displayName
        }
      )
    }
  },[user])

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
