import { useContext } from 'react';

import AuthContext from './AuthContext';
import authStorage from './storage';

const useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logOut = () => {
		setUser(null);

		authStorage.removeToken();
	};

	const logIn = (userData) => {
		setUser(userData);

		authStorage.storeToken(userData);
	};

	return { user, setUser, logOut, logIn };
};

export default useAuth;
