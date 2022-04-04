import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Radio,
  RadioGroup,
  Button,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      color: "white",
      padding: "30px",
      maxWidth: "500px",
      margin: "auto",
      // display: displayForm,
    },
    textfield: {
      margin: "10px !important",
      "& label": {
        color: "#e3f2fd !important",
      },
      "& div": {
        "& input": {
          color: "#fff",
        },
        backgroundColor: "rgb(242 115 115 / 6%)",
      },
      "& div:hover::before": {
        borderBottom: "1px solid #e3f2fd !important",
      },
      "& div::after": {
        borderBottom: "3px solid #e3f2fd !important",
      },
    },
    label: {
      margin: "10px !important",
      color: "#e3f2fd !important",
    },
    radio: {
      margin: "5px 10px !important",
      color: "#e3f2fd !important",
      "& span": {
        color: "#fff",
      },
    },
    buttonPrimary: {
      margin: "20px auto !important",
      background: "#004D40 !important",
      color: "#e3f2fd !important",
      maxWidth: "100px",
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="login-box">
        <FormGroup>
          <TextField
            name="Email"
            label="Email"
            value={email}
            variant="filled"
            className={classes.textfield}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="Password"
            label="Password"
            value={password}
            variant="filled"
            type="password"
            className={classes.textfield}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            id="submitBtn"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </Button>

          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
        </FormGroup>

        <div>
          <Link id="link" to="/reset">
            Forgot Password
          </Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link id="link" to="/register">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
}
export default Login;
