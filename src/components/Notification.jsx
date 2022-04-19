import React, { useEffect, useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const Notifications = () => {
  const [notifications, setNotification] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/notify",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setNotification(data);
    console.log(notifications);
    setLoading(false);
  }, [Loading]);
  return (
    <>
      <div className="login-box">
        <h3 style={{ textAlign: "center" }}>Notice</h3>
        {Loading ? (
          <Loader />
        ) : (
          <>
            {notifications.map((notification) => (
              <div key={notification._id} style={{ marginBottom: "0.7em" }}>
                <Accordion sx={{ background: "#200C2C", color: "white" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      "& div": { justifyContent: "space-between" },
                      "& svg": { color: "white" },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        textOverflow: "ellipsis",
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: "300",
                      }}
                    >
                      {notification.title}
                    </Typography>
                    <Typography component="div" align="right">
                      <Box
                        sx={{
                          alignSelf: "end",
                          fontSize: "0.8em",
                          fonttextalign: "right",
                          fontStyle: "italic",
                          m: 1,
                        }}
                      >
                        {new Date(
                          Date.now() - new Date(notification.createdAt)
                        ).getDay()
                          ? new Date(
                              Date.now() - new Date(notification.createdAt)
                            ).getDay() + " Days Ago"
                          : new Date(
                              Date.now() - new Date(notification.createdAt)
                            ).getHours() + " Hours Ago"}
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h6" component="span">
                      {notification.description}
                      <br></br>
                      <ul>
                        {notification.links.map((link, i) => (
                          <li key={i}>
                            <a href={link} style={{ color: "wheat" }}>
                              link
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Notifications;
