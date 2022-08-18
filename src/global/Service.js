import axios from 'axios';

export const BASE_URL = 'https://swipeme.herokuapp.com/';
//end points
export const SignUpUser = 'user';
export const SignInUser = 'login/getToken';
export const Profile = 'user/getByNumber/8114493700';

export const getRequest = async (endPoint, token) => {
    var Url = BASE_URL + endPoint;
    try {
        const resp = await axios.get(Url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return resp;
    } catch (error) {
        return error;
    }
};
export const getRequestWithToken = (token, endPoint) =>
    axios
        .get(`${BASE_URL}${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            return error;
        });
export const postRequestWithoutToken = (endPoint, data) =>
    axios
        .post(`${BASE_URL}${endPoint}`, data, {})
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                Alert.alert('', `${error.response.data.message}`);
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                Alert.alert('', `${error.response.data.message}`);
            } else if (error?.response?.status === 401) {
                Alert.alert('', `${error.response.data.message}`);
            } else if (error?.response?.status === 500) {
                Alert.alert('', `${error.response.data.message}`);
            } else {
                Alert.alert('', `${error}`);
            }
        });

export const postApiWithToken = (token, endPoint, data) =>
    axios
        .post(`${BASE_URL}${endPoint}`, data, {
            headers:
                Object.keys(data).length > 0
                    ? {
                        'Content-Type': 'multipart/form-data',
                        Accept: '*/*',
                        Authorization: `Bearer ${token}`,
                    }
                    : {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                Alert.alert('', `${error.response.data.message}`);
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                Alert.alert('', `${error.response.data.message}`);
            } else if (error?.response?.status === 401) {
                Alert.alert('', `${error.response.data.message}`);
            } else if (error?.response?.status === 500) {
                Alert.alert('', `${error.response.data.message}`);
            } else {
                Alert.alert('', `${error}`);
            }
        });
