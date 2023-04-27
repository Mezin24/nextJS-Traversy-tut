import PostItem from './PostItem';

type Props = {
  posts: Post[];
};
const PostsList = ({ posts }: Props) => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostsList;
