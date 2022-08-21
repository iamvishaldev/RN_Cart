// react components
import React from 'react'
// stack naviagtion
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// global
import { ScreensName } from '../../global'
// screens
import Dashboard from '../../screens/Dashboard/Dashboard';
import Cart from '../../screens/Cart/Cart';
import Offers from '../../screens/Offers/Offers'
import OrdersSummary from '../../screens/OrdersSummary/OrdersSummary';
import Splash from '../../screens/Splash/Splash';

const MainStack = () => {

    const Stack = createNativeStackNavigator()

    const screenOptions = {
        headerShown: false
    }

    const initialRouteName = ScreensName.DASH_BOARD

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName={initialRouteName}
        >
            <Stack.Screen name={ScreensName.SPLASH} component={Splash} />
            <Stack.Screen name={ScreensName.DASH_BOARD} component={Dashboard} />
            <Stack.Screen name={ScreensName.CART} component={Cart} />
            <Stack.Screen name={ScreensName.OFFERS} component={Offers} />
            <Stack.Screen name={ScreensName.ORDERSSUMMARY} component={OrdersSummary} />
        </Stack.Navigator>
    )
}

export default MainStack