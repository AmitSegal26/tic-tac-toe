import {
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import User from "../classes/User";
import { dict } from "../utils/dict";
import { validateUser } from "../validations/userScheme";
const { nameOfData } = dict;
const { COLORS } = dict;

const RegisterPage = () => {
  const [usersArr] = useState(JSON.parse(localStorage.getItem(nameOfData)));
  const [disableBtn, setDisableBtn] = useState(true);
  const [inputState, setInputState] = useState(new User("", "").getUser());
  const [inputError, setInputError] = useState([]);
  const [isExistUserName, setIsExistUserName] = useState(false);
  useEffect(() => {
    if (!inputState) {
      return;
    }
    //* debounce
    setDisableBtn(true);
    const getData = setTimeout(() => {
      if (usersArr.find((user) => user.name === inputState.name)) {
        setIsExistUserName(true);
        setDisableBtn(true);
      } else {
        setIsExistUserName(false);
        setDisableBtn(!!inputError);
      }
    }, 500);

    return () => clearTimeout(getData);
  }, [inputState, inputError]);
  const handleInputChange = (e) => {
    if (!e.target) {
      return;
    }
    if (!e.target.id) {
      return;
    }
    const newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[e.target.id] = e.target.value;
    const joiResponse = validateUser(newInputState);
    setInputError(joiResponse);
    setInputState(newInputState);
  };
  const handleClick = () => {
    if (usersArr.length === 0) {
      localStorage.setItem(nameOfData, JSON.stringify([inputState]));
      return;
    }
    if (
      usersArr.find((user) => user.name === inputState?.name) ||
      inputState?.name === "" ||
      inputState?.password === ""
    ) {
      return;
    }
    let newUsersArr = JSON.parse(JSON.stringify(usersArr));
    newUsersArr.push(inputState);
    localStorage.setItem(nameOfData, JSON.stringify(newUsersArr));
  };

  return (
    <Container maxWidth="md">
      <Typography component="h2" variant="h3" sx={{ color: COLORS.TEXT2 }}>
        Want to make progress and complete achievements?
      </Typography>
      <Typography
        component="h1"
        variant="h2"
        sx={{ color: COLORS.TEXT1, letterSpacing: "0.2rem" }}
        gutterBottom
      >
        Create an account!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ p: 1 }}>
          <TextField
            required
            id="name"
            label="User Name"
            value={inputState.name}
            fullWidth
            onChange={handleInputChange}
            error={isExistUserName}
          />
          <FormHelperText
            error={
              isExistUserName ||
              (inputError &&
                inputError.includes(
                  inputError.find((err) => err?.path === "name")
                ))
            }
            sx={{ color: "green" }}
          >
            {inputState?.name !== ""
              ? isExistUserName
                ? "This user name is already taken"
                : inputError &&
                  inputError.includes(
                    inputError.find((err) => err?.path === "name")
                  )
                ? inputError.find((err) => err?.path === "name")?.message
                : "User Name Is OK"
              : ""}
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            value={inputState.password}
            error={
              inputError &&
              inputError.includes(
                inputError.find((err) => err?.path === "password")
              ) &&
              inputState?.password !== ""
            }
            onChange={handleInputChange}
          />
          <FormHelperText
            error={
              inputError &&
              inputError.includes(
                inputError.find((err) => err?.path === "password")
              )
            }
            sx={{ color: "green", fontWeight: "bold" }}
          >
            {inputState?.password !== ""
              ? inputError &&
                inputError.includes(
                  inputError.find((err) => err?.path === "password")
                )
                ? "Password is weak, password must be at least 8 charachters, and contain 1 digit at least and be written in english"
                : "Password is strong"
              : ""}
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={disableBtn}
            variant="contained"
            color="warning"
            onClick={handleClick}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;
