export default function Logo({ onClick }) {
  return (
    <h1
      onClick={onClick}
      className={
        onClick
          ? 'cursor-pointer text-2xl font-bold tracking-tight'
          : 'text-2xl font-bold tracking-tight'
      }
    >
      <span className='bg-red text-white px-2 sm:px-1 rounded-sm'>DEVS</span>{' '}
      <span className='text-red'>LOG</span>
    </h1>
  );
}
