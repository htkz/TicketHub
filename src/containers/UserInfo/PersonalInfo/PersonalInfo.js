import React from 'react';
import {
    makeStyles,
    Avatar,
    Grid,
    TextField,
    MenuItem,
    Select,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        justifyContent: 'center',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    margin: {
        marginTop: theme.spacing(2),
    },
    width: { width: '75%' },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const PersonalInfo = (props) => {
    const classes = useStyles();

    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }

    return (
        <form className={classes.root}>
            <Grid container spacing={2} className={classes.margin}>
                <Grid container direction='row'>
                    <Grid item xs={4} className={classes.center}>
                        <Avatar
                            alt='Remy Sharp'
                            src=''
                            className={classes.large}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <div>Mo Sun</div>
                        <p>Change Avatar</p>
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item xs={4} className={classes.center}>
                        Name
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            defaultValue='Name'
                            variant='outlined'
                            className={classes.width}
                        />
                        <br />
                        <p className={classes.width}>
                            使用你被大众熟知的名字，例如你的全名、昵称或商家名称，有助于大家发现你的帐户。
                            14 天内只能更改姓名两次。
                        </p>
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Gender
                    </Grid>
                    <Grid item xs={7}>
                        <Select
                            className={classes.width}
                            labelId='demo-simple-select-outlined-label'
                            id='demo-simple-select-outlined'
                            displayEmpty
                            value={gender}
                            variant='outlined'
                            onChange={handleChange}
                        >
                            <MenuItem value='' disabled>
                                Unknown
                            </MenuItem>
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Birth Date
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='date'
                            type='date'
                            defaultValue={`${date.getFullYear()}-${month}-${date.getDate()}`}
                            variant='outlined'
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Bio
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id='outlined-multiline-static'
                            variant='outlined'
                            multiline
                            rows={4}
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Email
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            defaultValue='Email'
                            variant='outlined'
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Phone Number
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            defaultValue=''
                            variant='outlined'
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Zipcode
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            defaultValue=''
                            variant='outlined'
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row' className={classes.margin}>
                    <Grid item xs={4} className={classes.center}>
                        Address
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            defaultValue=''
                            variant='outlined'
                            className={classes.width}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default PersonalInfo;
