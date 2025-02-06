'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-[#CB4A20] p-[20px] py-[15px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.25 164.79" className="h-[25px] w-[40px] md:hidden">
        <g data-name="Layer 2">
          <path
            fill="#fff"
            d="m142.55 46.37 12.3 12.3a33.55 33.55 0 0 1 0 47.41l-48.78 48.77a33.55 33.55 0 0 1-47.4 0l-18-18 9.23-9.23 18 18a20.5 20.5 0 0 0 29 0l48.76-48.77a20.5 20.5 0 0 0 0-28.95l-12.3-12.3ZM9.8 106l12.47 12.47 9.22-9.23L19 96.76a20.52 20.52 0 0 1 0-29L67.8 19a20.5 20.5 0 0 1 29 0l18 18 9.2-9.2-18-18a33.56 33.56 0 0 0-47.41 0L9.8 58.58a33.55 33.55 0 0 0 0 47.42m216-50.46L238.26 68a20.5 20.5 0 0 1 0 29l-48.77 48.77a20.49 20.49 0 0 1-29 0l-18-18-9.23 9.23 18 18a33.55 33.55 0 0 0 47.41 0l48.77-48.78a33.55 33.55 0 0 0 0-47.4l-12.38-12.53Zm-123.32 50.54 12.29 12.29 9.23-9.23-12.29-12.29a20.5 20.5 0 0 1 0-28.95l48.77-48.77a20.51 20.51 0 0 1 29 0L207.33 37l9.23-9.22-17.9-17.88a33.56 33.56 0 0 0-47.41 0l-48.77 48.77a33.56 33.56 0 0 0 0 47.41M40.8 55.37 52.66 67.2a21.47 21.47 0 0 1 0 30.34l-41.2 41.21a6.52 6.52 0 0 0 8.76 9.67 6 6 0 0 0 .44-.45l41.21-41.2a34.54 34.54 0 0 0 0-48.79L50 46.1ZM11.47 26l10.72 10.72 9.23-9.22-10.76-10.73a6.53 6.53 0 0 0-9.52 8.94 4 4 0 0 0 .29.29Zm205.19 83.29-11.78-11.78a21.47 21.47 0 0 1 0-30.33L246.08 26a6.53 6.53 0 1 0-8.93-9.52l-.3.29L195.66 58a34.52 34.52 0 0 0 0 48.79l11.77 11.78Zm29.46 29.46-11-11-9.19 9.25 11 10.95a6.52 6.52 0 1 0 9.23-9.22Z"
            data-name="Layer 1"
          />
        </g>
      </svg>

      <div className="relative">
        <RiLogoutCircleLine className="text-2xl text-white" onClick={toggleNav} />

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#d71e28]">
              {user.holder.firstName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#d71e28] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
