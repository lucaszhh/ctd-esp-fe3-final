import type { NextPage } from "next";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { IComic } from "types";
import { percentageOff } from "utils/percentageOff";

interface Props {
  comic: IComic;
}

const CardComicDetails: NextPage<Props> = ({ comic }) => {
  const offert = percentageOff(comic?.oldPrice, comic?.price);
  return (
    <Box
      sx={{
        paddingBottom: "30px",
      }}
    >
      <Typography gutterBottom component="div" variant="h5"
      sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              textShadow: "primary",
            }}>
        Serie: {comic?.series.name}
      </Typography>
      <Typography gutterBottom variant="h5">
        {comic?.title}
      </Typography>
      {comic?.isbn !== "" && (
        <Typography gutterBottom component="div">
          ISBN: {comic?.isbn}
        </Typography>
      )}
      <Box
        sx={{
          padding: "30px 0px",
        }}
      >
        {comic?.oldPrice && comic.stock > 0 && (
          <Typography
            sx={{
              textDecoration: "line-through",
              marginBottom: "5px",
              paddingRight: "15px",
              
            }}
          >
            ${comic.oldPrice}
          </Typography>
        )}

        {offert > 0 && (
          <Typography sx={{color: "green", fontSize: "1.1rem"}}>
            {offert}% OFF!
          </Typography>
        )}
      </Box>
      <Typography sx={{fontWeight: "700", fontSize: "1.5rem"}}>${comic?.price}</Typography>
    </Box>
  );
};

export default CardComicDetails;
