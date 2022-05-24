import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  link: { color: "#BF7286" },
}));
export default function SocialFollow() {
  const classes = useStyles();

  return (
    <div>
      <Link
        to="//www.linkedin.com/in/anna-stenholm-aa11783a"
        method="https"
        className={classes.link}
      >
        <LinkedInIcon className={classes.socialIcon} />
      </Link>
      <div>
        <Link
          to="//www.instagram.com/annastenholm/"
          method="https"
          className={classes.link}
        >
          <InstagramIcon className={classes.socialIcon} />
        </Link>
      </div>
    </div>
  );
}
