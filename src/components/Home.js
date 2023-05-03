import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    console.log(selectedPostId);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("http://localhost:3000/posts");
      setPosts(result.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={3} key={post._id} m={2}>
            <Card>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <CardMedia component="img" alt={post.title} image={post.image} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handlePostClick(post._id)}>
                  <Link to={`/post/${post._id}`}>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
