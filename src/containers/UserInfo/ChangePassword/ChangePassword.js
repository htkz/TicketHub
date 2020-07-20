import React from 'react';
import clsx from 'clsx';
import {
    Button,
    Input,
    IconButton,
    InputLabel,
    InputAdornment,
    FormControl,
    Grid,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import useStyles from './style.css';

const ChangePassword = (props) => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        oldPassword: '',
        newPassword: '',
        reNewPassword: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes.root}>
            <Grid className={classes.center}>
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.textField,
                        classes.passwordInput
                    )}
                    variant='filled'
                >
                    <InputLabel htmlFor='standard-adornment-password'>
                        Old Password
                    </InputLabel>
                    <Input
                        id='standard-adornment-password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid className={classes.center}>
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.textField,
                        classes.passwordInput
                    )}
                    variant='filled'
                >
                    <InputLabel htmlFor='filled-adornment-password'>
                        New Password
                    </InputLabel>
                    <Input
                        id='filled-adornment-password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid className={classes.center}>
                <FormControl
                    className={clsx(
                        classes.margin,
                        classes.textField,
                        classes.passwordInput
                    )}
                    variant='filled'
                >
                    <InputLabel htmlFor='filled-adornment-password'>
                        Confirm Password
                    </InputLabel>
                    <Input
                        id='filled-adornment-password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Grid className={clsx(classes.center, classes.button)}>
                <Button variant='contained' color='primary' disabled>
                    Change Password
                </Button>
            </Grid>
        </form>
    );
};

export default ChangePassword;
