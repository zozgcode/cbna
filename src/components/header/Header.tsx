'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex bg-[#22262A] px-[10px] p-[20px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[60px] h-[60px] fill-[#CCCCCC]'>
        <path d="M19.57,19.75H4.43a2.19,2.19,0,0,1-1.92-1.11,2,2,0,0,1,0-2.08L10.12,4.28a2.22,2.22,0,0,1,3.75,0l7.57,12.29a2,2,0,0,1,0,2.08A2.19,2.19,0,0,1,19.57,19.75ZM11.4,5.07,3.84,17.35a.53.53,0,0,0,0,.56.68.68,0,0,0,.61.34H19.57a.68.68,0,0,0,.61-.34.53.53,0,0,0,0-.56L12.6,5.07a.75.75,0,0,0-1.2,0Z" />{' '}
        <path d="M12,12.75a.75.75,0,0,1-.75-.75V8a.75.75,0,0,1,1.5,0v4A.75.75,0,0,1,12,12.75Z" /> <circle cx={12} cy="15.5" r={1} />{' '}
      </svg>
      <p className="text-sm text-[#CCCCCC] text-center">
        Please note: On February 5th, we are updating our Online Banking User Agreement. All users will be prompted to agree to the new terms upon login.{' '}
      </p>
    </div>
  );
}
