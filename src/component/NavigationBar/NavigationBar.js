import { React, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import Icon from "../../component/icon/RiseToTheOccasionLogo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../../SelectLanguage/SelectLanguage";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Hidden } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import { Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import "./NavigationBarStyle.css";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  wrapper: {
    flexWrap: "wrap",
  },
  toolbarLeft: {
    alignItems: "left",
    display: "flex",
    justifyContent: "flex-start",
  },
  toolbarRight: {
    alignItems: "center",
    display: "flex",
    float: "right",
    justifyContent: "right",
  },
  link: {
    textDecoration: "none",
    color: "#593f64",
  },
  menuButton: {
    color: "#593f64 !important",
  },
  languageMenuMobile: {},
}));

export default function NavigationBar() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div>
      <AppBar
        style={{
          backgroundColor: "transparent",
          minHeight: "auto",
          marginBottom: "0",
        }}
      >
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flex="1"
            spacing={2}
          >
            <Hidden mdDown>
              <Grid item className={classes.toolbarLeft} sx={{ mt: 1 }}>
                <Link to="/">
                  <Icon />
                </Link>
              </Grid>

              <Grid item sx={{ mt: 8 }}>
                <div className="links">
                  <Link to="/about" className={classes.link}>
                    <Typography variant="body1">
                      {t("NavigationBar.menu.about")}
                    </Typography>
                  </Link>
                </div>
              </Grid>
              <Grid item sx={{ mt: 8 }}>
                <div className="links">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    className={classes.menuButton}
                  >
                    <Typography variant="body1">
                      {t("NavigationBar.menu.work-out")}
                    </Typography>
                  </Button>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  <div className="links">
                    <Link to="/workout/back" className={classes.link}>
                      <MenuItem onClick={handleClose}>
                        {t("NavigationBar.menu.back")}
                      </MenuItem>
                    </Link>
                    <Link to="/workout/legs" className={classes.link}>
                      <MenuItem onClick={handleClose}>
                        {t("NavigationBar.menu.legs")}
                      </MenuItem>
                    </Link>
                    <Link to="/workout/stomach" className={classes.link}>
                      <MenuItem onClick={handleClose}>
                        {t("NavigationBar.menu.stomach")}
                      </MenuItem>
                    </Link>
                  </div>
                </Menu>
              </Grid>

              <Grid item className={classes.toolbarRight}>
                <div className="mobile_links">
                  <SelectLanguage />
                </div>
              </Grid>
            </Hidden>
          </Grid>

          <Hidden mdUp>
            <IconButton>
              <MenuIcon
                onClick={() => setOpenBurger(true)}
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "#ffefbe",
                }}
              />
            </IconButton>
          </Hidden>
        </Toolbar>
        <SwipeableDrawer
          anchor="right"
          open={openBurger}
          onOpen={() => setOpenBurger(true)}
          onClose={() => setOpenBurger(false)}
          sx={{
            [`& .MuiDrawer-paper`]: {
              backgroundColor: "#ffefbe",
            },
          }}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpenBurger(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              <div className="mobile_links">
                <Link to="/" className={classes.link}>
                  <div className="mobile_texts">
                    <Typography variant="body1">
                      {t("NavigationBar.menu.home")}
                    </Typography>
                  </div>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="mobile_links">
                <Link to="/about" className={classes.link}>
                  <div className="mobile_texts">
                    <Typography variant="body1">
                      {t("NavigationBar.menu.about")}
                    </Typography>
                  </div>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="mobile_links">
                <Link to="/workout/back" className={classes.link}>
                  <div className="mobile_texts">
                    <Typography>{t("NavigationBar.menu.back")}</Typography>
                  </div>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="mobile_links">
                <Link to="/workout/legs" className={classes.link}>
                  <div className="mobile_texts">
                    <Typography>{t("NavigationBar.menu.legs")}</Typography>
                  </div>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="mobile_links">
                <Link to="/workout/stomach" className={classes.link}>
                  <div className="mobile_texts">
                    <Typography>{t("NavigationBar.menu.stomach")}</Typography>
                  </div>
                </Link>
              </div>
            </ListItem>
            <ListItem sx={{ mt: 3 }}>
              <SelectLanguage />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
}
