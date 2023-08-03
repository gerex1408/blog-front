'use client';

import Image from 'next/image';
import devLogLogo from '../../public/devslogLogo.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/Logo';

export default function Page() {
  const [showingPassword, setShowingPassword] = useState(false);
  const router = useRouter();
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='flex justify-center'>
          <Logo onClick={() => router.push('/')} />
        </div>
        <h2 className='mt-10 text-center text-2xl font-medium leading-9 tracking-tight'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-beige focus:ring-2 focus:ring-inset focus:ring-skin focus:outline-none sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center gap-3'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6'
              >
                Password
              </label>
              {showingPassword ? (
                <EyeIcon
                  className='block h-4 w-4 text-red25 hover:text-red hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setShowingPassword(false)}
                />
              ) : (
                <EyeSlashIcon
                  className='block h-4 w-4 text-red25 hover:text-red hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setShowingPassword(true)}
                />
              )}
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type={showingPassword ? 'text' : 'password'}
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-beige focus:ring-2 focus:ring-inset focus:ring-skin focus:outline-none sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
