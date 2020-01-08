import React from 'react';
import './components.css';
import Grid from '@material-ui/core/Grid';

export default class InputCheckbox extends React.Component{


    render(){
        const {label,id,name,value,defaultValue,placeHolder,disabled,hidden,classes,onChange,onClick}=this.props
        return(
            <Grid container>
                <Grid item xs={6} style={{paddingTop:'5px'}}>
                    <label>{label}</label>
                </Grid>
                <Grid item xs={6}>
                    <input 
                        type='checkbox'
                        id={id}
                        name={id}
                        checked={value}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        )
    }
}