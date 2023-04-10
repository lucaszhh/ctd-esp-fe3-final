import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { IComicResponse } from "types";
import { getComicsByPage } from "services/marvel/marvel.service";
import { useRouter } from "next/router";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import GridLayout from "dh-marvel/components/gridLayout";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

interface Props {
    comics: IComicResponse;
}

const QTY_OF_CARDS = 12;

const Index: NextPage<Props> = ({ comics }) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number | null>(null);
    const [comicsData, setComicsData] = useState<IComicResponse>();

    useEffect(() => {
        localStorage.clear();
    }, []);

    useEffect(() => {
        if (currentPage !== null) {
            router.push(`/?page=${currentPage}`, undefined, { shallow: true });

            getComicsByPage(QTY_OF_CARDS, currentPage).then(
                (data: IComicResponse) => {
                    if (data.code === 200) {
                        setComicsData(data);
                    }
                }
            );
        }
    }, [currentPage]);

    const [page, setPage] = useState<number>(1);
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setCurrentPage(value);
    };

    const pagesQty: number =
        comics?.data?.total !== undefined ? Math.ceil(comics.data.total / 12) : 1;

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

export async function getServerSideProps() {
    const comics = await getComics(0, QTY_OF_CARDS);
    return { props: { comics } };
}

export default Index;
