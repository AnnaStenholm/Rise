import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ButtonMailTo from "../ButtonMailTo/ButtonMailTo";
import SocialFollow from "../SocialFollow/SocialFollow";
import GitHubWork from "../GitHubWork/GitHubWork";
import rttoYellow from "../banners/RiseTotheOccasion-yellow.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "250px",
    width: "100%",
    backgroundColor: "#eac1bf",
  },
  container: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  },

  item: {
    display: "flex",
    marginTop: "20px",
  },

  socialIcon: {
    marginTop: "20px",
    "@media (max-width: 900px)": {
      margin: "20px 0px 40px 0px",
    },
  },
  InstaLinkedIn: {
    marginTop: "10px",
    "@media (max-width: 900px)": {
      margin: "10px 0px 0px 20px",
    },
  },
  gitHub: {
    marginTop: "20px",
    "@media (max-width: 1073px)": {
      margin: "20px 0px 0px 20px",
      "@media (max-width: 900px)": {
        margin: "20px 0px 0px 50px",
        "@media (max-width: 532px)": {
          margin: "20px",
        },
      },
    },
  },
  textMail: {
    color: "#593f64",
    textAlign: "center",
  },
  text: {
    color: "#593f64",
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.item}>
          <img src={rttoYellow} alt="rtto" width="240px" height="30px"></img>
        </div>
      </div>
      <Grid
        container
        justifyContent="center"
        display="flex"
        flexDirection="row"
        spacing={2}
      >
        <Grid item lg={2} md={2} sm={4} xs={4} className={classes.textMail}>
          <Typography variant="button">{t("footer.contact")}</Typography>
          <div className={classes.socialIcon}>
            <ButtonMailTo mailto="mailto:stenholm.a@gmail.com"></ButtonMailTo>
          </div>
        </Grid>
        <Grid item lg={2} md={2} sm={4} xs={4} className={classes.text}>
          <Typography variant="button">{t("footer.follow")}</Typography>
          <div className={classes.InstaLinkedIn}>
            <SocialFollow />
          </div>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={4}
          xs={4}
          sx={{ mb: 4 }}
          className={classes.text}
        >
          <Typography variant="button">{t("footer.work")}</Typography>
          <div className={classes.gitHub}>
            <GitHubWork />
          </div>
        </Grid>
      </Grid>
      <div className={classes.container}>
        <div className={classes.item}>
          <Typography sx={{ mr: 6 }} className={classes.text}>
            {t("footer.copy")}
          </Typography>
        </div>
      </div>
    </div>
  );
}
