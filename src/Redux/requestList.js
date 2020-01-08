//need to update the whole page 

//action types
const types={
    test:"test"
}
const initalstate={
    reqDate:[]
}
//actions
export const actions={
    test:(dispatch)=>{
        dispatch({
            type:types.test
        })
    }
}

//reducers

export default function reducer(state=initalstate,action){
    switch(action.type){
        case types.test:
            return state
        default:
            return state
    }

}