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
    case types.REMOVE_GOALS:
        return {...state, addGoals: {}}
    case types.LOGOUT:
        return {...initialState};
    case types.UPDATE_GOAL_DETAILS:
        const { goalId, updatedFields } = action.payload;
        return {
            ...state,
            goals: state.goals.map((goal:any) => {
            if (goal.id === goalId) {
                return {
                ...goal,
                ...updatedFields
                };
            }
            return goal;
            })
        };
    default:
        return state;
    }  
};

export default data;