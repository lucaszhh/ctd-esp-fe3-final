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

interface Props {
  comic: IComic;
}

const CardComponent: FC<Props> = ({ comic }) => {

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
          <Typography gutterBottom variant="h4" component="div" >
            {comic?.title}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
      <NextLink href={`/checkout/?id=${comic.id}`}>
        <Button variant="contained" sx={{
            border: `2px solid #000`,
            borderRadius: 0,
          }}>
          COMPRAR
        </Button>
      </NextLink>
        <NextLink href={`/comics/${comic.id}`}>
          <Button >Ver detalles</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
