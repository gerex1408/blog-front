export const metadata = {
  title: 'Devs Log | Posts',
  description: 'Blog page to see all the posts',
};

export default function Page() {
  return (
    <div className='mx-auto max-w-2xl py-32 px-3 sm:py-30 lg:py-30'>
      <div className='text-center'>
        <h1 className='text-4xl/[3rem] font-bold tracking-tight sm:text-6xl/[5rem] animate-fade-left animate-once '>
          Hey there! Welcome to
        </h1>
        <h1 className='text-4xl/[3rem] font-bold tracking-tight sm:text-6xl/[5rem] animate-fade-left animate-once'>
          <span className='bg-red text-white px-3 rounded-md'>DEVS</span>{' '}
          <span className='text-red'>LOG</span>
        </h1>
        <p className='mt-6 text-lg leading-8 animate-fade-right animate-once'>
          The tech blog you've been waiting for! A place to share our cool tech
          adventures and help curious minds explore 🌟
        </p>
      </div>
    </div>
  );
}
