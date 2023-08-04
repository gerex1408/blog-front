'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/Logo';
import { useLoginMutation } from '@/app/services/api';
import { useDispatch } from 'react-redux';
import { actions } from './reducer';
import Toast from '@/app/components/Toast';

export default function Page() {
  const [showingPassword, setShowingPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeEmail = (event) => {
    const newFormValues = { ...formValues };
    const newEmail = event.target.value;
    newFormValues.email = newEmail;
    setFormValues(newFormValues);
  };

  const handleChangePassword = (event) => {
    const newFormValues = { ...formValues };
    const newPassword = event.target.value;
    newFormValues.password = newPassword;
    setFormValues(newFormValues);
  };

  const onLoginFormSubmit = async () => {
    if (formValues.email && formValues.password) {
      login(formValues)
        .unwrap()
        .then((data) => {
          dispatch(actions.setAuthState(data));
          router.push('/');
        })
        .catch((e) => {
          setErrorMessage(e?.data?.detail[0]?.msg || e?.data?.detail);
        });
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onLoginFormSubmit();
    }
  };

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
        <div className='space-y-6'>
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
                value={formValues.email || ''}
                onChange={handleChangeEmail}
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
                value={formValues.password || ''}
                onChange={handleChangePassword}
                onKeyDown={handleEnter}
                className='block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-beige focus:ring-2 focus:ring-inset focus:ring-skin focus:outline-none sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              onClick={onLoginFormSubmit}
              className='flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red25'
            >
              {isLoading ? (
                <div className='flex items-center'>
                  <svg
                    aria-hidden='true'
                    role='status'
                    className='mr-3 w-4 h-4 text-white animate-spin'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='#E5E7EB'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentColor'
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </div>
      </div>
      {isError && errorMessage && (
        <Toast
          type='error'
          text={errorMessage}
          onClose={() => setErrorMessage('')}
        />
      )}
    </div>
  );
}
