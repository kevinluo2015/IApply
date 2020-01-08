//need to update the whole page 

//action types
import { autapp} from '../Config/config'
const types={
    test:"test"
}


const initalstate={data:autapp
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