import React from 'react';
import './components.css';
import Grid from '@material-ui/core/Grid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class InputDatePicker extends React.Component{

    render(){
        const {label,id,name,value,defaultValue,placeHolder,disabled,hidden,classes,onChange,onClick}=this.props
        return (
            <Grid container>
                <Grid item xs={6} style={{paddingTop:'10px'}}>
                    <label>{label}</label>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker 
                        selected={value}
                        id={id}
                        name={name}
                        onChange={onChange}
                        text={value}
                    />
                </Grid>
            </Grid>
        )
    }
}