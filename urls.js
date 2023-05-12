export const API_BASE_URL = "http://192.168.18.178:3000/";
// export const API_BASE_URL = "http://192.168.18.134:3000/";
// export const API_BASE_URL = "https://cleva-backend.onrender.com/";

export const getApiURL = (endpoint) => API_BASE_URL + endpoint

export const VERIFY_EMAIL = getApiURL('verify-email');
export const LOGIN = getApiURL('login');
export const JOURNALS = getApiURL('journals');
export const EXERCISES = getApiURL('exercises');
export const SUMMARY = getApiURL('summary');
export const ADVICE = getApiURL('advice');
export const ASSETS = getApiURL('assets');
export const LIABILITIES = getApiURL('liabilities');
export const PROFILE = getApiURL('profile');