import types from "../types";

const initialState = {
    journals : {},
    exercises : {},
    summary : {},
    advices : {},
    assets : {},
    liabilities : {},
    profile : {},
    goals: {},
    addGoals: {}
};

const data = (state = initialState, action:any) => {
    const data = action.payload;

    switch (action.type) {
        case types.JOURNALS:
            return {...state, journals: data};
        case types.EXERCISES:
            return {...state, exercises: data};
        case types.SUMMARY:
            return {...state, summary: data};
        case types.ADVICE:
            return {...state, advices: data};
        case types.ASSETS:
            return {...state, assets: data};
        case types.LIABILITIES:
            return {...state, liabilities: data};
        case types.PROFILE:
            return {...state, profile: data};
        case types.GOALS:
            return {...state, goals: data};
        case types.ADD_GOALS:
            return { ...state, addGoals: { ...state.addGoals, ...data } };
        case types.LOGOUT:
            return {...initialState};
        default:
            return state;
    }  
};

export default data;