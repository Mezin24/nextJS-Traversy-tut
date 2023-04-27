import type { NextPage } from 'next';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import PostsList from '../components/PostsList';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <main>
        <PostsList posts={posts} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
