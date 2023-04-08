import * as next from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Box, Grid } from '@mui/material';
import { IComic, IComicResponse } from 'types';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import CardComic from 'dh-marvel/components/comics/cardComic';
import useComics from 'hooks/useComics';


const Index = ({data}:IComicResponse) => {
    
/*     console.log(data); */
    
    const comicList = data?.results.map((comic)=> <CardComic key={comic.id} comic={comic}/> )
    
    const totalPage = Math.ceil(data.total / 12)
    const {page, handleChange, comicResponse} = useComics()
    
    console.log(comicResponse)
    


    return (
        <>
            <Head>
                <title>Marvel-comics</title>
                <meta name="description" content="Marvel Comics" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ display: "flex", flexDirection: "column",alignItems:"center" }}>
                <BodySingle title={"Comics"} />
                <Stack sx={{padding: 5}} spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={totalPage} page={page} onChange={handleChange}/>
                </Stack>
                <Grid sx={{ width: "80%" }} container rowSpacing={2} columnSpacing={2}>
                    {comicList}
                </Grid> 
            </Box>
        </>
    )
}

const DEFAULT_LIMIT = 12
const DEFAULT_OFFSET = 1
const MARVEL_URL_HOST = process.env.MARVEL_URL_HOST;

export const getServerSideProps : next.GetServerSideProps = async ()=> {
    const res = await fetch(`${MARVEL_URL_HOST}/comics/?offset=${DEFAULT_OFFSET}&limit=${DEFAULT_LIMIT}`)
    const data = await getComics(0, DEFAULT_LIMIT)
    console.log("res",res)
    console.log(res);
    
    return {
        props: { data : data.data }
    }
}


export default Index
