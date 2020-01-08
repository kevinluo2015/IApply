import React from 'react';
import {Route} from 'react-router-dom';
import GenPage from '../Pages/genPage';
import AutApp from '../Pages/autapp'
import ReqList from '../Pages/requestList'
export default class MyRouter extends React.Component{
    render(){
        return(
            <div style={{height:600}}>
                <Route exact path='/access' component={GenPage}/>
                <Route exact path='/automation' component={AutApp}/>
                <Route exact path='/' component={ReqList}/>
            </div>
        )
    }
}