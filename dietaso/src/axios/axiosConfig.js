import stores from '../redux/Store';
import axios from 'axios';

const { store } = stores();

const instance = axios.create({
    baseURL: 'https://dietasoapiv1.herokuapp.com/api/v2',
    timeout: 50000,
});

instance.interceptors.request.use(async (config) => {
    const token = await store.getState().authorizationStore.token;
    config.headers.common['Authorization'] = `Bearer ${token}`;
    config.headers.common['Content-Type'] = 'application/json';
    //console.log('Config: ', config);
    return config;
});

export default instance;
