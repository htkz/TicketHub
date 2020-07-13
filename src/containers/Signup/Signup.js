import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../components/UI/Copyright/Copyright';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import checkInput from '../../utility/checkInput';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    const [emailState, changeEmailState] = useState({
        error: false,
        errorText: '',
    });

    const [usernameState, changeUsernameState] = useState({
        error: false,
        errorText: '',
    });

    const [passwordState, changePasswordState] = useState({
        error: false,
        show: false,
        input: '',
        errorText: '',
    });

    const [reState, changeReState] = useState({
        error: false,
        disabled: true,
        errorText: '',
    });

    const emailChangeHandler = (event) => {
        const input = event.target.value;
        let error = false;
        let errorText = '';

        if (!input) {
            changeEmailState({
                error: error,
                errorText: errorText,
            });

            return;
        }

        if (checkInput.checkEmail(input)) {
            error = false;
            errorText = '';
        } else {
            error = true;
            errorText = 'Invalid/ Existed email';
        }

        changeEmailState({
            error: error,
            errorText: errorText,
        });
    };

    const usernameChangeHandler = (event) => {
        const input = event.target.value;
        let error = false;
        let errorText = '';

        if (!input) {
            changeUsernameState({
                error: error,
                errorText: errorText,
            });

            return;
        }

        if (checkInput.checkUserName(input)) {
            error = false;
            errorText = '';
        } else {
            error = true;
            errorText =
                'User name is already exisited Or not following the rule: 3-16 characters, only contains lower case words, upper case words & numbers';
        }

        changeUsernameState({
            error: error,
            errorText: errorText,
        });
    };

    const passwordChangeHandler = (event) => {
        const input = event.target.value;
        let error = false;
        let errorText = '';

        if (!input) {
            changeReState({
                ...reState,
                disabled: true,
            });

            changePasswordState({
                error: error,
                input: input,
                errorText: errorText,
            });

            return;
        }

        if (checkInput.checkPassword(input)) {
            error = false;
            errorText = '';
            changeReState({
                ...reState,
                disabled: true,
            });
        } else {
            error = true;
            errorText =
                '8-16 characters, only contains lower case words, upper case words & numbers';
            changeReState({
                ...reState,
                disabled: true,
            });
        }

        changePasswordState({
            ...passwordState,
            error: error,
            input: input,
            errorText: errorText,
        });
    };

    const handleClickShowPassword = (event) => {
        const show = !passwordState.show;
        changePasswordState({
            ...passwordState,
            show: show,
        });
    };

    const reChangeHandler = (event) => {
        const input = event.target.value;
        const disabled = reState.disabled;
        let error = reState.error;
        let errorText = reState.errorText;

        if (!input) {
            changeReState({
                error: false,
                disabled: disabled,
                errorText: '',
            });

            return;
        }

        if (input !== passwordState.input) {
            error = true;
            errorText = 'Re-enter password does not match';
        } else {
            error = false;
            errorText = '';
        }

        changeReState({
            error: error,
            disabled: disabled,
            errorText: errorText,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            error={emailState.error}
                            onChange={emailChangeHandler}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="Your Email"
                            helperText={emailState.errorText}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            error={usernameState.error}
                            onChange={usernameChangeHandler}
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="Your Username"
                            helperText={usernameState.errorText}
                        />
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            fullWidth
                            helperText={passwordState.errorText}
                        >
                            <InputLabel htmlFor="filled-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                variant="outlined"
                                margin="normal"
                                required
                                error={passwordState.error}
                                onChange={passwordChangeHandler}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {passwordState.show ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                id="password"
                                label="Password"
                                name="password"
                                type={passwordState.show ? 'text' : 'password'}
                                autoComplete="Your Password"
                            />
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            disabled={reState.disabled}
                            error={reState.error}
                            onChange={reChangeHandler}
                            fullWidth
                            name="re-enter_password"
                            label="Re-enter Password"
                            type="password"
                            id="re-enter_password"
                            autoComplete="Re-enter Your Password"
                            helperText={reState.errorText}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="center">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    {'Already have a account? Sign In'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
