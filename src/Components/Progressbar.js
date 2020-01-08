import React from 'react';
import './components.css';

export default class ProgressBar extends React.Component{

    render(){
        const {currentpage,totalpage}=this.props
        const style={
            height:'20px',
            width:currentpage/(totalpage) *100 +"%" ,
        }
        return(
            <div className='progressbar'>
                <div style={style} className='subprogressbar'></div>
            </div>
        )
    }
}