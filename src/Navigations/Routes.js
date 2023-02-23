import React, {Component, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './Authstack';
import Mainstack from './Mainstack';
import { useSelector } from 'react-redux';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Routes = () => {
  const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (    
    // <>
    //   {!!userData && userData?.access_token ? Mainstack(Drawer, userData?.user?.new_status == 1 ? 'HomeNormal' : 'HomeNewUser')
    //               : Authstack(Stack)
    //           }
    // </>
    Authstack(Stack)
  );
};

//make this component available to the app
export default Routes;
