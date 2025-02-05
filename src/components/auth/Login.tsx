'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="h-screen auth-bg-img px-2 p-4">
        <div className="bg-[#1E1F20] mx-auto rounded-xl w-full py-7">
          <div className="flex flex-col items-center justify-center">
            <Image src="https://i.imgur.com/oPkUKVO.png" width={230} height={28} className="w-[280px]" alt="logo" />
            <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-[30px] p-5 py-8 rounded-lg">
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#b3bfcc] absolute ml-3 -top-[19px] bg-[#1E1F20] py-2 text-[16px]">
                  Username
                </label>
                <input type="text" value={username} className="p-4 rounded-[10px] text-[#b3bfcc] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#b3bfcc] absolute ml-3 -top-[10px] bg-[#1E1F20] text-[16px]">
                  Password
                </label>
                <input type="password" value={password} className="p-4 rounded-[10px] text-[#b3bfcc] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 bg-[#CB4A20] w-full text-white font-semibold rounded-md">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex bg-[#22262A] px-[10px] p-[20px]">
        <p className="text-sm text-[#CCCCCC] text-center">© 2025 Community Bank, N.A. • (866) 764-8638 • Privacy policy • Member FDIC • Equal Housing Lender</p>
      </div>
    </div>
  );
}
