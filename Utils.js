import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import types from './types';
import store from './store';

const { dispatch, getState } = store;
 
export async function getHeaders() {
	const state = getState();
	const userData = state.auth.userData;
	
	if (userData) {
		return {
			authorization: `Bearer ${userData.token}`,
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
	console.log("api request");
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

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
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

		axios[method](endPoint, data, { headers, transformRequest: (dataNew, headers) => {
			return data;
		  }, })
			.then(result => {
				console.log("api success", result);
				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log("api failure", error);
				console.log(error)
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