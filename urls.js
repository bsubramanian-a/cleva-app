// export const API_BASE_URL = "http://192.168.18.178:3000/";
//export const API_BASE_URL = 'http://192.168.18.190:3000/';
// export const API_BASE_URL = "http://192.168.18.98:3000/";
// export const API_BASE_URL = "http://192.168.18.134:3000/";
// export const API_BASE_URL = "https://cleva-backend.onrender.com/";
// export const API_BASE_URL = "http://3.106.56.137:3000/";
//export const API_BASE_URL = 'http://192.168.1.10:3000/';
export const API_BASE_URL = 'http://10.0.2.2:3000/';
//export const API_BASE_URL = 'https://app.cleva.co/';



export const getApiURL = endpoint => API_BASE_URL + endpoint;

export const VERIFY_EMAIL = getApiURL('verify-email');
export const VERIFY_OTP = getApiURL('verify-otp');
export const VERIFY_SOCIAL_EMAIL = getApiURL('verify-social-email');
export const VERIFY_APPLE_EMAIL = getApiURL('verify-apple-email');
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
export const CREATEGOAL = getApiURL('goals');
export const UPDATEGOALS = getApiURL('goals/updategoals');
export const CHARTDATA = getApiURL('goals/chartData');
export const ACCOUNTS = getApiURL('accounts');
export const GETZOOMTOKEN = getApiURL('get-zoom-token');
export const SUPERSORTED = getApiURL('supersorted');
export const PLAN_B_ESTATE_PLAN_WILL = getApiURL('planbestateplanwill');
export const MONEY_ON_AUTO_DRIVE = getApiURL('moneyonautodrive');
export const PLAN_B_EMERGENCY_FUND = getApiURL('planbemergencyfund');
export const PLAN_B_INSURANCE = getApiURL('planbinsurance');
export const DEBTONATE_DEBT = getApiURL('debtonatedebt');
export const HOUSEHOLD_EXP = getApiURL('householdexpenses');
export const ROLLING_ACCOUNT_BALANCE = getApiURL('rollingaccountbalance');
export const NOTES = getApiURL('notes');
export const COACHNOTES = getApiURL('coachnotes');
export const GET_MEETING = getApiURL('getmeeting');
export const GET_INA = getApiURL('insuranceneedanalysis');
export const FINANCIAL_ACCOUNTS = getApiURL('financialaccounts');
export const GET_ACCOUNT = getApiURL('get_account');
export const PUT_ACCOUNT = getApiURL('put_account');




