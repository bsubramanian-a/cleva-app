//import liraries
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartupScreen from '../screens/StartupScreen';
import LoginSignup from '../screens/LoginSignup';
import LoginSignup1 from '../screens/LoginSignup1';
import PasswordLogin from '../screens/PasswordLogin';
import Splash from '../screens/Splash';
import EmailLogin from '../screens/EmailLogin';
import OTPScreen from '../screens/OTPScreen';
import UserType from '../screens/UserType';

// create a component
const Authstack = (Stack) => {
    // console.log("auth stack")
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="StartupScreen" component={StartupScreen} />
            <Stack.Screen name="LoginSignup" component={LoginSignup} />
            <Stack.Screen name="LoginSignup1" component={LoginSignup1} />
            <Stack.Screen name="PasswordLogin" component={PasswordLogin} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="EmailLogin" component={EmailLogin} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="UserType" component={UserType} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Authstack;
