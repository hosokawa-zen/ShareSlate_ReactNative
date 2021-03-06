import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Navigation from './lib/Navigation';
import { defaultHeader, getActiveRouteName, navigationTheme } from './utils/navigation';
import {
	ROOT_LOADING, ROOT_OUTSIDE, ROOT_NEW_SERVER, ROOT_INSIDE, ROOT_SET_USERNAME, ROOT_BACKGROUND
} from './actions/app';

// Stacks
import AuthLoadingView from './views/AuthLoadingView';

// FirstProfileStack
import FirstProfileSetView from './views/firstProfileSetView';


import OutsideStack  from './stacks/OutsideStack';
import InsideStack from './stacks/InsideStack';
import MasterDetailStack from './stacks/MasterDetailStack';
import { ThemeContext } from './theme';
import { setCurrentScreen } from './utils/log';

const FirstProfile = createStackNavigator();
export const FirstProfileStack = () => {
	return (
		<FirstProfile.Navigator mode='modal' screenOptions={{ ...defaultHeader }}>
			<FirstProfile.Screen
				name='FirstProfileSetView'
				component={FirstProfileSetView}
				options={{ headerShown: false }}
			/>
		</FirstProfile.Navigator>
	)
}

// App
const Stack = createStackNavigator();
const App = React.memo(({ root, isMasterDetail }) => {
	if (!root) {
		return null;
	}

	const { theme } = React.useContext(ThemeContext);
	const navTheme = navigationTheme(theme);

	React.useEffect(() => {
		const state = Navigation.navigationRef.current?.getRootState();
		const currentRouteName = getActiveRouteName(state);
		Navigation.routeNameRef.current = currentRouteName;
		setCurrentScreen(currentRouteName);
	}, []);

	return (
		<NavigationContainer
			theme={navTheme}
			ref={Navigation.navigationRef}
			onStateChange={(state) => {
				const previousRouteName = Navigation.routeNameRef.current;
				const currentRouteName = getActiveRouteName(state);
				if (previousRouteName !== currentRouteName) {
					setCurrentScreen(currentRouteName);
				}
				Navigation.routeNameRef.current = currentRouteName;
			}}
		>
			<Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
				<>
					{root === ROOT_LOADING || root === ROOT_BACKGROUND ? (
						<Stack.Screen
							name='AuthLoading'
							component={AuthLoadingView}
						/>
					) : null}
					{root === ROOT_OUTSIDE || root === ROOT_NEW_SERVER ? (
						<Stack.Screen
							name='OutsideStack'
							component={OutsideStack}
						/>
					) : null}
					{root === ROOT_INSIDE && isMasterDetail ? (
						<Stack.Screen
							name='MasterDetailStack'
							component={MasterDetailStack}
						/>
					) : null}
					{root === ROOT_INSIDE && !isMasterDetail ? (
						<Stack.Screen
							name='InsideStack'
							component={InsideStack}
						/>
					) : null}
					{root === ROOT_SET_USERNAME ? (
						<Stack.Screen
							name='FirstProfileStack'
							component={FirstProfileStack}
						/>
					) : null}
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
});
const mapStateToProps = state => ({
	root: state.app.root,
	isMasterDetail: state.app.isMasterDetail
});

App.propTypes = {
	root: PropTypes.string,
	isMasterDetail: PropTypes.bool
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
