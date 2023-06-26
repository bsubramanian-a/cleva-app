// export const API_BASE_URL = "http://192.168.18.178:3000/";
// export const API_BASE_URL = "http://192.168.18.190:3000/";
// export const API_BASE_URL = "http://192.168.18.134:3000/";
export const API_BASE_URL = "https://cleva-backend.onrender.com/";

export const getApiURL = (endpoint) => API_BASE_URL + endpoint

export const VERIFY_EMAIL = getApiURL('verify-email');
export const VERIFY_OTP = getApiURL('verify-otp');
export const VERIFY_SOCIAL_EMAIL = getApiURL('verify-social-email');
export const LOGIN = getApiURL('login');
export const JOURNALS = getApiURL('journals');
export const EXERCISES = getApiURL('exercises');
export const SUMMARY = getApiURL('summary');
export const ADVICE = getApiURL('advice');
export const ASSETS = getApiURL('assets');
export const LIABILITIES = getApiURL('liabilities');
export const PROFILE = getApiURL('profile');
export const ADD_LIABILITY = getApiURL('liability');
export const ADD_ASSET = getApiURL('asset');
export const DELETE_LIABILITY = getApiURL('liability');
export const DELETE_ASSET = getApiURL('asset');
export const DEPENDANT = getApiURL('dependant');
export const EMPLOYMENT = getApiURL('employment');
export const ESTATE = getApiURL('estate');
export const EXPENSES = getApiURL('expenses');
export const INCOME = getApiURL('income');
export const INSURANCE = getApiURL('ina');
export const RETIREMENT = getApiURL('retirement');
export const GETGOALBYACCOUNT = getApiURL('goals/goalsbyaccount');
export const UPDATEGOALS = getApiURL('goals/updategoals');