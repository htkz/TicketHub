import React, { Component } from 'react';
import TicketBar from './TicketBar/TicketBar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './TicketInfo.css';

class TicketInfo extends Component {
    state = {
        ticket: [
            {
                _id: '5f15f628e3f01b603cffa03e',
                userId: '5f0f4d1b7ac46e601a8ccb62',
                placeId: '5f0f4d1b7ac46e601a8ccb5d',
                placeName: 'Stevens',
                ticketNo: '53100207201',
                orderedDate: '2020-7-20',
                effectDate: '2020-05-15',
                price: '100',
                fourfacechusong: 'valid',
                images: [
                    'Stevens_Institute_Of_Technology_1.jpg',
                    'Stevens_Institute_Of_Technology_2.jpg',
                    'Stevens_Institute_Of_Technology_3.png',
                ],
                name: 'Stevens',
                description: 'A famous school in New Jersey',
            },
        ],
    };

    render() {
        const { classes } = this.props;

        const allTickets = this.state.ticket.map((ticket) => (
            <TicketBar
                key={ticket._id}
                placeName={ticket.placeName}
                description={ticket.description}
                effectDate={ticket.effectDate}
                orderedDate={ticket.orderedDate}
                price={ticket.price}
            />
        ));

        return (
            <React.Fragment>
                <Grid>
                    <h1>User Tickets</h1>
                </Grid>
                <Grid className={classes.root}>{allTickets}</Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(TicketInfo);
