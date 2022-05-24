import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "120px",
    display: "flex",
    backgroundColor: "#eac1bf",
    position: "fixed",
    zIndex: "2",
    transition: "transform 0.3s",
    "@media (max-width: 900px)": {
      height: "65px",
    },
  },
  wrapper: {
    position: "fixed",
    display: "flex",
    transition: "transform 0.4s",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 250ms ease 500ms",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <section className={classes.header}>
      <div className={classes.wrapper}>
        <Container className={classes.contentContainer}>
          <NavigationBar />
        </Container>
      </div>
    </section>
  );
}
