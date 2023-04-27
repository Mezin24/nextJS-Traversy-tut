import Head from 'next/head';
import Meta from '../components/Meta';

const About = () => {
  return (
    <>
      <Meta title='About' description='Info about us' />
      <h1 className='text-center mt-5 font-bold text-3xl'>
        About <span className='text-yellow-500'>US</span>
      </h1>
      <p className='mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        error? Quisquam sunt perferendis ea sed culpa, suscipit explicabo, eius
        optio adipisci quam obcaecati inventore pariatur a perspiciatis animi
        voluptas alias!
      </p>
      <p className='mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        error? Quisquam sunt perferendis ea sed culpa, suscipit explicabo, eius
        optio adipisci quam obcaecati inventore pariatur a perspiciatis animi
        voluptas alias!
      </p>
    </>
  );
};

export default About;
