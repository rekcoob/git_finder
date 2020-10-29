import React from 'react';
import { Search } from '../users/Search';
import { UserList } from '../users/UserList';

export const HomePage: React.FC = () => (
	<>
		<Search />
		<UserList />
	</>
);
