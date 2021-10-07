import React from 'react';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Home from '../page/Home';
import Detail from '../page/Detail';

const Stack = createStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	)
}

export default AppStack
