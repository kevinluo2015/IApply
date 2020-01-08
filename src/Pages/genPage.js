import React from 'react';
import InputText from '../Components/InputText';
import InputSelect from '../Components/InputSelect';
import InputDatePicker from '../Components/InputDatePicker';
import InputCheckbox from '../Components/InputCheckbox';
import ProgressBar from '../Components/Progressbar';
import LeftRightButton  from '../Components/LeftRightButton';
import {bindActionCreators} from 'redux';
import {actions} from '../Redux/genPage';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './genPage.css'
import {fieldtypes} from '../Config/config'
import Header from '../Components/Header'
class GenPage extends React.Component{

    handleChange(id,e){
        this.props.action.inputvalue(e,id)
        if (id==='reqlanid'){
            this.props.action.getad()
        }
        if(id==="bu"){
            this.props.action.butoapprover(e)
        }
        if (id==="reqtype"){
            this.props.action.reqtypetoreplace(e)
        }
        if(id==='cardtype'){
            this.props.action.cardtypetoexpiredate(e)
        }
        if(id==='f4it' ||id==="f5it"|| id==="securityroom" ||id=== "opsprinting")
        {
            this.props.action.accesstospecialapprover()
        }
    }
    HandleClick(n){
        this.props.action.movesection(n)
    }
    _buildsection(){
        var data=this.props.data
        var currentpage=data.currentpage
        var totalpage=data.totalpage
        var sections=data.form.sections
        var section=sections[currentpage-1]
        var sectiontitle=section.title
        let sect=[]
        sect.push(
            <Grid item xs={12}>
                <h2 style={{paddingLeft:10}}>{currentpage}. {sectiontitle}</h2>
                <hr></hr>
            </Grid>
        )
        section.fields.forEach(field=>{
            sect.push(
                <Grid item xs={1}/>
            )
            switch( field.type)
            {
                case fieldtypes.InputText:
                    sect.push(
                        <Grid item xs={4}>
                        <InputText
                            label={field.label}
                            id={field.id}
                            name='test'
                            value={field.value}
                            onChange={this.handleChange.bind(this,field.id)}
                            options={field.options}
                            disabled={field.disabled}
                            hidden={field.hidden}
                        />
                        </Grid>
                    )
                    break;
                case fieldtypes.InputDatePicker:
                    sect.push(
                        <Grid item xs={4}>
                            <InputDatePicker
                                label={field.label}
                                selected={field.value}
                                id={field.id}
                                name={'test'}
                                onChange={this.handleChange.bind(this,field.id)}
                                value={field.value}
                            />
                        </Grid>
                    )
                    break;
                case fieldtypes.InputCheckbox: 
                    sect.push(
                        <Grid item xs={4}>
                            <InputCheckbox
                                label={field.label}
                                id={field.id}
                                name={'test'}
                                onChange={this.handleChange.bind(this,field.id)}
                                value={field.value}
                                hidden={field.hidden}
                                disabled={field.disabled}
                            />
                        </Grid>
                    )
                    break;
                case fieldtypes.InputSelect: 
                    sect.push(
                        <Grid item xs={4}>
                            <InputSelect
                                label={field.label}
                                id={field.id}
                                name='test'
                                value={field.value}
                                onChange={this.handleChange.bind(this,field.id)}
                                options={field.options}
                                hidden={field.hidden}
                            />
                        </Grid>
                    )
                    break;
            }
            sect.push(
                <Grid item xs={1}/>
            )
        })
        return sect
    }
    _buildprogressbar(){
        var data=this.props.data
        var currentpage=data.currentpage
        var totalpage=data.totalpage
        var progressbar=<ProgressBar
                        currentpage={currentpage}
                        totalpage={totalpage}
                        ></ProgressBar>
        return progressbar
    }
    _buildprenextbutton(){
        var data=this.props.data
        var currentpage=data.currentpage
        var totalpage=data.totalpage
        return(
            <LeftRightButton
            currentpage={currentpage}
            totalpage={totalpage}
            onClick={this.HandleClick.bind(this)}
            />
        )
    }
    _buildSubmit(){
        var data=this.props.data
        var currentpage=data.currentpage
        var totalpage=data.totalpage
        if (totalpage===currentpage)
        {
            return(
                <button className='submitbutton'>Submit</button>
            )
        }else{
            return
        }
        
    }
    render(){
        var section=this._buildsection();
        var progressbar=this._buildprogressbar();
        var prenextbutton=this._buildprenextbutton();
        var submitbutton=this._buildSubmit();
        return(
            <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Header
                        title={this.props.data.form.title}
                    />
                    {progressbar}
                    <div className='mypage'>
                        {prenextbutton}
                        <Grid container>
                            {section}
                        </Grid>
                        {submitbutton}
                    </div>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        )
    }
}
const mapStateToProps=(state)=>{
    return state.DemoReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        action:bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GenPage)