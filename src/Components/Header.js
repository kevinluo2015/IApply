import React from 'react';
import Grid from '@material-ui/core/Grid';
import './components.css';

export default class Header extends React.Component{

    render(){
        const {title}=this.props
        var mytitle=''
        if (title===undefined){
            mytitle="Application Form"
        }else{
            mytitle=title
        }
        return(
            <Grid container>
            <Grid item xs={12}>
                <header>
                    {mytitle}
                </header>
            </Grid>
        </Grid>
        )
    }
}