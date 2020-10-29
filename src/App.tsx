import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

import { Navbar } from './components/layout/Navbar';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

import { Alert } from './components/layout/Alert';
import { User } from './components/users/User';

import './App.css';

const App = () => {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container">
							<Alert />
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/about" component={AboutPage} />
								<Route exact path="/user/:login" component={User} />
								<Route component={NotFoundPage} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
};

export default App;
