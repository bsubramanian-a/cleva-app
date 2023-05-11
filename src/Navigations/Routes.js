import React, {Component, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './Authstack';
import Mainstack from './Mainstack';
import { useSelector } from 'react-redux';
import { acc } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Routes = () => {
  const userData = useSelector((state) => state.auth.userData);
  // console.log("route access token", userData?.token);
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (    
    <>
      {!!userData && userData?.token ? Mainstack(Drawer, userData) : Authstack(Stack)}
    </>
  );
};

//make this component available to the app
export default Routes;
