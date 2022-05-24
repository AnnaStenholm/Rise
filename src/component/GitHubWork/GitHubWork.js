import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  link: { color: "#BF7286" },
}));
export default function GitHubWork() {
  const classes = useStyles();

  return (
    <div>
      <Link
        to="//www.github.com/AnnaStenholm"
        method="https"
        className={classes.link}
      >
        <GitHubIcon className={classes.gitHub} />
      </Link>
    </div>
  );
}
