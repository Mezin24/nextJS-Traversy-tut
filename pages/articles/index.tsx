import { InferGetStaticPropsType } from 'next';
import { server } from '../../config';
import PostsList from '../../components/PostsList';

type Data = {
  articles: Article[];
};

const Articles = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h2 className='text-center mt-5 font-bold text-2xl'>Articles</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {articles.map((article) => (
          <article
            key={article.id}
            className='border border-solid border-white rounded-md outline-none'
          >
            <h3 className='text-center text-lg p-2 bg-slate-600 rounded-t-md'>
              {article.title}
            </h3>
            <div className='p-3'>
              <p className='text-gray-200 mt-3'>{article.body}</p>
              <p className='mt-5 text-right italic text-sm'>
                by {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
export default Articles;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const { articles }: Data = await res.json();

  return {
    props: {
      articles,
    },
  };
};
