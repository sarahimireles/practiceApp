import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'wrap',
    },
    postCard: {
        marginBottom: 15,
        border: '1px solid #c3c5c7',
        width: 'calc(100% * (1/4) - 10px - 1px)'
    },
  });

const PostsList = (props) => {
  const { posts } = props;
  const classes = useStyles();

  const onRemove = (id) => {
    props.onRemove(id);
};

  if (!posts || posts.length === 0) return <p>No posts, sorry</p>;
  return (
    <div className={classes.list}>
      {posts.map((posts) => {
        return (
        <Card className={classes.postCard} id={posts.id} key={posts.id} sx={{ maxWidth: 345 }}>
            <CardContent>
                <CardHeader
                  subheader="Article"
                  action={
                    <IconButton aria-label="settings" onClick={()=>onRemove(posts.id)}>
                      <CloseIcon />
                    </IconButton>
                  }
                />
                <Typography variant="h5" component="div">
                    {posts.title}
                </Typography>
                <Typography sx={{ mb: 1.5, marginTop: 1.5, fontSize: '0.9rem' }} color="text.secondary">
                    {posts.body}
                </Typography>
            </CardContent>
        </Card>
        );
      })}
    </div>
  );
};
export default PostsList;