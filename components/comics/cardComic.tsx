import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { IComic } from "types";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { getComicsById } from "services/marvel/marvel.service";

interface Props {
  comic: IComic;
}

const CardComponent: FC<Props> = ({ comic }) => {
  const router = useRouter();

  const handleBuy = async (id: number) => {
    const response: IComic = await getComicsById(id);

    if (response.stock > 0) {
      router.push({
        pathname: "/checkout",
        query: { comic: comic.id },
      });
    } else {
      router.push(`/comics/${id}`);
    }
  };

  return (
    <Card sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #000",
            borderRadius: 0,
          }}>
      <Box>
        <CardMedia
          component="img"
          height="350"
          image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {comic?.title}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button onClick={() => handleBuy(comic.id)} >
          COMPRAR
        </Button>
        <NextLink href={`/comics/${comic.id}`}>
          <Button variant="contained" sx={{
            border: `2px solid #000`,
            borderRadius: 0,
          }}>Ver detalles</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
