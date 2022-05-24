import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import rttoDarkPurple from "../component/banners/riseToTheOccasionDarkPurple.png";

const useStyles = makeStyles((theme) => ({
  parallax1: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "1000px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  firstSection: {
    position: "absolute",
    left: 0,
    top: "30%",
    width: "100%",
    color: "#332549",
    flexDirection: "row",
    textAlign: "center",
  },
  sectionContents: {
    backgroundColor: "#fee5d1",
    color: "#332549",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "60%",
    margin: "auto",
    borderRadius: "24px",
  },

  img: {
    width: "300px",
    height: "24px",
    display: "inline-block",
    marginRight: "0px",
  },
  link: {
    color: "#BF7286",
  },
}));

export default function About() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <main>
      <div className={classes.parallax1}>
        <section className={classes.firstSection}>
          <span className={classes.sectionContents}>
            <Grid container justifyContent={"center"}>
              <Grid item xs={6} sx={{ mb: 1 }}>
                <img
                  src={rttoDarkPurple}
                  alt="rtto"
                  className={classes.img}
                ></img>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" marginBottom={"10px"}>
                  {t("About.text1")}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Link to="/workout/stomach" style={{ textDecoration: "none" }}>
                  <Typography variant="h6" className={classes.link}>
                    {t("About.stomach")}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/workout/back" style={{ textDecoration: "none" }}>
                  <Typography variant="h6" className={classes.link}>
                    {t("About.back")}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/workout/legs" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    className={classes.link}
                    sx={{ mb: 1 }}
                  >
                    {t("About.legs")}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6"> {t("About.text4")}</Typography>
              </Grid>
            </Grid>
          </span>
        </section>
      </div>
    </main>
  );
}
