import axios from 'axios';
import { USER_AUTH_DATA_KEY } from 'shared/config/const';
export var $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_AUTH_DATA_KEY) || '',
    },
});
