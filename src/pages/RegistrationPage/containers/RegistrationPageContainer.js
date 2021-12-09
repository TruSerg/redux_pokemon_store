import isEmail from "validator/es/lib/isEmail";

import RegistrationForm from "../components/RegistrationForm/RegistrationFormLayout";

import { useForm, useSnackBar } from "../../../hooks";

import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector((state) => state.signup);

  const { isOpen, handleOpen, handleClose } = useSnackBar();

  const [formData, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const isEmailValid = isEmail(formData.email);
  const isFirstNameValid = formData.firstName.toLowerCase().length > 0;
  const isLastNameValid = formData.lastName.toLowerCase().length > 0;
  const isGenderValid = formData.gender.toLowerCase().length > 0;
  const isPhoneValid = formData.phone.length > 0;
  const isPasswordValid = formData.password.length > 0;
  const isPasswordConfirmValid = formData.passwordConfirm.length > 0;
  const isFormValid =
    isEmailValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isGenderValid &&
    isPhoneValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  const handleSubmit = useCallback(
    (event) => {
      if (isFormValid) {
        event.preventDefault();

        const { passwordConfirm, ...otherFields } = formData;

        if (formData.password === formData.passwordConfirm) {
          dispatch(SIGN_UP_REQUEST(otherFields));
        }
      }
      handleOpen();
    },

    [formData, dispatch]
  );

  const handleGoToLoginPage = useCallback(() => {
    if (isAuth) {
      history.push(ROUTES.LOGIN);
    }
  }, [history, isAuth]);

  return (
    <RegistrationForm
      isLoading={isLoading}
      formData={formData}
      isOpen={isOpen}
      handleClose={handleClose}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      error={error}
      handleGoToLoginPage={handleGoToLoginPage}
    />
  );
};

export default RegistrationPageContainer;
