import React from "react";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  link: { color: "#BF7286" },
}));

export default function ButtonMailTo({ mailto, label }) {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
      <MailIcon className={classes.mail} />
    </Link>
  );
}
