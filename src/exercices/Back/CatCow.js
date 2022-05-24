import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#e0b7bb",
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
    "@media (max-width: 946px)": {
      height: "760px",
      "@media (max-width: 728px)": {
        height: "790px",

        "@media (max-width: 632px)": {
          height: "820px",
          "@media (max-width: 612px)": {
            height: "870px",
            "@media (max-width: 602px)": {
              height: "890px",
              "@media (max-width: 551px)": {
                height: "910px",
                "@media (max-width: 540px)": {
                  height: "870px",
                  "@media (max-width: 528px)": {
                    height: "900px",
                    "@media (max-width: 513px)": {
                      height: "930px",
                      "@media (max-width: 500px)": {
                        height: "950px",
                        "@media (max-width: 460px)": {
                          height: "980px",
                          "@media (max-width: 448px)": {
                            height: "1030px",
                            "@media (max-width: 437px)": {
                              height: "1070px",
                              "@media (max-width: 416px)": {
                                height: "1110px",
                                "@media (max-width: 408px)": {
                                  height: "1150px",
                                  "@media (max-width: 394px)": {
                                    height: "1180px",
                                    "@media (max-width: 387px)": {
                                      height: "1200px",
                                      "@media (max-width: 374px)": {
                                        height: "1250px",
                                        "@media (max-width: 370px)": {
                                          height: "1270px",
                                          "@media (max-width: 367px)": {
                                            height: "1290px",
                                            "@media (max-width: 347px)": {
                                              height: "1340px",
                                              "@media (max-width: 335px)": {
                                                height: "1360px",
                                                "@media (max-width: 330px)": {
                                                  height: "1380px",
                                                  "@media (max-width: 326px)": {
                                                    height: "1400px",
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
    width: "250px",
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
    boxSizing: "border-box",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    marginBottom: "10px",
    justifyContent: "center",
  },
  numberBox: {
    height: "37px",
    backgroundColor: "#4c3d5e",
    color: "#ffff",
    justifyContent: "center",
    marginRight: "10px",
    padding: "10px",
    flexDirection: "column",
    fontWeight: "bold",
  },
  textBackGround: {
    backgroundColor: "#4c3d5e",
    padding: "5px",
    color: "#ffff",
    boxSizing: "border-box",
    width: "400px",
  },
}));

export default function CatCow() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Grid container direction="row" sx={{ mt: 1 }} justifyContent={"center"}>
        <div className={classes.sectionContents}>
          <Grid item>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              sx={{ mb: 2 }}
            >
              {t("BackSection.catCow.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("BackSection.catCow.text")}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/cat-cow.jpeg"
                alt="Cat/Cow"
                className={classes.image}
              ></img>
            </div>
          </Grid>
          <div className={classes.practise}>
            <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
              {t("BackSection.catCow.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.catCow.1")}
                  </Typography>
                </div>
              </div>

              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.catCow.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("BackSection.catCow.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("BackSection.catCow.4")}
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
