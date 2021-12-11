import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ShoppingCartOutlined,
  PersonOutline,
  Logout,
  HowToReg,
  Login,
} from "@mui/icons-material";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";

import { Badge, Box, Container, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";

import { useLogout } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import styles from "./styles";

const Header = ({ classes }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cartPage);
  const handleLogout = useLogout();

  return (
    <Box className={classes.headerWrapper}>
      <Container>
        {isAuth ? (
          <Box className={classes.wrapperNav}>
            <Box>
              <Link to={ROUTES.POKEMONS_PAGE}>
                <IconButton color="primary">
                  <SettingsBackupRestoreRoundedIcon
                    className={classes.icon}
                    fontSize="large"
                  />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link to={ROUTES.CART_PAGE}>
                <IconButton color="primary">
                  <Badge badgeContent={quantity} color="error">
                    <ShoppingCartOutlined
                      className={classes.icon}
                      fontSize="large"
                    />
                  </Badge>
                </IconButton>
              </Link>
              <Link to={ROUTES.USER_PAGE}>
                <IconButton color="primary">
                  <PersonOutline className={classes.icon} fontSize="large" />
                </IconButton>
              </Link>
              <IconButton color="primary" onClick={handleLogout}>
                <Logout className={classes.icon} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box>
            <Link to={ROUTES.LOGIN}>
              <IconButton color="primary">
                <Login className={classes.icon} fontSize="large" />
              </IconButton>
            </Link>

            <Link to={ROUTES.REGISTRATION}>
              <IconButton color="primary">
                <HowToReg className={classes.icon} fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default withStyles(styles)(Header);
