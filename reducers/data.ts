import types from '../types';

const initialState = {
  journals: {},
  exercises: {},
  summary: {},
  advices: {},
  assets: {},
  liabilities: {},
  profile: {},
  goals: {} as any,
  addGoals: {},
  accounts: {},
  supersorted: {},
  planBEstatePlanWill: {},
  moneyOnAutoDrive: {},
  planBEmergencyFund: {},
  planBInsurance: {},
  debtonateDebt: {},
  householdExpenses: {},
  rollingAccountBalance: {},
  notes: {},
  coachnotes: {},
  ina: {},
  financialAccounts: [],
};

const data = (state = initialState, action: any) => {
  const data = action.payload;
console.log("coming inside reducer", action.type);
  switch (action.type) {
    case types.JOURNALS:
      return {...state, journals: data};
    case types.EXERCISES:
      return {...state, exercises: data};
    //case types.SUPERSORTED:
    //   return {...state, supersorted: data};
    case types.PLAN_B_ESTATE_PLAN_WILL:
      return {...state, planBEstatePlanWill: data};
    case types.MONEY_ON_AUTO_DRIVE:
      return {...state, moneyOnAutoDrive: data};
    case types.PLAN_B_EMERGENCY_FUND:
      return {...state, planBEmergencyFund: data};
    case types.PLAN_B_INSURANCE:
      return {...state, planBInsurance: data};
    case types.DEBTONATE_DEBT:
      return {...state, debtonateDebt: data};
    case types.HOUSEHOLD_EXP:
      return {...state, householdExpenses: data};
    case types.ROLLING_ACCOUNT_BALANCE:
      return {...state, rollingAccountBalance: data};
    case types.NOTES:
      return {...state, notes: data};
    case types.COACHNOTES:
      return {...state, coachnotes: data};
    case types.INA:
      return {...state, ina: data};
    case types.FINANCIALACCOUNTS:
        return {...state, financialAccounts: data};       
    case types.UPDATE_FINANCIAL_ACCOUNTS:
        return {...state, financialAccounts: [...state.financialAccounts, data]};
    //   console.log('coming inside update financial account', action.payload);
    //   console.log('state.financialAccounts', state.financialAccounts);
    //   const updatedState = updateAccounts(
    //     state.financialAccounts,
    //     action.payload,
    //   );
    //   console.log("updatedState",updatedState)
    //   return {...state, financialAccounts: updatedState};
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
      return {...state, addGoals: {...state.addGoals, ...data}};
    case types.REMOVE_GOALS:
      return {...state, addGoals: {}};
    case types.LOGOUT:
      return {...initialState};
    case types.UPDATE_GOAL_DETAILS:
      const {goalId, updatedFields} = action.payload;
      return {
        ...state,
        goals: state.goals.map((goal: any) => {
          if (goal.id === goalId) {
            return {
              ...goal,
              ...updatedFields,
            };
          }
          return goal;
        }),
      };
    case types.ACCOUNTS:
      return {...state, accounts: data};
    default:
      return state;
  }
};

const updateAccounts = (currentAccounts: any[], updatedAccounts: any[]) => {
  // Implement your comparison logic here
  return currentAccounts.map(account => {
    const updatedAccount = updatedAccounts.find(
      updated => updated.id === account.id,
    );
    // Update account properties using object spread
    return updatedAccount ? {...account, ...updatedAccount} : account;
  });
};

export default data;
