import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../components/Meta';

const Post = ({ post }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <div className='border border-solid border-white rounded-md p-5 mt-10'>
      <Meta
        title={`${post.title.split(' ')[0]} post`}
        description={`info about post ${post.title}`}
      />
      <h1 className='text-center text-3xl font-bold capitalize mt-5'>
        {post.title}
      </h1>
      <p className='my-7'>{post.body}</p>
      <div className='text-center'>
        <Link
          href='/'
          className='bg-yellow-500 p-2 px-3 rounded-md border border-solid border-yellow-500 hover:text-yellow-500 hover:bg-white hover:border-yellow-500 capitalize duration-200'
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const posts: Post[] = await res.json();
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
  context
) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context?.params?.postId}`
  );
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default Post;
