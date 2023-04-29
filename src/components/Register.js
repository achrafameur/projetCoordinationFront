import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form logic goes here
    const response = await axios.post("http://localhost:3000/users", {
      email,
      username,
      password,
    });
    console.log(response);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{ width: "50%", margin: "auto", marginTop: "30px" }}
      >
        <Typography variant="h4" sx={{ margin: "auto" }}>
          {" "}
          Sign Up Form
        </Typography>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
