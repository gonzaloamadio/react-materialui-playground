import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { posts } from "./dummy-posts";

function Posts(props) {
  return (
    <div style={{ marginTop: 50, padding: 50 }}>
      {/* In Grid Component we passed container prop so that it become grid container.
    justify prop helps us to make our grid items center
    spacing prop helps us to create the spacing between individual grid items 
    (supporting values are 8, 16, 24, 32 or 40). */}
      <Grid container spacing={24} justify="center">
        {posts.map(post => (
          // Inside the Grid container component, we passed item prop to the Grid component so that they become grid items.
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
