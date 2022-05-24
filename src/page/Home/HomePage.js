import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import FirstSection from "./FirstSection";
import ImgSection from "./ImgSection";

const useStyles = makeStyles((theme) => ({
  parallax1: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "800px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  parallax2: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "400px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.onHide}>
        <div className={classes.parallax1}>
          <FirstSection />
        </div>
        <ImgSection />
        <div className={classes.parallax2}></div>
      </div>
    </main>
  );
}
