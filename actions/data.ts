import { apiGet, apiPost, clearUserData, setUserData, apiPostFormData, apiDelete, apiPut } from "../Utils"
import { JOURNALS, EXERCISES, SUMMARY, ADVICE, ASSETS, LIABILITIES, PROFILE } from "../urls";
import store from "../store";
import types from "../types";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

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

export const updateWealth = (data:any) => {
    return new Promise((resolve, reject) => {
        return apiPut(ASSETS, data).then((res) => {  
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const updateProfile = (data:any) => {
    return new Promise((resolve, reject) => {
        return apiPut(PROFILE, data).then((res) => {  
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const isSignedIn = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      return isSignedIn;
    } catch (error) {
      console.error('Sign-in status error: ', error);
      return false;
    }
};

export const signOut = async () => {
    try {
        const isUserSignedIn = await isSignedIn();
    
        if (isUserSignedIn) {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.log('User signed out');
        } else {
          console.log('User is not signed in');
        }
    } catch (error) {
        console.error('Sign out error: ', error);
    }
};

export const logout = () => {
    signOut();
    dispatch({
        type: types.LOGOUT,
        payload: {}
    });
}





