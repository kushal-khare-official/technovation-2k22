import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
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
import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
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
            name="E-mail Address"
            label="E-mail Address"
            variant="filled"
            value={email}
            className={classes.textfield}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button id="submitBtn" onClick={() => sendPasswordReset(email)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Reset email
          </Button>
        </FormGroup>
        <div id="register ">
          Don't have an account?{" "}
          <Link id="link" to="/register">
            Register
          </Link>{" "}
          now.
        </div>
        <div>
          Go back to{"  "}
          <Link id="link" to="/">
            Login
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
export default Reset;
