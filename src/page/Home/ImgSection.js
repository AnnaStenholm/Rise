import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ImgSectionStyle.css";

const useStyles = makeStyles((theme) => ({
  imgSection: {
    width: "100%",
    backgroundColor: "#754b6f",
    opacity: 0.65,
    height: "430px",
    "@media (max-width: 1030px)": {
      height: "300px",
    },
    "@media (max-width: 670px)": {
      height: "800px",
    },
  },
  img: {
    width: "293px",
    borderRadius: "20px",
    height: "293px",
    margin: "auto",
    opacity: 1,
    display: "block",
    transition: "0.5s ease",
    backfaceVisibility: "hidden",
    marginLeft: "40px",
    "@media (max-width: 1030px)": {
      width: "200px",
      height: "200px",
    },
  },
}));

export default function ImgSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <section className={classes.imgSection}>
        <Grid container justifyContent="center" flexDirection="row">
          <div className="container">
            <div className="img_container">
              <img
                src="images/woman-back.jpeg"
                alt="back exercices"
                class="image"
                className={classes.img}
              ></img>

              <Link to="/workout/back">
                <div className="middle">
                  <div className="text">
                    <Typography variant="h5">
                      {t("HomePage.ImgSection.back_exercices")}
                    </Typography>
                  </div>
                </div>
              </Link>
            </div>

            <div className="img_container">
              <img
                src="images/woman-legs.jpeg"
                alt="leg exercices"
                class="image"
                className={classes.img}
              ></img>

              <Link to="/workout/legs">
                <div className="middle">
                  <div className="text">
                    <Typography variant="h5">
                      {t("HomePage.ImgSection.leg_exercices")}
                    </Typography>
                  </div>
                </div>
              </Link>
            </div>

            <div className="img_container">
              <img
                src="images/woman-stomach.jpeg"
                alt="stomach exercices"
                class="image"
                className={classes.img}
              ></img>

              <Link to="/workout/stomach">
                <div className="middle">
                  <div className="text">
                    <Typography variant="h5">
                      {t("HomePage.ImgSection.stomach_exercices")}
                    </Typography>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Grid>
      </section>
    </div>
  );
}
