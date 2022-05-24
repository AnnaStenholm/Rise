import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#ffd388",
    height: "680px",
    borderRadius: "20px",
    color: "#332549",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    margin: "auto",
    boxShadow: "rgb(0 0 0 / 5%) 10px 12px 20px 20px",
    "@media (max-width: 883px)": {
      height: "700px",
      "@media (max-width: 714px)": {
        height: "720px",
        "@media (max-width: 687px)": {
          height: "750px",
          "@media (max-width: 663px)": {
            height: "800px",
            "@media (max-width: 600px)": {
              height: "820px",
              "@media (max-width: 535px)": {
                height: "840px",
                "@media (max-width: 520px)": {
                  height: "860px",
                  "@media (max-width: 516px)": {
                    height: "880px",
                    "@media (max-width: 505px)": {
                      height: "900px",
                      "@media (max-width: 474px)": {
                        height: "920px",
                        "@media (max-width: 416px)": {
                          height: "960px",
                          "@media (max-width: 413px)": {
                            height: "990px",
                            "@media (max-width: 403px)": {
                              height: "1010px",
                              "@media (max-width: 393px)": {
                                height: "1040px",
                                "@media (max-width: 380px)": {
                                  height: "1060px",
                                  "@media (max-width: 375px)": {
                                    height: "1100px",
                                    "@media (max-width: 337px)": {
                                      height: "1140px",
                                      "@media (max-width: 327px)": {
                                        height: "1160px",
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
  },
  image: {
    display: "block",
    transition: "0.5s ease",
    backfaceVisibility: "hidden",
    width: "300px",
    borderRadius: "20px",
    height: "200px",
    margin: "auto",
    "@media (max-width: 540px)": {
      width: "250px",
      "@media (max-width: 470px)": {
        width: "200px",
        height: "150px",
        "@media (max-width:360px)": {
          width: "150px",
          height: "100px",
        },
      },
    },
  },
  practise: {
    justifyContent: "center",
    marginTop: "20px",
    display: "flex",
  },
  instructions: {
    alignItems: "center",
    margin: "auto",
  },
  textBox: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    marginBottom: "10px",
    justifyContent: "center",
  },
  numberBox: {
    height: "37px",
    backgroundColor: "#865276",
    color: "#ffff",
    display: "inline-block",
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
  },
}));

export default function BicycleCrunch() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Grid container direction="row" sx={{ mt: 1 }} justifyContent={"center"}>
        <div className={classes.sectionContents}>
          <Grid item>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
              style={{ fontWeight: "bold" }}
            >
              {t("StomachSection.bicycleCrunch.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("StomachSection.bicycleCrunch.text")}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/crunches.jpeg"
                alt="bicycle crunch"
                className={classes.image}
              ></img>
            </div>
          </Grid>
          <div className={classes.practise}>
            <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
              {t("StomachSection.bicycleCrunch.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.bicycleCrunch.1")}
                  </Typography>
                </div>
              </div>

              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("StomachSection.bicycleCrunch.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.bicycleCrunch.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.bicycleCrunch.4")}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
