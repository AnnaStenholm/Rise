import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PeeingDog from "../../exercices/Back/PeeingDog";
import SuperMan from "../../exercices/Back/Superman";
import CatCow from "../../exercices/Back/CatCow";

const useStyles = makeStyles((theme) => ({
  parallax1: {
    backgroundImage: 'url("/background/negative-space.jpg")',
    minHeight: "1100px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "@media (max-width: 1084px)": {
      minHeight: "1150px",
      "@media (max-width: 905px)": {
        minHeight: "1200px",
        "@media (max-width: 705px)": {
          minHeight: "1230px",
          "@media (max-width: 610px)": {
            height: "1280px",
            "@media (max-width: 575px)": {
              height: "1320px",
              "@media (max-width: 558px)": {
                height: "1350px",
                "@media (max-width: 492px)": {
                  height: "1400px",
                  "@media (max-width: 464px)": {
                    height: "1430px",
                    "@media (max-width: 450px)": {
                      height: "1480px",
                      "@media (max-width: 427px)": {
                        height: "1520px",
                        "@media (max-width: 405px)": {
                          height: "1560px",
                          "@media (max-width: 388px)": {
                            height: "1600px",
                            "@media (max-width: 377px)": {
                              height: "1700px",
                              "@media (max-width: 370px)": {
                                height: "1780px",
                                "@media (max-width: 355px)": {
                                  height: "1750px",
                                  "@media (max-width: 351px)": {
                                    height: "1790px",
                                    "@media (max-width: 328px)": {
                                      height: "1850px",
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
    "@media (max-width: 650px)": {
      minHeight: "1020px",
      "@media (max-width: 606px)": {
        minHeight: "1050px",
        "@media (max-width: 585px)": {
          minHeight: "1090px",
          "@media (max-width: 407px)": {
            minHeight: "1140px",
            "@media (max-width: 390px)": {
              minHeight: "1220px",
              "@media (max-width: 370px)": {
                minHeight: "1260px",
                "@media (max-width: 354px)": {
                  minHeight: "1320px",
                  "@media (max-width: 346px)": {
                    minHeight: "1380px",
                    "@media (max-width: 336px)": {
                      minHeight: "1390px",
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
      height: "1050px",
      "@media (max-width: 616px)": {
        height: "1120px",
        "@media (max-width: 607px)": {
          height: "1150px",
          "@media (max-width: 540px)": {
            height: "1200px",
            "@media (max-width: 480px)": {
              height: "1250px",
              "@media (max-width: 460px)": {
                height: "1300px",
                "@media (max-width: 450px)": {
                  height: "1350px",
                  "@media (max-width: 441px)": {
                    height: "1390px",
                    "@media (max-width: 408px)": {
                      height: "1450px",
                      "@media (max-width: 397px)": {
                        height: "1500px",
                        "@media (max-width: 374px)": {
                          height: "1590px",
                          "@media (max-width: 364px)": {
                            height: "1620px",
                            "@media (max-width: 347px)": {
                              height: "1690px",
                              "@media (max-width: 330px)": {
                                height: "1730px",
                                "@media (max-width: 326px)": {
                                  height: "1760px",
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

export default function BackSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <main>
      <div className={classes.parallax1}>
        <section className={classes.SectionWrapper1}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("BackSection.title")}
          </Typography>
          <Container justifyContent={"center"} sx={{ mb: 5 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {t("BackSection.sub_title")}
            </Typography>
          </Container>
          <PeeingDog />
        </section>
      </div>

      <div className={classes.parallax2}>
        <section className={classes.SectionWrapper2}>
          <SuperMan />
        </section>
      </div>
      <div className={classes.parallax3}>
        <section className={classes.SectionWrapper3}>
          <CatCow />
        </section>
      </div>
    </main>
  );
}
