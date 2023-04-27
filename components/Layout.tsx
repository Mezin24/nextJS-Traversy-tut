import { ReactNode } from 'react';
import Header from './Header';
import Meta from './Meta';

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main className='mt-10 mx-auto max-w-3xl w-11/12'>
        <h1 className='text-center font-bold text-4xl mb-5'>
          <span className='text-blue-400'>WebDev</span> News
        </h1>
        <p className='text-center max-w-md mx-auto mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis
          eum.
        </p>
        {children}
      </main>
    </>
  );
};
export default Layout;
