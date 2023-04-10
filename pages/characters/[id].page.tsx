import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ICharacter, ICharacterResponse } from "types";
import { Box } from "@mui/system";
import {  Stack, Typography } from "@mui/material";
import { getCharacter, getCharacters } from "dh-marvel/services/marvel/marvel.service";



interface Props {
  character: ICharacter;
}

const Character: NextPage<Props> = ({ character }: Props) => {
  return (
    <>
      <Head>
        <title>DH-MARVEL</title>
        <meta
          name="description"
          content={`${character?.name}.${character?.description}`}
        />
      </Head>
      <Stack component="section" direction="column" alignItems="center">
        <Stack
          component="section"
          maxWidth="xl"
          direction="column"
          spacing={10}
          alignItems="center"
          paddingY={15}
          paddingX={{ xs: 3, sm: 4, md: 4 }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              textShadow: "primary",
            }}
          >
            {character?.name}
          </Typography>
          <Box
            component="img"
            alt={character?.name}
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            sx={{
              maxWidth: 700,
              width: "100%",
              border: "3px solid #000",
              boxShadow: "12px 12px #000",
            }}
          />
          {character?.description ? (
            <Typography gutterBottom component="div">
              {character.description}
            </Typography>
          ) : (
            <Typography gutterBottom component="div">
              No tiene descripción disponible.
            </Typography>
          )}
        </Stack>
        
      </Stack>
    </>
  );
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const data = await getCharacter(id);

  return {
    props: {
      character: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ICharacterResponse = await getCharacters();

  const paths = data.data.results.map((character) => {
    return { params: { id: character.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};



export default Character;
