import PropTypes from "prop-types";

import BasicSelect from "../../../../commonComponents/Select";

import {
  Alert,
  CircularProgress,
  Snackbar,
  Button,
  Input,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { withStyles } from "@mui/styles";

import styles from "./styles";
import pikachu from "../../../../static/images/pikachu.png";

const RegistrationForm = ({
  isFormValid,
  formData,
  isOpen,
  handleClose,
  onSubmit,
  onChange,
  error,
  handleGoToLoginPage,
  classes,
  isLoading,
}) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${pikachu})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
      className={classes.registrationWrapper}
    >
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
            <Box>
              <Input
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={onChange}
                placeholder="First name"
              />
            </Box>
            <Box>
              <Input
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={onChange}
                placeholder="Last name"
              />
            </Box>
            <Box>
              <Input
                type="phone"
                value={formData.phone}
                name="phone"
                onChange={onChange}
                placeholder="Phone"
              />
            </Box>
            <Box>
              <Input
                type="password"
                value={formData.password}
                name="password"
                onChange={onChange}
                placeholder="Password"
              />
            </Box>
            <Box className={classes.input}>
              <Input
                type="password"
                value={formData.passwordConfirm}
                name="passwordConfirm"
                onChange={onChange}
                placeholder="Confirm password"
              />
            </Box>
            <Box className={classes.select}>
              <BasicSelect
                value={formData.gender}
                name="gender"
                label="GENDER"
                onChange={onChange}
              />
            </Box>
            {error && <Box className={classes.error}>{error}!!!</Box>}
            <Box className={classes.button}>
              <Button
                variant="contained"
                color="error"
                className={classes.btn}
                disabled={!isFormValid}
                type="submit"
                form="myForm"
              >
                SIGNUP
              </Button>
            </Box>
          </form>
        </Box>
      )}

      {!error && (
        <Box className={classes.snackBar}>
          <Snackbar open={isOpen} onClose={handleClose}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Your profile has been successfully created{" "}
              <Button
                onClick={handleGoToLoginPage}
                variant="contained"
                color="success"
                size="small"
              >
                LOGIN
              </Button>
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Box>
  );
};

RegistrationForm.propTypes = {
  isFormValid: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleGoToLoginPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(RegistrationForm);
