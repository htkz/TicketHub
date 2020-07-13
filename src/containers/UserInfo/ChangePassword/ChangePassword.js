import React from 'react';
import clsx from 'clsx';

import {
    Button,
    Input,
    makeStyles,
    IconButton,
    FilledInput,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText,
    FormControl,
    TextField,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flewWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    passwordInput: {
        width: '400px',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

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
        <div className={classes.root}>
            <div>
                <div className={classes.center}>
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
                </div>
                <div className={classes.center}>
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
                </div>
                <div className={classes.center}>
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
                </div>
            </div>
            <div className={classes.center}>
                <Button variant='contained' color='primary' disabled>
                    Change Password
                </Button>
            </div>
        </div>
    );
};

export default ChangePassword;
