import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import Plank from "../../exercices/Stomach/Plank";
import BicycleCrunch from "../../exercices/Stomach/BicycleCrunch";
import LegRaise from "../../exercices/Stomach/LegRaise";

const useStyles = makeStyles((theme) => ({
  parallax1: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "1180px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "@media (max-width: 905px)": {
      minHeight: "1230px",
      "@media (max-width: 770px)": {
        height: "1300px",
        "@media (max-width: 705px)": {
          minHeight: "1370px",
          "@media (max-width: 606px)": {
            minHeight: "1400px",
            "@media (max-width: 585px)": {
              height: "1460px",
              "@media (max-width: 575px)": {
                height: "1510px",
                "@media (max-width: 555px)": {
                  minHeight: "1550px",
                  "@media (max-width: 516px)": {
                    height: "1630px",
                    "@media (max-width: 507px)": {
                      height: "1670px",
                      "@media (max-width: 492px)": {
                        height: "1780px",
                        "@media (max-width: 458px)": {
                          height: "1810px",
                          "@media (max-width: 453px)": {
                            height: "1880px",
                            "@media (max-width: 436px)": {
                              height: "1950px",
                              "@media (max-width: 410px)": {
                                height: "2000px",
                                "@media (max-width: 393px)": {
                                  height: "2050px",
                                  "@media (max-width: 385px)": {
                                    height: "2080px",
                                    "@media (max-width: 382px)": {
                                      height: "2120px",
                                      "@media (max-width: 377px)": {
                                        height: "2180px",
                                        "@media (max-width: 366px)": {
                                          height: "2220px",
                                          "@media (max-width: 355px)": {
                                            height: "2260px",
                                            "@media (max-width: 351px)": {
                                              height: "2300px",
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
  parallax2: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "900px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "@media (max-width: 665px)": {
      minHeight: "1000px",
      "@media (max-width: 643px)": {
        minHeight: "1050px",
        "@media (max-width: 587px)": {
          minHeight: "1080px",
          "@media (max-width: 507px)": {
            minHeight: "1180px",
            "@media (max-width: 477px)": {
              minHeight: "1200px",
              "@media (max-width: 447px)": {
                minHeight: "1220px",
                "@media (max-width: 427px)": {
                  minHeight: "1240px",
                  "@media (max-width: 392px)": {
                    minHeight: "1260px",
                    "@media (max-width: 376px)": {
                      minHeight: "1290px",
                      "@media (max-width: 346px)": {
                        minHeight: "1360px",
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
  parallax3: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "1000px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "@media (max-width: 650px)": {
      height: "1080px",
      "@media (max-width: 480px)": {
        height: "1180px",
        "@media (max-width: 415px)": {
          height: "1210px",
          "@media (max-width: 388px)": {
            height: "1290px",
            "@media (max-width: 348px)": {
              height: "1350px",
              "@media (max-width: 328px)": {
                height: "1480px",
              },
            },
          },
        },
      },
    },
  },
  SectionWrapper1: {
    position: "absolute",
    left: 0,
    top: "20%",
    width: "100%",
    color: "#332549",
    flexDirection: "row",
    textAlign: "center",
  },
  SectionWrapper2: {
    position: "absolute",
    left: 0,
    top: "10%",
    width: "100%",
    color: "#332549",
    flexDirection: "row",
    textAlign: "center",
  },
  SectionWrapper3: {
    position: "absolute",
    left: 0,
    top: "10%",
    width: "100%",
    color: "#332549",
    flexDirection: "row",
    textAlign: "center",
  },
}));

export default function StomachSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <main>
      <div className={classes.parallax1}>
        <section className={classes.SectionWrapper1}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("StomachSection.title")}
          </Typography>
          <Container justifyContent={"center"} sx={{ mb: 5 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {t("StomachSection.sub_title")}
            </Typography>
          </Container>
          <Plank />
        </section>
      </div>
      <div className={classes.parallax2}>
        <section className={classes.SectionWrapper2}>
          <BicycleCrunch />
        </section>
      </div>
      <div className={classes.parallax3}>
        <section className={classes.SectionWrapper3}>
          <LegRaise />
        </section>
      </div>
    </main>
  );
}
