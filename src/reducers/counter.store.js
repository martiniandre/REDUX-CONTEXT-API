const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + action.aumenta;
        case "DECREMENT":
            return state - action.diminui;
        default:
            return state;
    };
}

export default counterReducer;