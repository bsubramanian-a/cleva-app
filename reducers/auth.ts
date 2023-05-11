import types from "../types";

const initialState = {
    email: {},
    userData: ""
};

const auth = (state = initialState, action:any) => {
    const data = action.payload;

    switch (action.type) {
        case types.EMAIL:
            return {...state, email: data};
        case types.ACCESS_TOKEN:
            return {...state, userData: data};
        case types.LOGOUT:
            return {...initialState};
        default:
            return state;
    }  
};

export default auth;