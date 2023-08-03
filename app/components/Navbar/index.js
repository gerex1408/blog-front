'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import ThemeToggler from '../ThemeToggler';
import { useRouter } from 'next/navigation';
import Logo from '../Logo';

export default function Navbar() {
  const router = useRouter();
  const navigation = [
    { name: 'Posts', href: '#', current: true },
    { name: 'Authors', href: '#', current: false },
  ];

  const userMenuItems = [{ name: 'Your profile' }, { name: 'Sign out' }];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as='nav' className='animate-fade-down animate-once'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Logo onClick={() => router.push('/')} />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'rounded-md px-3 py-2 text-sm',
                          item.current
                            ? 'bg-red25/25 font-semibold'
                            : 'hover:bg-red25/10'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className=' hidden sm:flex  items-center gap-2 rounded bg-red px-3 pb-2 pt-2.5 text-xs uppercase leading-normal text-white transition duration-150 ease-in-out focus:ring-0 hover:bg-red25'
                >
                  <PlusIcon className='block h-4 w-4' aria-hidden='true' />
                  New post
                </button>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-5 hidden sm:inline-block'>
                  <div>
                    <Menu.Button className='relative flex rounded-full text-sm focus:outline-none'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='Profile Image'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none'>
                      {userMenuItems.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active && 'bg-red25/10',
                                'text-black block px-4 py-2 text-sm'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* Theme toggler */}
                <ThemeToggler />
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-red25/25' : 'hover:bg-red25/10',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {userMenuItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  className={classNames(
                    item.current ? 'bg-red25/25' : 'hover:bg-red25/10',
                    'block rounded-md px-3 py-2 text-base font-medium sm:hidden'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
