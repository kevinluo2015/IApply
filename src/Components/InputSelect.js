import React from 'react';
import './components.css';
import Grid from '@material-ui/core/Grid';

export default class InputSelect extends React.Component{

    render(){
        const {label,id,name,value,options,defaultValue,placeHolder,disabled,hidden,classes,onChange,onClick}=this.props
        let opt=[]
        options.forEach(option => {
            opt.push(
            <option value={option}>{option}</option>
            )
        });
        if (hidden===undefined ||hidden===false)
        {     
            return(
                <Grid container>
                    <Grid item xs={6} style={{paddingTop:'10px'}}>
                        <label>{label}</label>
                    </Grid>
                    <Grid item xs={6}>
                        <select
                            id={id}
                            name={name}
                            value={value}
                            defaultValue={defaultValue}
                            placeholder={placeHolder}
                            disabled={disabled}
                            className={classes}
                            onChange={onChange}
                            onClick={onClick}
                        >
                            {opt}
                        </select>
                        
                    </Grid> 
                </Grid>
            )
        }else
        {
            return(
                <Grid container>
                    <Grid item xs={6} style={{paddingTop:'10px'}}>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid> 
                </Grid>
            )
        }
   
    }
}