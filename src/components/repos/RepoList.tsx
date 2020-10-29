import React from 'react';
import { RepoItem } from './RepoItem';
import { IUserRepo } from '../../context/github/githubTypes';

type Props = {
	repos: IUserRepo[];
};

export const RepoList: React.FC<Props> = ({ repos }) => {
	return (
		<>
			{repos.map((repo: IUserRepo) => (
				<RepoItem repo={repo} key={repo.id} />
			))}
		</>
	);
};
