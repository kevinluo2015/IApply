import React from 'react';
import Grid from '@material-ui/core/Grid';
import './components.css';

export default class LeftRightButton extends React.Component{

    onClick(e){
        var n=0
        if (e.target.name==="right")
        {
            n=1
        }
        if(e.target.name==='left')
        {
            n=-1
        }
        this.props.onClick(n)
    }
    render(){
        const {currentpage,totalpage}=this.props
        var leftdisabled=true
        var rightdisabled=true
        if (currentpage>1)
        {
            leftdisabled=false
        }
        if(currentpage<totalpage){
            rightdisabled=false
        }

        return(
        <div  className='prenextbutton'>
            <Grid container>
                <Grid item xs={6} >
                    <button className='buttonleft'
                        onClick={this.onClick.bind(this)}
                        name='left'
                        disabled={leftdisabled}
                        > 
                            {"<<"}
                        </button>
                </Grid>
                <Grid item xs={6}>
                    <button className='buttonright'
                            onClick={this.onClick.bind(this)}
                            name='right'
                            disabled={rightdisabled}
                            > 
                            {">>"}
                            </button>
                </Grid>
            </Grid>
        </div> 
        )
    }
    
}