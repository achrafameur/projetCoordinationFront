import React, { useState } from "react";
import axios from "axios";
import { Button, Grid, TextField } from "@mui/material";

function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, description, image);
    const response = await axios.post("http://localhost:3000/posts", {
      title,
      description,
      image,
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{ width: "50%", margin: "auto", marginTop: "30px" }}
      >
        <TextField
          label="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "50%", margin: "auto", marginTop: "30px" }}
        >
          Ajouter le post
        </Button>
      </Grid>
    </form>
  );
}

export default AddPost;
