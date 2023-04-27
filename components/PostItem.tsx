import Link from 'next/link';

type Props = {
  post: Post;
};
const PostItem = ({ post }: Props) => {
  return (
    <article className='p-4 border border-solid border-white rounded-md group hover:bg-blue-600 hover:ring-blue-600 duration-150'>
      <Link href={`/posts/${post.id}`}>
        <h3 className='italic capitalize text-lg font-bold  hover:mr-4 duration-200 group-hover:text-white'>
          {post.title}{' '}
          <span className=' duration-200 inline-block group-hover:translate-x-3 group-hover:stroke-white'>
            &rarr;
          </span>
        </h3>
      </Link>
      <p className='mt-4 group-hover:text-white'>{post.body}</p>
    </article>
  );
};

export default PostItem;
