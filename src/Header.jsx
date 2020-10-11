import React from 'react';
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <div>
            <Grid container spacing={1} >
                <Grid container justify="center" item xs={1}>
                    <h3>ID</h3>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <h3>State</h3>
                </Grid>
                <Grid container justify="center" item xs={3}>
                    <h3>Title</h3>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <h3>Requester</h3>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <h3>Assignee</h3>
                </Grid>
                <Grid container justify="center" item xs={2}>
                    <h3>Date</h3>
                </Grid>
            </Grid>
        </div>
    )

}
export default Header;