import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter} from 'react-router-dom';
import MyRouter from './Router/router'
function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
            <MyRouter></MyRouter>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
