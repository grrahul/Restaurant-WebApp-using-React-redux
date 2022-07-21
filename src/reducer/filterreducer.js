const initialstate = {
    filter_name :"All Items"
}

export default function filterreducer(state=initialstate,action){
    const {type,payload} = action;

    switch(type){
        case "SETFILTER":
            return {...state,filter_name:payload}
        case "RESETFILTER":
            return {...state,filter_name:"All Items"}
        default :
            return state;
    }
}