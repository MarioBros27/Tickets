import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link as Lin} from 'react-router-dom';

function Ticket(props) {
    return (
        
        <div>
            <Grid container spacing={1} >
                <Grid container alignItems="center" justify="center" item xs={1}>
                <Lin to="/details"><a>{props.id}</a></Lin>
                    
                </Grid>
                <Grid container justify="center" item xs={2}>
                <p>{props.state}</p>
                </Grid>
                <Grid container justify="center" item xs={3}>
                    <p>{props.title}</p>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <p>{props.requester}</p>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <p>{props.assignee}</p>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <p>12-12-2012</p>
                </Grid>
            </Grid>
            
        </div>
        
    )

}
export default Ticket;