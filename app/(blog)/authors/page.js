export const metadata = {
  title: 'Devs Log | Authors',
  description: 'Blog authors page',
};

export default function Page() {
  return (
    <section className='mx-5'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold animate-fade-left animate-once'>
            Meet the tech enthusiasts behind our posts
          </h2>
          <p className='mt-6 text-lg leading-8 animate-fade-right animate-once'>
            Visit our social media and learn more about us!
          </p>
        </div>
      </div>
    </section>
  );
}
