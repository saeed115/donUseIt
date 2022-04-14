import clientApi from './clientApi';

const login = (username, password) => clientApi.post('/users/login', { username, password });

const register = (user) => clientApi.post('/users/register', user);

export default {
	login,
	register,
};
