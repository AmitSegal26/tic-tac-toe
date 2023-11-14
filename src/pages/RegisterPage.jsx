import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import User from "../classes/User";
import { dict } from "../utils/dict";
import { validateUser } from "../validations/userScheme";
import RecommendIcon from "@mui/icons-material/Recommend";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const { nameOfData } = dict;
const { COLORS } = dict;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [usersArr] = useState(JSON.parse(localStorage.getItem(nameOfData)));
  const [openDialog, setOpenDialog] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
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
    setBtnLoad(true);
    const getData = setTimeout(() => {
      if (usersArr.find((user) => user.name === inputState.name)) {
        setIsExistUserName(true);
        setDisableBtn(true);
      } else {
        setIsExistUserName(false);
        setDisableBtn(!!inputError);
      }
      setBtnLoad(false);
    }, 500);

    return () => clearTimeout(getData);
  }, [inputState, inputError]);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    navigate(ROUTES.HOME);
  };
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
      // array is empty
      localStorage.setItem(nameOfData, JSON.stringify([inputState]));
      return;
    }
    if (
      usersArr.find((user) => user.name === inputState?.name) ||
      inputState?.name === "" ||
      inputState?.password === ""
    ) {
      // username already exists in data
      return;
    }
    // user registering
    let newUsersArr = JSON.parse(JSON.stringify(usersArr));
    newUsersArr.push(inputState);
    localStorage.setItem(nameOfData, JSON.stringify(newUsersArr));
    handleOpenDialog();
  };
  const breakPoints = { phone: "xs", screen: "md" };
  return (
    <Container maxWidth="sm">
      <Dialog fullWidth onClose={handleCloseDialog} open={openDialog}>
        <DialogTitle sx={{ textAlign: "center" }}>
          Account
          {inputState && inputState.name ? ` '${inputState.name}' ` : null}
          Created
        </DialogTitle>
        <Button variant="contained" onClick={handleCloseDialog}>
          <RecommendIcon sx={{ mr: 2 }} />
          Take me to home page
        </Button>
      </Dialog>
      <Typography
        component="h2"
        variant="h3"
        sx={{
          color: COLORS.TEXT2,
          fontSize: {
            [breakPoints.phone]: "1.25rem",
            [breakPoints.screen]: "2rem",
          },
          marginBlock: { [breakPoints.phone]: 2, [breakPoints.screen]: 4 },
        }}
      >
        Want to make progress and complete achievements?
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        sx={{
          color: COLORS.TEXT1,
          letterSpacing: "0.2rem",
          fontSize: {
            [breakPoints.phone]: "2rem",
            [breakPoints.screen]: "3rem",
          },
          mt: { [breakPoints.phone]: 2.5, [breakPoints.screen]: 5 },
          mb: { [breakPoints.phone]: 5, [breakPoints.screen]: 10 },
        }}
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
            endIcon={
              btnLoad ? (
                <CircularProgress size="1rem" />
              ) : isExistUserName || inputError ? (
                <CloseOutlinedIcon />
              ) : (
                <DoneOutlineIcon />
              )
            }
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
