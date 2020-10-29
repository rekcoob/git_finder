import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../context/github/githubTypes';

type Props = {
	user: IUser;
};

export const UserItem: React.FC<Props> = ({ user: { login, avatar_url } }) => {
	// const { login, avatar_url, html_url } = props;

	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt=""
				className="round-img"
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>

			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};
