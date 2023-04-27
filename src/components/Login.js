import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoginButton = styled(Button)({
  marginTop: "1rem",
});

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    // const loginEntries = { username, password };
    // const response = await axios.get(api.UsersService.usersControllerFindAll());
    console.log("Donee !!");
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
      </Grid>
    </form>
  );
}
