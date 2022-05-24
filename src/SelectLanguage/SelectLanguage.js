import React from "react";
import i18next from "i18next";
import { makeStyles } from "@mui/styles";
import { ButtonBase } from "@mui/material";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  languageBox: {
    display: "flex",
    alignItems: "right",
  },
  languageItem: {
    height: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  languageText: {
    fontSize: "1rem",
    marginRight: 4,
    marginLeft: 12,
    color: "#593f64",
  },
}));

export default function SelectLanguage() {
  const classes = useStyles();

  const languages = [
    { code: "se", nameSv: "Svenska" },
    { code: "gb", nameEn: "English" },
  ];

  return (
    <div className={classes.languageBox}>
      {languages.map((language) => (
        <ButtonBase
          key={language.code}
          className={classes.languageItem}
          onClick={() => {
            i18next.changeLanguage(language.code);
          }}
        >
          <div>
            <Typography className={classes.languageText} variant="body1">
              {language.nameSv}
            </Typography>

            <Typography
              sx={{ ml: 3 }}
              className={classes.languageText}
              variant="body1"
            >
              {language.nameEn}
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </div>
  );
}
