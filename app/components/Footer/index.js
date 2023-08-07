import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div className=' mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm sm:text-center'>
          © 2023{' '}
          <Link href='/' className='hover:underline'>
            Devs Log™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium'>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6 '>
              Posts
            </Link>
          </li>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6 '>
              Authors
            </Link>
          </li>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6 '>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
