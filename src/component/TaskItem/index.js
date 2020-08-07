import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

class TaskItem extends Component {
    state = {  }
    render() { 
        const {task, status, classes} = this.props;
        const {title, id} = task;
        return ( 
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item md={8}>
                            <Typography component='h2'> {title} </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                </CardContent>
                {task.description}
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="add" className={classes.fab} size='small'>
                        <Icon> edit_icon</Icon>
                    </Fab>
                    <Fab color="primary" aria-label="add" className={classes.fab} size="small">
                        <Icon> delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
         );
    }
}
 
export default withStyles(styles)(TaskItem);