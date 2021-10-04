import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    gallery: {
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'wrap',
    },
    photoCard: {
        marginBottom: 15,
        border: '1px solid #c3c5c7',
        width: 'calc(100% * (1/4) - 10px - 1px)'
    },
  });

const PhotoGallery = (props) => {
  const { photos } = props;
  const classes = useStyles();

  if (!photos || photos.length === 0) return <p>No photos, sorry</p>;
  return (
    <div className={classes.gallery}>
      {photos.map((photos) => {
        return (
        <Card className={classes.photoCard} key={photos.id} sx={{ maxWidth: 200 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={photos.thumbnailUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {photos.title}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        );
      })}

    </div>
  );
};
export default PhotoGallery;