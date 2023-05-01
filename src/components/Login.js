import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginButton = styled(Button)({
  marginTop: "1rem",
});

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
    const response = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      navigate("/");
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
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
          Sign In Form
        </Typography>
        <Grid item xs={12}>
          <TextField
            id="username"
            name="username"
            label="username"
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
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </LoginButton>
        </Grid>
        {showAlert && (
          <Alert
            onClose={handleAlertClose}
            variant="outlined"
            severity="error"
            sx={{ width: "50%", margin: "auto", marginTop: "30px" }}
            autoHideDuration={3000}
          >
            Login Failed
          </Alert>
        )}
      </Grid>
      <Typography sx={{ margin: "auto" }}>
        Si tu n'as pas encore de compte,{" "}
        <a href="/register" target="_blank" rel="noreferrer">
          merci de s'enregistrer
        </a>
      </Typography>
    </form>
  );
}
