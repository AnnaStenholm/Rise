import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#d298ae",
    height: "730px",
    borderRadius: "20px",
    color: "#332549",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    margin: "auto",
    boxShadow: "rgb(0 0 0 / 5%) 10px 12px 20px 20px",
    "@media (max-width: 1033px)": {
      height: "760px",
      "@media (max-width: 658px)": {
        height: "780px",
        "@media (max-width: 585px)": {
          height: "800px",
          "@media (max-width: 554px)": {
            height: "830px",
            "@media (max-width: 544px)": {
              height: "860px",
              "@media (max-width: 511px)": {
                height: "880px",
                "@media (max-width: 472px)": {
                  height: "840px",
                  "@media (max-width: 458px)": {
                    height: "860px",
                    "@media (max-width: 453px)": {
                      height: "880px",
                      "@media (max-width: 443px)": {
                        height: "900px",
                        "@media (max-width: 433px)": {
                          height: "900px",
                          "@media (max-width: 423px)": {
                            height: "940px",
                            "@media (max-width: 416px)": {
                              height: "980px",
                              "@media (max-width: 405px)": {
                                height: "1010px",
                                "@media (max-width: 383px)": {
                                  height: "1010px",
                                  "@media (max-width: 376px)": {
                                    height: "1030px",
                                    "@media (max-width: 370px)": {
                                      height: "1050px",
                                      "@media (max-width: 364px)": {
                                        height: "1070px",
                                        "@media (max-width: 354px)": {
                                          height: "1090px",
                                          "@media (max-width: 345px)": {
                                            height: "1120px",
                                            "@media (max-width: 333px)": {
                                              height: "1210px",
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
    backgroundColor: "#b56c87",
    color: "#ffff",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    flexDirection: "column",
    fontWeight: "bold",
  },
  textBackGround: {
    backgroundColor: "#b56c87",
    padding: "5px",
    color: "#ffff",
    boxSizing: "border-box",
    width: "400px",
  },
}));

export default function Lunges() {
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
              {t("LegSection.lunges.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("LegSection.lunges.text")}
            </Typography>
          </Grid>

          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/lunges.jpeg"
                alt="lunges"
                className={classes.image}
              ></img>
            </div>
          </Grid>

          <div className={classes.practise}>
            <Typography style={{ fontWeight: "bold" }}>
              {t("LegSection.lunges.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("LegSection.lunges.1")}
                  </Typography>
                </div>
              </div>

              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("LegSection.lunges.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("LegSection.lunges.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("LegSection.lunges.4")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>5.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("LegSection.lunges.5")}
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
