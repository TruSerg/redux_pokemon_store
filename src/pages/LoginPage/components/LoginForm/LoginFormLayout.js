import PropTypes from "prop-types";

import { Box, Button, CircularProgress, Input } from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";
import pikachu from "../../../../static/images/pikachu.png";

const LoginFormLayout = ({
  isLoading,
  isFormValid,
  formData,
  onChange,
  onSubmit,
  error,
  classes,
  handleGoToRegistrationPage,
}) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${pikachu})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
      className={classes.wrapper}
    >
      <Box className={classes.formArea}>
        {isLoading ? (
          <Box className={classes.progressArea}>
            <CircularProgress />
          </Box>
        ) : (
          <Box className={classes.form}>
            <form onSubmit={onSubmit} id="myForm">
              <Box>
                <Input
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={onChange}
                  placeholder="Email"
                />
              </Box>
              <Box className={classes.input}>
                <Input
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={onChange}
                  placeholder="Password"
                />
              </Box>

              <Box className={classes.button}>
                <Button
                  variant="contained"
                  color="success"
                  className={classes.btn}
                  disabled={!isFormValid}
                  type="submit"
                  form="myForm"
                >
                  LOGIN
                </Button>
              </Box>
              <Box className={classes.button}>
                <Button
                  onClick={handleGoToRegistrationPage}
                  variant="contained"
                  color="error"
                  className={classes.btn}
                >
                  SIGNUP
                </Button>
              </Box>
              {error && <div className={classes.error}>{error}!!!</div>}
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
};

LoginFormLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginFormLayout);
