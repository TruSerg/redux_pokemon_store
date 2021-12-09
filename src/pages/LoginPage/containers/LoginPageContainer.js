import { useDispatch, useSelector } from "react-redux";
import { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";

import { useForm } from "../../../hooks";

import { LOG_IN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

import LoginFormLayout from "../components/LoginForm/LoginFormLayout";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });

  const isEmailValid = isEmail(formData.email);
  const isPasswordValid = formData.password.length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = useCallback(
    (event) => {
      if (isFormValid) {
        event.preventDefault();
        dispatch(LOG_IN_REQUEST(formData));
      }
    },
    [formData, isFormValid]
  );

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  const handleGoToRegistrationPage = useCallback(() => {
    history.push(ROUTES.REGISTRATION);
  }, []);

  return (
    <LoginFormLayout
      isLoading={isLoading}
      isFormValid={isFormValid}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
      handleGoToRegistrationPage={handleGoToRegistrationPage}
    />
  );
};

export default LoginPageContainer;
