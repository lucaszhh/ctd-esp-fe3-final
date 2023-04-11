import { getComic } from "services/marvel/marvel.service"
import type { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"
import { IComic } from "types"

type Props = {
    comic: IComic
}

const Checkout: NextPage<Props> = ({comic}:Props) => {


    return (
        <>
            <Head>
                <title>DH-MARVEL</title>
                <meta
                    name="description"
                    content={`Comic de Marvel.${comic?.title}.${comic?.series}`}
                />
            </Head>
            <p>{comic?.title}</p>
        </>
    )
}



export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => { 
    const id = context.query?.id?.toString() || "0"
    const comic = await getComic(parseInt(id)) 
    return { props: { comic } }
}

export default Checkout
