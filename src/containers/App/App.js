import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.js'
import { withStyles, ThemeProvider } from '@material-ui/core';
import Taskboard from '../Taskboard/index';
import theme from '../../commons/Theme/index.js';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import configureStore from '../../redux/configureStore';

const store =  configureStore()

class App extends React.Component {
  render(){

    const {classes} = this.props;
    
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <ToastContainer />
          <Taskboard />
      </ThemeProvider>
     </Provider>
    );
  }
  
}

export default withStyles(styles)(App);
