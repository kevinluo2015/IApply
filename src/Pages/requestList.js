import React from 'react';
import {bindActionCreators} from 'redux';
import {actions}  from '../Redux/requestList';//need to update 
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import InputText from '../Components/InputText';
import InputSelect from '../Components/InputSelect';
import InputDatePicker from '../Components/InputDatePicker';
import InputCheckbox from '../Components/InputCheckbox';
import ProgressBar from '../Components/Progressbar';
import LeftRightButton  from '../Components/LeftRightButton';
import {fieldtypes} from '../Config/config';
import Header from '../Components/Header';



class ReqList extends React.Component{//need to update 

    render(){
        var products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];
        return(
            <div>test</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state.ReqReducer//need to update 
}
const mapDispatchToProps=(dispatch)=>{
    return {
        action:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReqList)//need to update 