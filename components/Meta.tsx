import Head from 'next/head';

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ description, keywords, title }: Props) => {
  return (
    <Head>
      <title>{title} | My APP</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'web development, programming',
  description: 'Get the latest news',
};
export default Meta;
