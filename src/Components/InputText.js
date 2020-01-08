import React from 'react';
import './components.css';
import Grid from '@material-ui/core/Grid';

export default class InputText extends React.Component{
    render(){
        const {label,id,name,value,defaultValue,placeHolder,disabled,hidden,classes,onChange,onClick}=this.props
        return (
            <Grid container>
                <Grid item xs={6} style={{paddingTop:'10px'}}>
                    <label>{label}</label>
                </Grid>
                <Grid item xs={6}>
                    <input
                        type="text"
                        id={id}
                        name={name}
                        value={value}
                        defaultValue={defaultValue}
                        placeholder={placeHolder}
                        disabled={disabled}
                        hidden={hidden}
                        className={classes}
                        onChange={onChange}
                        onClick={onClick}
                    />
                </Grid>
            </Grid>
        )

    }
}
