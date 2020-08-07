import React from 'react';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from '../TaskItem/index';

class TaskList extends React.Component {
    state = {  }
    render() { 
        const {tasks, classes, status} = this.props;
        return ( 
            <Grid item md={4} xs={12} key={status.value} > 
                <Box mt={1} mb={1}>
                    <div className={classes.status}> {status.label} </div>
                </Box>
                <div className={classes.wrapperListTask} > 
                    {
                        tasks.map(task => {                           
                            return (
                               <TaskItem key={task.id} task={task} status={status}  />
                            );
                        })
                    }
                </div>
            </Grid>
         );
    }
}
 
export default withStyles(styles)(TaskList);