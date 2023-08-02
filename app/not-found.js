import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='grid min-h-full place-items-centerpx-6 py-24 px-3 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
          Oops! Page not found 😅
        </h1>
        <p className='mt-6 text-base leading-7'>
          We searched high and low, but it seems like this page is on a secret
          tech mission.
        </p>
        <p>
          Don't worry though, you can explore lots of exciting tech posts on our
          home page! 🚀
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href='/'
            className='rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red25 '
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
