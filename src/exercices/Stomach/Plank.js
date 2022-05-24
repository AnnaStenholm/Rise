import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#eeafaa",
    height: "740px",
    borderRadius: "20px",
    color: "#332549",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    margin: "auto",
    boxShadow: "rgb(0 0 0 / 5%) 10px 12px 20px 20px",
    "@media (max-width: 900px)": {
      height: "780px",
      "@media (max-width: 770px)": {
        height: "830px",
        "@media (max-width: 705px)": {
          height: "860px",
          "@media (max-width: 614px)": {
            height: "890px",
            "@media (max-width: 586px)": {
              height: "910px",
              "@media (max-width: 568px)": {
                height: "950px",
                "@media (max-width: 540px)": {
                  height: "930px",
                  "@media (max-width: 515px)": {
                    height: "970px",
                    "@media (max-width: 510px)": {
                      height: "1010px",
                      "@media (max-width: 501px)": {
                        height: "1030px",
                        "@media (max-width: 494px)": {
                          height: "1100px",
                          "@media (max-width: 472px)": {
                            height: "1130px",
                            "@media (max-width: 452px)": {
                              height: "1180px",
                              "@media (max-width: 433px)": {
                                height: "1220px",
                                "@media (max-width: 410px)": {
                                  height: "1250px",
                                  "@media (max-width: 405px)": {
                                    height: "1270px",
                                    "@media (max-width: 384px)": {
                                      height: "1320px",
                                      "@media (max-width: 378px)": {
                                        height: "1370px",
                                        "@media (max-width: 365px)": {
                                          height: "1390px",
                                          "@media (max-width: 356px)": {
                                            height: "1430px",
                                            "@media (max-width: 351px)": {
                                              height: "1480px",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  imgContainer: {
    alignItems: "center",
    display: "flex",
  },
  image: {
    display: "flex",
    width: "300px",
    borderRadius: "20px",
    height: "200px",
    margin: "auto",
    backfaceVisibility: "hidden",
    "@media (max-width: 540px)": {
      width: "250px",
      height: "150px",
      "@media (max-width: 470px)": {
        width: "200px",
        height: "110px",
        "@media (max-width:360px)": {
          width: "150px",
          height: "100px",
        },
      },
    },
  },
  textBox: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    marginBottom: "10px",
  },
  numberBox: {
    height: "37px",
    backgroundColor: "#865276",
    color: "#ffff",
    display: "flex",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    flexDirection: "column",
    fontWeight: "bold",
  },
  textBackGround: {
    backgroundColor: "#865276",
    padding: "5px",
    color: "#ffff",
    boxSizing: "border-box",
    width: "500px",
    display: "flex",
  },
}));

export default function Plank() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <span className={classes.sectionContents}>
      <Grid container direction="row" sx={{ mt: 1 }} justifyContent={"center"}>
        <Grid item>
          <Typography
            variant="h6"
            sx={{ mb: 2 }}
            style={{ fontWeight: "bold" }}
          >
            {t("StomachSection.plank.title")}
          </Typography>
          <Typography> {t("StomachSection.plank.text")}</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} sx={{ mt: 2 }}>
        <Grid item>
          <div className={classes.imgContainer}>
            <img
              src="/images/plankan.jpeg"
              alt="the plank"
              className={classes.image}
            ></img>
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
          <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
            {t("StomachSection.plank.practise")}
          </Typography>
        </Grid>
        <Grid item lg={6} sm={8} xs={8}>
          <div className={classes.textBox}>
            <div className={classes.numberBox}>1.</div>
            <div className={classes.textBackGround}>
              <Typography textAlign={"left"} sx={{ ml: 2 }}>
                {t("StomachSection.plank.1")}
              </Typography>
            </div>
          </div>

          <div className={classes.textBox}>
            <div className={classes.numberBox}>2.</div>
            <div className={classes.textBackGround}>
              <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                {t("StomachSection.plank.2")}
              </Typography>
            </div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.numberBox}>3.</div>
            <div className={classes.textBackGround}>
              <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                {t("StomachSection.plank.3")}
              </Typography>
            </div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.numberBox}>4.</div>
            <div className={classes.textBackGround}>
              <Typography textAlign={"left"} sx={{ ml: 2 }}>
                {t("StomachSection.plank.4")}
              </Typography>
            </div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.numberBox}>5.</div>
            <div className={classes.textBackGround}>
              <Typography textAlign={"left"} sx={{ ml: 2 }}>
                {t("StomachSection.plank.5")}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </span>
  );
}
