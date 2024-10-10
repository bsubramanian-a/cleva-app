import {
  apiGet,
  apiPost,
  clearUserData,
  setUserData,
  apiPostFormData,
  apiDelete,
  apiPut,
} from '../Utils';
import {
  JOURNALS,
  EXERCISES,
  SUMMARY,
  ADVICE,
  ASSETS,
  LIABILITIES,
  PROFILE,
  ADD_ASSET,
  ADD_LIABILITY,
  DELETE_ASSET,
  DELETE_LIABILITY,
  DEPENDANT,
  EMPLOYMENT,
  ESTATE,
  EXPENSES,
  INCOME,
  INSURANCE,
  RETIREMENT,
  GETGOALBYACCOUNT,
  CREATEGOAL,
  UPDATEGOALS,
  CHARTDATA,
  ACCOUNTS,
  GETZOOMTOKEN,
  SUPERSORTED,
  PLAN_B_ESTATE_PLAN_WILL,
  MONEY_ON_AUTO_DRIVE,
  PLAN_B_EMERGENCY_FUND,
  PLAN_B_INSURANCE,
  DEBTONATE_DEBT,
  HOUSEHOLD_EXP,
  ROLLING_ACCOUNT_BALANCE,
  NOTES,
  COACHNOTES,
  GET_MEETING
} from '../urls';
import store from '../store';
import types from '../types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const {dispatch} = store;


export const getMeetings = (type: string) => {
  return new Promise((resolve, reject) => {
    return apiGet(`${GET_MEETING}/${type}`)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getJournals = () => {
  return new Promise((resolve, reject) => {
    return apiGet(JOURNALS)
      .then(res => {
        dispatch({
          type: types.JOURNALS,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getExercises = () => {
  return new Promise((resolve, reject) => {
    return apiGet(EXERCISES)
      .then(res => {
        dispatch({
          type: types.EXERCISES,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getSuperSorted = () => {
  return new Promise((resolve, reject) => {
    return apiGet(SUPERSORTED)
      .then(res => {
        dispatch({
          type: types.SUPERSORTED,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getPlanBEstatePlanWill = () => {
  return new Promise((resolve, reject) => {
    return apiGet(PLAN_B_ESTATE_PLAN_WILL)
      .then(res => {
        dispatch({
          type: types.PLAN_B_ESTATE_PLAN_WILL,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getMoneyOnAutoDrive = () => {
  return new Promise((resolve, reject) => {
    return apiGet(MONEY_ON_AUTO_DRIVE)
      .then(res => {
        dispatch({
          type: types.MONEY_ON_AUTO_DRIVE,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getPlanBEmergencyFund = () => {
  return new Promise((resolve, reject) => {
    return apiGet(PLAN_B_EMERGENCY_FUND)
      .then(res => {
        dispatch({
          type: types.PLAN_B_EMERGENCY_FUND,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getPlanBInsurance = () => {
  return new Promise((resolve, reject) => {
    return apiGet(PLAN_B_INSURANCE)
      .then(res => {
        dispatch({
          type: types.PLAN_B_INSURANCE,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getDebtonateDebt = () => {
  return new Promise((resolve, reject) => {
    return apiGet(DEBTONATE_DEBT)
      .then(res => {
        dispatch({
          type: types.DEBTONATE_DEBT,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getHouseHoldExpenses = () => {
  return new Promise((resolve, reject) => {
    return apiGet(HOUSEHOLD_EXP)
      .then(res => {
        dispatch({
          type: types.HOUSEHOLD_EXP,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getRollingAccountBalance = () => {
  return new Promise((resolve, reject) => {
    console.log("ROLLING_ACCOUNT_BALANCE",ROLLING_ACCOUNT_BALANCE);
    return apiGet(ROLLING_ACCOUNT_BALANCE)
      .then(res => {
        console.log("getRollingAccountBalance res data",res.data);
        dispatch({
          type: types.ROLLING_ACCOUNT_BALANCE,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};



export const getNotes = () => {
  return new Promise((resolve, reject) => {
    return apiGet(NOTES)
      .then(res => {
        console.log("notes",res.data)
        dispatch({
          type: types.NOTES,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getCoachNotes = () => {
  return new Promise((resolve, reject) => {
    return apiGet(COACHNOTES)
      .then(res => {
        console.log("COACHNOTES",res.data)
        dispatch({
          type: types.COACHNOTES,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getSummary = () => {
  return new Promise((resolve, reject) => {
    return apiGet(SUMMARY)
      .then(res => {
        dispatch({
          type: types.SUMMARY,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getAdvices = () => {
  return new Promise((resolve, reject) => {
    return apiGet(ADVICE)
      .then(res => {
        dispatch({
          type: types.ADVICE,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getAssets = () => {
  return new Promise((resolve, reject) => {
    return apiGet(ASSETS)
      .then(res => {
        dispatch({
          type: types.ASSETS,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getChartData = (interval: string, zohoGoalId: string, todayValue: any) => {
  return new Promise((resolve, reject) => {
    const apiUrl = `${CHARTDATA}?interval=${interval}&zohoGoalId=${zohoGoalId}&todayValue=${todayValue}`;
    return apiGet(apiUrl)
      .then(res => {
        console.log("res......", res)
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getLiabilities = () => {
  return new Promise((resolve, reject) => {
    return apiGet(LIABILITIES)
      .then(res => {
        dispatch({
          type: types.LIABILITIES,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    return apiGet(ACCOUNTS)
      .then(res => {
        dispatch({
          type: types.ACCOUNTS,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getProfile = () => {
  return new Promise((resolve, reject) => {
    return apiGet(PROFILE)
      .then(res => {
        console.log('response from action1', res);
        dispatch({
          type: types.PROFILE,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getGoalsByAccount = () => {
  return new Promise((resolve, reject) => {
    return apiGet(GETGOALBYACCOUNT)
      .then(res => {
        dispatch({
          type: types.GOALS,
          payload: res.data,
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};
 
export const updateWealth = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPut(ASSETS, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateAccount= (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPut(ACCOUNTS, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const addAsset = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPost(ADD_ASSET, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteAsset = (id: any) => {
  return new Promise((resolve, reject) => {
    return apiDelete(DELETE_ASSET + '/' + id)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const addLiability = (data: any) => {
  console.log("addLiability", data);
  return new Promise((resolve, reject) => {
    return apiPost(ADD_LIABILITY, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteLiability = (id: any) => {
  return new Promise((resolve, reject) => {
    return apiDelete(DELETE_LIABILITY + '/' + id)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateProfile = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPut(PROFILE, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updatePlanBEstatePlanWill = (data: any) => {
  console.log("updatePlanBEstatePlanWill data coming in action", data);
  return new Promise((resolve, reject) => {
    return apiPut(PLAN_B_ESTATE_PLAN_WILL, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateOtherProfileDetails = (data: any, url: string) => {
  return new Promise((resolve, reject) => {
    return apiPut(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createGoal = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPost(CREATEGOAL, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateGoal = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPut(UPDATEGOALS, data)
      .then(res => {
        console.log("action", data);
        dispatch({
          type: types.UPDATE_GOAL_DETAILS,
          payload: {
            goalId: data?.id,
            updatedFields: {...data}
          },
        });
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

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

export const updateAddGoals = (data: any) => {
  dispatch({
    type: types.ADD_GOALS,
    payload: data,
  });
};

export const emptyAddGoals = () => {
  dispatch({
    type: types.REMOVE_GOALS,
    payload: {},
  });
};

export const logout = () => {
  signOut();
  dispatch({
    type: types.LOGOUT,
    payload: {},
  });
};

export const createZoomMeeting = (data: any) => {
  return new Promise((resolve, reject) => {
    return apiPost(CREATE_MEETING, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

function CREATE_MEETING(CREATE_MEETING: any, data: any) {
  throw new Error('Function not implemented.');
}

