import types from "../types";

const initialState = {
    email: {},
    access_token: ""
};

const auth = (state = initialState, action:any) => {
    const data = action.payload;

    switch (action.type) {
        case types.EMAIL:
            return {...state, email: data};
        case types.ACCESS_TOKEN:
            return {...state, access_token: data};
        default:
            return state;
    }  
};

export default auth;