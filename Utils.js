import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import types from './types';
import store from './store';

const { dispatch, getState } = store;
 
export function getHeaders() {
	const state = getState();
	const userData = state.auth.userData;
	console.log("userData", userData);
	
	if (userData) {
		console.log("token", userData.token);
		axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
		return {
			Authorization: `Bearer ${userData.token}`,
		};
	}
	return {};
}

export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {
	console.log("api request",endPoint);
	console.log("api data",data);
	return new Promise(async (res, rej) => {
		const getTokenHeader = getHeaders();
		console.log("getTokenHeader",getTokenHeader)
		headers = {
			...getTokenHeader,
			...headers
		};

		console.log("headers",headers)
		console.log("method",method)

		if (method === 'get' || method === 'delete') {
			if (data != undefined) {
				data = {
					...requestOptions,
					...data,
					headers
				};	
			}
		}

		// console.log("api data",data)
		// console.log("api headers",headers)
		// console.log("api method",method)
		// console.log("api endPoint",endPoint)
		

		axios[method](endPoint, data)
			.then(result => {
				//console.log("api success", result);
				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log("error",error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export async function apiReqFormData(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {
	console.log("apiReqFormData", data);
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		try {
			const result = await axios[method](endPoint, data, { headers }); // Use await here
			//console.log("api success", result);
	  
			if (result.data.status === false) {
			  return reject(result.data);
			}
	  
			return resolve(result.data);
		  } catch (error) {
			console.error("api request error:", error);
	  
			if (error && error.response && error.response.status === 401) {
			  // Handle unauthorized error (e.g., clear user data)
			} else if (error && error.response && error.response.data) {
			  // Handle API-specific errors
			  return reject(error.response.data);
			} else {
			  // Handle network or other errors
			  return reject({ message: "Network Error" });
			}
		  }

		// axios[method](endPoint, data, { headers, transformRequest: (dataNew, headers) => {
		// 	return data;
		//   }, })
		// 	.then(result => {
		// 		console.log("api success", result);
		// 		const { data } = result;

		// 		if (data.status === false) {
		// 			return rej(data);
		// 		}

		// 		return res(data);
		// 	})
		// 	.catch(error => {
		// 		console.log("api failure", error);
		// 		console.log(error)
		// 		console.log(error && error.response, 'the error respne')
		// 		if (error && error.response && error.response.status === 401) {
		// 			clearUserData();
		// 			// NavigationService.resetNavigation();
		// 			//NavigationService.navigate('loginUsingEmailScreen');
		// 			dispatch({
		// 				type: types.CLEAR_REDUX_STATE,
		// 				payload: {}
		// 			});
		// 			dispatch({
		// 				type: types.NO_INTERNET,
		// 				payload: { internetConnection: true },
		// 			});


		// 		}
		// 		if (error && error.response && error.response.data) {
		// 			if (!error.response.data.message) {
		// 				return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
		// 			}
		// 			return rej(error.response.data)
		// 		} else {
		// 			return rej({ message: "Network Error", msg: "Network Error" });
		// 		}
		// 		return rej(error);
		// 	});
	});
}

export async function apiPost(endPoint, data, headers = {}) {	
	console.log("api post")
	return apiReq(endPoint, data, 'post', headers);
}

export async function apiPostFormData(endPoint, data, headers = {}) {	
	return apiReqFormData(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export async function apiGet(endPoint, data, headers = {}, requestOptions) {
	// const getTokenHeader = await getHeaders();
	// headers = {
	// 	...getTokenHeader,
	// 	...headers
	// };
	console.log("api get",endPoint, data, 'get', headers, requestOptions)
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export async function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key).then(data => {
			resolve(JSON.parse(data));
		});
	});
}

export function removeItem(key) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorage(key) {
	return AsyncStorage.clear();
}

export function setUserData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export function setStreamToken(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('streamToken', data);
}

export async function getStreamToken() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('streamToken').then(data => {
			resolve(JSON.parse(data));
		});
	});
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then(data => {
			resolve(JSON.parse(data));
		});
	});
}
export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}
