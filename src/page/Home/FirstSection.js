import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import rttoPurple from "../../component/banners/riseToTheOccasionPurple.png";

const useStyles = makeStyles((theme) => ({
  firstSection: {
    position: "absolute",
    left: 0,
    top: "50%",
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
    justifyContent: "flex-start",
    width: "80%",
    margin: "auto",
    borderRadius: "24px",
  },
  img: {
    width: "500px",
    margin: "auto",
    height: "30px",
    "@media (max-width: 620px)": {
      width: "300px",
    },
  },
}));

export default function FirstSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.firstSection}>
      <span className={classes.sectionContents}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {t("HomePage.firstSection.text")}
        </Typography>

        <img src={rttoPurple} alt="rtto" className={classes.img}></img>
      </span>
    </section>
  );
}
