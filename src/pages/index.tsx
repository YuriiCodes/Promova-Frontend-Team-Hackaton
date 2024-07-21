import { GetServerSideProps, NextPage } from 'next';
import { Inter } from 'next/font/google';

import { ArticleItem, ArticleResponse } from '@/types/content';

import ArticleWrapper from '@/components/ArticleWrapper';
import Virtualizer from '@/components/Virtualizer';

import { ARTICLE_URL } from '@/config/constants/urls';

type Props = {
  data: ArticleItem[];
};

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div className={inter.className}>
      <ArticleWrapper>
        <Virtualizer data={data} />
      </ArticleWrapper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(ARTICLE_URL);
  const data: ArticleResponse = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};

export default Home;
