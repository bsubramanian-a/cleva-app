import { apiGet, apiPost, clearUserData, setUserData, apiPostFormData, apiDelete } from "../Utils"
import { JOURNALS, EXERCISES, SUMMARY, ADVICE, ASSETS, LIABILITIES, PROFILE } from "../urls";
import store from "../store";
import types from "../types";

const { dispatch } = store

export const getJournals = () => {
    return new Promise((resolve, reject) => {
        return apiGet(JOURNALS).then((res) => {
            dispatch({
                type: types.JOURNALS,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getExercises = () => {
    return new Promise((resolve, reject) => {
        return apiGet(EXERCISES).then((res) => {
            dispatch({
                type: types.EXERCISES,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getSummary = () => {
    return new Promise((resolve, reject) => {
        return apiGet(SUMMARY).then((res) => {
            dispatch({
                type: types.SUMMARY,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getAdvices = () => {
    return new Promise((resolve, reject) => {
        return apiGet(ADVICE).then((res) => {
            dispatch({
                type: types.ADVICE,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getAssets = () => {
    return new Promise((resolve, reject) => {
        return apiGet(ASSETS).then((res) => {
            dispatch({
                type: types.ASSETS,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getLiabilities = () => {
    return new Promise((resolve, reject) => {
        return apiGet(LIABILITIES).then((res) => {
            dispatch({
                type: types.LIABILITIES,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const getProfile = () => {
    return new Promise((resolve, reject) => {
        return apiGet(PROFILE).then((res) => {
            dispatch({
                type: types.PROFILE,
                payload: res.data
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}




