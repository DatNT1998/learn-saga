import React, { Component } from 'react';
import styles from './styles.js';
import PropTypes from 'prop-types'; // ES6
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { STATUSES } from '../../constants/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as taskActions from './../../actions/task';

import TaskList from '../../component/TaskList/index';
import TaskForm from '../../component/TaskForm/index.js';
import TaskItem from '../../component/TaskItem/index.js';

class Taskboard extends Component {
    
    state = {
        open: false
    }

    componentDidMount() {
        const {taskActionsCreators} = this.props;
        const {fetchListTaskRequest} = taskActionsCreators;
        fetchListTaskRequest();
    }

    renderBoard(){
        const {listTask} = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map( (status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value)
                        return (
                            <TaskList key={status.value} tasks={taskFiltered} status={status} />
                        )   
                    })
                }
            </Grid>
        )

        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    openForm = () => {
        this.setState({
            open: true
        })
    }

    renderForm() {
        const {open} = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose} />
        )
        return xhtml
    }

    render() { 
        const {classes} = this.props;

        return ( 
            <div className={classes.taskBoard}>
                <Button variant='contained' color='primary' className={classes.button} onClick={this.openForm}>
                    < AddIcon /> Add new Task
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
         );
    }
}

TaskItem.propTypes = {
    classes: PropTypes.object,
    taskActionsCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func
    }),
    listTask: PropTypes.array,

}
const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    }
};

const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch)
    }
};
 
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));