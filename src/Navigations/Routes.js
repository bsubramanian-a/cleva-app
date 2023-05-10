import React, {Component, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './Authstack';
import Mainstack from './Mainstack';
import { useSelector } from 'react-redux';
import { acc } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Routes = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  // console.log("route access token", access_token);
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (    
    <>
      {!!access_token && access_token ? Mainstack(Drawer) : Authstack(Stack)}
    </>
  );
};

//make this component available to the app
export default Routes;
