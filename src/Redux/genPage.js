import {data,fieldtypes,ApproveMatrix} from '../Config/config'
//Action Type
export const actiontypes={
    INPUTVALUE:"INPUTVALUE",
    SECTIONMOVE:"SECTIONMOVE",
    BUTOAPPROVER:"BUTOAPPROVER",
    REQTYPETOREPLACE:"REQTYPETOREPLACE",
    CARDTYPETOEXPIREDATE:'CARDTYPETOEXPIREDATE',
    ACCESSTOSPECIALAPPROVER:"ACCESSTOSPECIALAPPROVER",
    GETAD:"GETAD",
}

//initial state
const initialstate={data:data}

//action creator 
export const actions={
    inputvalue:(value,id)=>{
        return(dispatch)=>{
            dispatch({
                type:actiontypes.INPUTVALUE,
                value:value,
                id:id
            })
        }
    },
    movesection:(n)=>{
        return (dispatch)=>{
            dispatch({
                type:actiontypes.SECTIONMOVE,
                n:n
            })
        }
    },
    butoapprover:(value)=>{
        return (dispatch)=>{
            dispatch({
                type:actiontypes.BUTOAPPROVER,
                value:value
            })
        }
    },
    reqtypetoreplace:(value)=>{
        return (dispatch)=>{
            dispatch({
                type:actiontypes.REQTYPETOREPLACE,
                value:value
            })
        }
    },
    cardtypetoexpiredate:(value)=>{
        return (dispatch)=>{
            dispatch({
                type:actiontypes.CARDTYPETOEXPIREDATE,
                value:value
            })
        }
    },
    accesstospecialapprover:(value)=>{
        return (dispatch)=>{
            dispatch({
                type:actiontypes.ACCESSTOSPECIALAPPROVER,
                value:value
            })
        }
    },
    getad:()=>{
        return(dispatch,getSate)=>{
            var lanid=findField(getSate.data,'reqlanid').value
            var data={service:'anz.go.micro.srv.user',method:'user.GetAdInfoByID',request:{'user_id':lanid}}
            fetch("http://10.74.80.81:9080/rpc",{
                method:'post',
                headers:{
                    'Content-Type':'application/json;charset-UTF-8'
                },
                body:JSON.stringify(data),
                cache:'default',
                mode:'cors'
            }).then(res=>{
                return res.json()
            }).then(data=>{
                if (data.data.displayname!==undefined){
                    dispatch({
                        type: actiontypes.GETAD,
                        displayname:data.data.displayname,
                        phone:data.data.phone,
                        mail:data.data.mail,
                    })
                }
            }
            )
        }
    }
}

//reducers
const findField=(data,id)=>{
    var tempfield=null
    data.form.sections.forEach(section=>{
        section.fields.forEach(field=>{
            if (field.id===id){
                tempfield= field
            }
        })
    })
    return tempfield
}
export default function reducer(state=initialstate,action){
    switch(action.type){
        case actiontypes.GETAD:
            var data=Object.assign({},state.data)
            findField(data,"reqname").value=action.displayname
            findField(data,"reqphone").value=action.phone
            findField(data,"reqemail").value=action.mail
            return {data:data}
        case actiontypes.ACCESSTOSPECIALAPPROVER:
            var data=Object.assign({},state.data)
            var f4it=findField(data,"f4it").value
            var f5it=findField(data,'f5it').value
            var securityroom=findField(data,"securityroom").value
            var opsprinting=findField(data,'opsprinting').value
            var F4Access=ApproveMatrix.F4Access
            var F4Approverlist=null
            F4Access.forEach(access=>{
                if (access.F4ITRoom===f4it && access.F4OPSPrinting===opsprinting){
                    F4Approverlist=access.Approver
                }
            })
            var F5Approverlist=null
            var F5Access=ApproveMatrix.F5Access
            F5Access.forEach(access=>{
                if (access.F5ITRoom===f5it && access.F5Security===securityroom){
                    F5Approverlist=access.Approver
                }
            })
            var field=findField(data,"speapprover")
            if (F4Approverlist!==null || F5Approverlist !==null){
                field.hidden=false
                if (F4Approverlist===null){
                    field.options=F5Approverlist
                }
                if (F5Approverlist===null){
                    field.options=F4Approverlist
                }
                if (F5Approverlist!==null && F4Approverlist !==null){
                    let opt=[]
                    F5Approverlist.forEach(approver5=>{
                        F4Approverlist.forEach(approver4=>{
                            if (approver5===approver4){
                                opt.push(approver5)
                            }
                        })
                    })
                    field.options=opt
                }
            }else{
                field.hidden=true 
                field.value=""
            }
            return {data:data}
        case actiontypes.CARDTYPETOEXPIREDATE:
            var cardtype=action.value.target.value
            var data=Object.assign({},state.data)
            var field=findField(data,'expdate')
            if (cardtype==='Employee'){
                field.disabled=true 
                field.value=new Date('9999-01-01')
            }else{
                field.disabled=false 
                field.value=null
            }
            return {data:data}
        case actiontypes.REQTYPETOREPLACE:
            var reqtype=action.value.target.value
            var data=Object.assign({},state.data)
            var replacefield=findField(data,'repreason')
            if (reqtype==='Replace Card'){
                replacefield.hidden=false
            }else
            {
                replacefield.value=''
                replacefield.hidden=true
            }
            return {data:data}
        case actiontypes.BUTOAPPROVER:
            var BU=action.value.target.value
            var bulist=ApproveMatrix.GeneralMatrix
            var approverlist=[]
            bulist.forEach(bu=>{
                if (bu.BU===BU){
                    approverlist=bu.Approver
                }
            })
            var data=Object.assign({},state.data)
            var genapprover=findField(data,'genapprover')
            genapprover.options=approverlist
            return {data:data}
        case actiontypes.SECTIONMOVE:
            var data=Object.assign({},state.data)
            var npage=data.currentpage + action.n
            if(npage>0 && npage <=data.totalpage){
                data.currentpage=npage
                return {data:data}
            }else{
                return state
            }
        case actiontypes.INPUTVALUE:
            var data=Object.assign({},state.data)
            var field=findField(data,action.id)
            switch(field.type){
                case fieldtypes.InputDatePicker:
                    field.value=action.value;
                    break;
                case fieldtypes.InputCheckbox:
                    field.value=!(field.value);
                    break;
                case fieldtypes.InputSelect:
                    field.value=action.value.target.value;
                    break;
                case fieldtypes.InputText:
                    field.value=action.value.target.value;
                    break;
                default:
                    break;
            }  
            return{data:data}
        default:
            return state
    }
}
