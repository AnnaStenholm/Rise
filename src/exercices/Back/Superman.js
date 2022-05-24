import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#e0999f",
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
    "@media (max-width: 770px)": {
      height: "760px",
      "@media (max-width: 644px)": {
        height: "800px",
        "@media (max-width: 636px)": {
          height: "820px",
          "@media (max-width: 585px)": {
            height: "840px",
            "@media (max-width: 543px)": {
              height: "860px",
              "@media (max-width: 537px)": {
                height: "810px",
                "@media (max-width: 511px)": {
                  height: "830px",
                  "@media (max-width: 468px)": {
                    height: "870px",
                    "@media (max-width: 458px)": {
                      height: "890px",
                      "@media (max-width: 453px)": {
                        height: "900px",
                        "@media (max-width: 436px)": {
                          height: "920px",
                          "@media (max-width: 416px)": {
                            height: "930px",
                            "@media (max-width: 405px)": {
                              height: "970px",
                              "@media (max-width: 388px)": {
                                height: "990px",
                                "@media (max-width: 383px)": {
                                  height: "1010px",
                                  "@media (max-width: 376px)": {
                                    height: "1050px",
                                    "@media (max-width: 370px)": {
                                      height: "1070px",
                                      "@media (max-width: 364px)": {
                                        height: "1090px",
                                        "@media (max-width: 354px)": {
                                          height: "1110px",
                                          "@media (max-width: 345px)": {
                                            height: "1140px",
                                            "@media (max-width: 333px)": {
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
      height: "150px",
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
    backgroundColor: "#985f82",
    color: "#ffff",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    flexDirection: "column",
    fontWeight: "bold",
  },
  textBackGround: {
    backgroundColor: "#985f82",
    padding: "5px",
    color: "#ffff",
    boxSizing: "border-box",
    width: "400px",
  },
}));

export default function SuperMan() {
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
              {t("BackSection.superMan.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("BackSection.superMan.text")}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/superman.jpeg"
                alt="superman"
                className={classes.image}
              ></img>
            </div>
          </Grid>
          <div className={classes.practise}>
            <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
              {t("BackSection.superMan.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.superMan.1")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.superMan.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.superMan.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("BackSection.superMan.4")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>5.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("BackSection.superMan.5")}
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
