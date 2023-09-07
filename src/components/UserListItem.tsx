'use client';
import { IChat } from '@/types';
import { User } from 'firebase/auth';
import Image from 'next/image';
import React from 'react'

interface UserListItemProps {
  sender: User
  receiver: User,
  chats: IChat[];
  selectedChatId: string
}

const UserListItem = ({
  sender,
  receiver,
  chats,
  selectedChatId
}: UserListItemProps) => {
  return (
    <div className='w-full p-4'>
      <div className='w-5/6 mx-auto px-4 flex flex-row items-center py-2 cursor-pointer'>
        <div>
          <Image
            src={receiver?.photoURL}
            width={40}
            height={40}
            alt='프로필'
          />
        </div>
        <div className='ml-4'>
          <p>
            {receiver.displayName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserListItem