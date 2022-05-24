import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import Lunges from "../../exercices/Legs/Lunges";
import Squats from "../../exercices/Legs/Squats";
import HipLift from "../../exercices/Legs/HipLift";

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
    "@media (max-width: 1033px)": {
      minHeight: "1200px",
      "@media (max-width: 905px)": {
        minHeight: "1230px",
        "@media (max-width: 650px)": {
          minHeight: "1280px",
          "@media (max-width: 555px)": {
            minHeight: "1350px",
            "@media (max-width: 510px)": {
              height: "1400px",
              "@media (max-width: 425px)": {
                height: "1550px",
                "@media (max-width: 415px)": {
                  height: "1660px",
                  "@media (max-width: 367px)": {
                    height: "1700px",
                    "@media (max-width: 348px)": {
                      height: "1770px",
                      "@media (max-width: 335px)": {
                        height: "1880px",
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
    minHeight: "800px",
    opacity: 0.65,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "@media (max-width: 1350px)": {
      minHeight: "900px",
      "@media (max-width: 643px)": {
        minHeight: "920px",
        "@media (max-width: 600px)": {
          minHeight: "940px",
          "@media (max-width: 507px)": {
            minHeight: "980px",
            "@media (max-width: 450px)": {
              minHeight: "1010px",
              "@media (max-width: 390px)": {
                minHeight: "1080px",
                "@media (max-width: 370px)": {
                  minHeight: "1130px",
                  "@media (max-width: 346px)": {
                    minHeight: "1170px",
                    "@media (max-width: 325px)": {
                      minHeight: "1240px",
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
        height: "1120px",
        "@media (max-width: 415px)": {
          height: "1150px",
          "@media (max-width: 388px)": {
            height: "1220px",
            "@media (max-width: 348px)": {
              height: "1290px",
              "@media (max-width: 328px)": {
                height: "1350px",
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

export default function LegSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <main>
      <div className={classes.parallax1}>
        <section className={classes.SectionWrapper1}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t("LegSection.title")}
          </Typography>
          <Container justifyContent={"center"} sx={{ mb: 5 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {t("LegSection.sub_title")}
            </Typography>
          </Container>
          <Lunges />
        </section>
      </div>
      <div className={classes.parallax2}>
        <section className={classes.SectionWrapper2}>
          <Squats />
        </section>
      </div>
      <div className={classes.parallax3}>
        <section className={classes.SectionWrapper3}>
          <HipLift />
        </section>
      </div>
    </main>
  );
}
