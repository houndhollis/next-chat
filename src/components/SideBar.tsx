'use client';

import React from 'react'
import { auth, db } from '@/firebase';
import { collection, DocumentData } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import UserListItem from './UserListItem';
import { IChat } from '@/types';

interface ISideBarProps {
  selectedChatId?: string;
}

const SideBar = ({ selectedChatId } : ISideBarProps) => {

  const router = useRouter();
  const [user] = useAuthState(auth);
  const [snapshotUser] = useCollection(collection(db,'users'));
  
  const users = snapshotUser?.docs.map((doc : DocumentData) => ({
    id: doc.id,
    ...doc.data()
  }))

  const [snapshotChat] = useCollection(collection(db, 'chats'));
  const chats = snapshotChat?.docs.map((doc : DocumentData) => ({
    id: doc.id,
    ...doc.data()
  }))
  
  const userList = users?.filter((player) => player.email !== user?.email)

  const logout = () => {
    signOut(auth);
    router.push('/')
  }

  if (!user) {
    return (
      <div className='flex justify-center mt-10'>
        <CgSpinner className='w-8 h-8 text-gray-400 animate-spin'/>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-start w-full h-screen border-l border-r border-gray-200'>
      <div className='flex items-center justify-between w-full p-4 text-xl font-bold border-b border-gray-200 h-[70px]'>
        <p>채팅</p>
        <button className='flex items-center text-sm font-medium' onClick={logout}>
          <span>로그아웃</span>
        </button>
      </div>

      <div>
        {userList?.map((receiver) => (
          <UserListItem 
            key={receiver.email}
            sender={user}
            receiver={receiver}
            chats={chats as IChat[]}
            selectedChatId={selectedChatId}
          /> 
        ))}
      </div>
    </div>
  )
}

export default SideBar