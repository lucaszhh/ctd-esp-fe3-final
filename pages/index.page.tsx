import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import {  Pagination, Stack, Typography } from "@mui/material"
import { IComicResponse } from "types"
import { getComics } from "dh-marvel/services/marvel/marvel.service"
import GridLayout from "dh-marvel/components/gridLayout"
import BodySingle from "dh-marvel/components/layouts/body/single/body-single"
import usePagination from "hooks/usePagination"

interface Props {
    comics: IComicResponse
}

const DEFAULT_LIMIT = 12

const Index: NextPage<Props> = ({ comics }) => {
    const {page, handleChange, comicsData} = usePagination(DEFAULT_LIMIT)
    const pagesQty: number = comics?.data?.total !== undefined ? Math.ceil(comics.data.total / 12) : 1
    return (
        <>
            <Head>
                <title>DH MARVEL</title>
                <meta name="description" content="Sitio DH MARVEL" />
            </Head>
            <Stack
                component="section"
                maxWidth="xl"
                direction="column"
                spacing={2}
                alignItems="center"
                paddingY={5}
                paddingX={{ xs: 3, sm: 4, md: 4 }}
            >
                <BodySingle title={"Comics"}></BodySingle>
                <Typography>Page: {page}</Typography>
                <Pagination
                    size="large"
                    count={pagesQty}
                    onChange={handleChange}
                />
                <GridLayout
                    comics={
                        comicsData === undefined
                            ? comics.data?.results
                            : comicsData.data?.results
                    }
                />
                <Pagination
                    size="large"
                    count={pagesQty}
                    onChange={handleChange}
                />
            </Stack>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ()=>{
    const comics = await getComics(0, DEFAULT_LIMIT);
    return { props: { comics } };
}

export default Index;
