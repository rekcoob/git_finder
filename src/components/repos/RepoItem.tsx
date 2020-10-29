import React from 'react';
import { IUserRepo } from '../../context/github/githubTypes';

type Props = {
	repo: IUserRepo;
};

export const RepoItem: React.FC<Props> = ({ repo: { name, html_url } }) => {
	return (
		<div className="card">
			<h3>
				<a href={html_url}>{name}</a>
			</h3>
		</div>
	);
};
