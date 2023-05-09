import { apiGet, apiPost, clearUserData, setUserData, apiPostFormData, apiDelete } from "../Utils"
import { VERIFY_EMAIL, LOGIN } from "../urls";
import store from "../store";
import types from "../types";

const { dispatch } = store

export const getUserData = () => {
    return new Promise((resolve, reject) => {
        return apiGet('http://192.168.18.134:3000/journals').then((res) => {
            console.log("res user",res);
            dispatch({
                type: types.JOURNALS,
                payload: res
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        });
    });    
}

export const login = (data:any) => {
    // console.log("login.....", data);
    return new Promise((resolve, reject) => {
        return apiPost(LOGIN, data).then((res) => {
            // console.log("res in login action",res);   
            if(res?.token) 
                dispatch({
                    type: types.ACCESS_TOKEN,
                    payload: res?.token
                });
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const verifyEmail = (data:any) => {
    // console.log("verifyEmail.....", data);
    return new Promise((resolve, reject) => {
        return apiPost(VERIFY_EMAIL, data).then((res) => {
            // console.log("res in verifyEmail action",res);    
            dispatch({
                type: types.EMAIL,
                payload: data?.email
            });
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}