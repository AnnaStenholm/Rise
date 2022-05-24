import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  sectionContents: {
    backgroundColor: "#ffc5a5",
    height: "670px",
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
      height: "700px",
      "@media (max-width: 650px)": {
        height: "720px",
        "@media (max-width: 636px)": {
          height: "740px",
          "@media (max-width: 598px)": {
            height: "800px",
            "@media (max-width: 527px)": {
              height: "850px",
              "@media (max-width: 475px)": {
                height: "870px",
                "@media (max-width: 417px)": {
                  height: "890px",
                  "@media (max-width: 414px)": {
                    height: "910px",
                    "@media (max-width: 393px)": {
                      height: "940px",
                      "@media (max-width: 387px)": {
                        height: "960px",
                        "@media (max-width: 352px)": {
                          height: "980px",
                          "@media (max-width: 350px)": {
                            height: "1020px",
                            "@media (max-width: 347px)": {
                              height: "1060px",
                              "@media (max-width: 327px)": {
                                height: "1100px",
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
    width: "400px",
  },
}));

export default function LegRaise() {
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
              {t("StomachSection.legRaise.title")}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {t("StomachSection.legRaise.text")}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src="/images/LegRaise.jpeg"
                alt="leg raise"
                className={classes.image}
              ></img>
            </div>
          </Grid>
          <div className={classes.practise}>
            <Typography sx={{ mb: 2 }} style={{ fontWeight: "bold" }}>
              {t("StomachSection.legRaise.practise")}
            </Typography>
          </div>
          <Grid item sx={{ mt: 2 }} lg={12} md={12} sm={12} xs={12}>
            <div className={classes.instructions}>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>1.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.legRaise.1")}
                  </Typography>
                </div>
              </div>

              <div className={classes.textBox}>
                <div className={classes.numberBox}>2.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.legRaise.2")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>3.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2 }}>
                    {t("StomachSection.legRaise.3")}
                  </Typography>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.numberBox}>4.</div>
                <div className={classes.textBackGround}>
                  <Typography textAlign={"left"} sx={{ ml: 2, mt: 1 }}>
                    {t("StomachSection.legRaise.4")}
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
