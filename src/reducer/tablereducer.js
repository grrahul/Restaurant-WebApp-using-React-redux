const initialstate = {
    table_number : null
}

export default function tablereducer(state=initialstate,action){
    const {type,payload} = action;
    switch(type){
        case "SETTABLENUMBER" :
            return {...state,table_number:payload}
        case "RESETTABLE" :
            return {...state,table_number:null}
        default :
            return state
    }
}