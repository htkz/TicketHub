import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './Card.css';

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`images/${props.place.images[0]}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.place.placeName}
                    </Typography>
                    <Typography
                        className={classes.description}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.place.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Display Time: {props.place.displayTime}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Tickets: {props.place.remainNum}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='span'
                    ></Typography>
                    {props.place.category.map((category) => {
                        return (
                            <button disabled className={classes.category}>
                                {category}
                            </button>
                        );
                    })}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
