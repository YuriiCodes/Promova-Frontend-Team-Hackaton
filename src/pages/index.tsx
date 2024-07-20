import {Inter} from "next/font/google";
import {GetServerSideProps, NextPage,} from "next";
import {ARTICLE_URL} from "@/config/constants/urls";
import Mapper from "@/components/Mapper";
import {ArticleResponse, DataItem} from "@/types/content";

const inter = Inter({subsets: ["latin"]});


type Props = {
    data: DataItem[]
}

const Home: NextPage<Props> = ({data}) => {
    return (
        <main
            className={` light w-full ${inter.className}`}
        >
            <article className="ml-auto mr-auto prose prose-slate lg:prose-xl xl:prose-xl 2xl:prose-2xl">
                <Mapper data={data}/>
            </article>
        </main>
);
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(ARTICLE_URL);
    const data: ArticleResponse = await res.json();

    return {
        props: {
            data: data?.data
        },
    };
}

export default Home;