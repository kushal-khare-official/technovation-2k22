import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
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
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

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
            name="Name"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.textfield}
          />
          <TextField
            name="email"
            label="Email"
            value={email}
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textfield}
          />
          <TextField
            name="Password"
            label="Password"
            variant="filled"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textfield}
          />

          <Button id="submitBtn" onClick={register}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </Button>
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
        </FormGroup>

        <div>
          Already have an account?{" "}
          <Link id="link" to="/">
            Login
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
}
export default Register;
