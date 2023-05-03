import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://localhost:3000/posts/${id}`);
      setPost(result.data);
    }
    fetchData();
  }, [id]);

  if (!post) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Box>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            style={{
              top: "5%",
              left: "5%",
            }}
          >
            Return
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{ padding: "10%" }}>
                <Typography variant="h4" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body1">{post.description}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default PostDetails;
