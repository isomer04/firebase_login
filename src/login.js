import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

import { LockOutlined } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Container maxWidth="xs">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button fullWidth type="submit" variant="contained">
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <Container maxWidth="xs">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSignup}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              margin="normal"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button fullWidth type="submit" variant="contained">
              Sign up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Login, Signup };
