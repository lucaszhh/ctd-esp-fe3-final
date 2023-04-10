import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/system";
import { Button, Grid, Stack } from "@mui/material";
import { IComic, IComicResponse } from "types"
import NextLink from "next/link";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccordionComic from "dh-marvel/components/comics/accordionComic";
import CardComicDetails from "dh-marvel/components/comics/cardComicDetails";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";

interface Props {
  comic: IComic;
}

const Comic: NextPage<Props> = ({ comic }) => {

  return (
    <>
      <Head>
        <title>DH-MARVEL</title>
        <meta
          name="description"
          content={`Comic de Marvel.${comic?.title}.${comic?.series}`}
        />
      </Head>
      <Stack
        component="section"
        maxWidth="xl"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: "100px 20px",
        }}
      >
        <Grid container spacing={4} maxWidth="xl">
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                alt={comic?.title}
                src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                sx={{
                  boxShadow: "0.2px 0.2px 10px rgba(0,0,0,0.2)",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CardComicDetails comic={comic} />
            <Box
              sx={{
                paddingBottom: "90px",
              }}
            >
              {comic?.stock > 0 ? (
                <NextLink
                  href={{ pathname: "/checkout/", query: `comic=${comic?.id}` }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      border: `2px solid #000`,
                      borderRadius: 0,
                    }}
                  >
                    COMPRAR
                  </Button>
                </NextLink>
              ) : (
                <Button
                  disabled
                  endIcon={<AddShoppingCartOutlinedIcon />}
                >
                  SIN STOCK
                </Button>
              )}
            </Box>
            <AccordionComic comic={comic} />
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const data: IComic = await getComic(id)
  return {
    props: {
      comic: data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data : IComicResponse = await getComics()
  const paths = data.data.results.map((comic) => {
    return { params: { id: comic.id.toString() } }
  })
  return {
    paths,
    fallback: true,
  }
}

export default Comic
