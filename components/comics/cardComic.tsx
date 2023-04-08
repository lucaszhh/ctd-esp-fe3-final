import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { IComic } from 'types';

type props = {
    comic : IComic
}

const CardComic = ({comic}:props) => {
    
    const imageCard : string = `${comic.images[0]?.path}.${comic.images[0]?.extension}`
    

  return (
    <Grid item xs={4}>
    <Card sx={{ width: 300, height:600, display:'flex', flexDirection:"column", justifyContent:"space-between"}}>
        <CardMedia
            sx={{ height: 400 }}
            image={imageCard}
            title=""
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {comic.title}
            </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"end"}}>
            <Button color='secondary' size="small" >Share</Button>
            <Button  endIcon={<SendIcon />} size="medium" variant="contained">Ver Comic</Button>
        </CardActions>
    </Card>
</Grid>
  )
}

export default CardComic