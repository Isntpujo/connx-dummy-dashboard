import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-dvh px-4 bg-zinc-900">
      <h1 className='text-8xl font-bold text-blue-600'>404</h1>
      <p className='text-white'>Sorry, an unexpected error has occurred.</p>
      <p className='text-white'>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
