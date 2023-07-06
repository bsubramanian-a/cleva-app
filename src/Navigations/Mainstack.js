//import liraries
import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TermsAndCondition from '../screens/TermsAndCondition';
import Goals from '../screens/Goals';
import Home from '../screens/Home';
import Journal from '../screens/Journal';
import Library from '../screens/Library';
import Coach from '../screens/Coach';
import LinearGradient from 'react-native-linear-gradient';
import GetStarted from '../screens/GetStarted';
import Profile from '../screens/Profile';
import WealthAssets from '../screens/WealthAssets';
import SOP from '../screens/SOP';
import EditWealth from '../screens/EditWealth';
import EditProfile from '../screens/EditProfile';
import AddWealth from '../screens/AddWealth';
import EditDependants from '../screens/EditDependants';
import EditEmployment from '../screens/EditEmployment';
import EditEstate from '../screens/EditEstate';
import EditExpenses from '../screens/EditExpenses';
import EditIncome from '../screens/EditIncome';
import EditInsurance from '../screens/EditInsurance';
import EditRetirement from '../screens/EditRetirement';
import AddANewGoalGoalDate from '../screens/AddANewGoalGoalDate';
import AddANewGoalGoalFrequenc from '../screens/AddANewGoalGoalFrequenc';
import AddANewGoalGoalImportan from '../screens/AddANewGoalGoalImportan';
import AddANewGoalGoalMoney from '../screens/AddANewGoalGoalMoney';
import AddANewGoalGoalResponsi from '../screens/AddANewGoalGoalResponsi';
import AddANewGoalGoalSummary from '../screens/AddANewGoalGoalSummary';
import AddANewGoalGoalType from '../screens/AddANewGoalGoalType';
import GoalImportance from '../screens/GoalImportance';
import Accounts from '../screens/Accounts';
import EditAccount from '../screens/EditAccount';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation, images}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const activeImage = images[route.name]?.active;
        const inactiveImage = images[route.name]?.inactive;
        const imageSource = isFocused ? activeImage : inactiveImage;
        const tabBackgroundColor = isFocused
          ? ['#FBB142', '#F7A326']
          : 'transparent';
        const textColor = isFocused ? '#EF9F27' : 'black';
        const tabTranslateY = isFocused ? -18 : 0;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 25,
            }}>
            {isFocused ? (
              <View
                style={{
                  bottom: 0,
                  transform: [{translateY: tabTranslateY}],
                  backgroundColor: '#fff',
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 18,
                }}>
                <LinearGradient
                  colors={tabBackgroundColor}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    background: tabBackgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}>
                  <Image source={imageSource} style={{width: 20, height: 20}} />
                </LinearGradient>
                <Text style={{color: textColor}}>{route?.name}</Text>
              </View>
            ) : (
              <>
                <View
                    style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: tabBackgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    bottom: 0,
                    transform: [{translateY: tabTranslateY}],
                    }}>
                    <Image source={imageSource} style={{width: 20, height: 20}} />
                </View>
                <Text style={{color: textColor}}>{route?.name}</Text>
            </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tabs = ({userData}) => {
  const images = {
    Home: {
      active: require('../assets/tabs/home-f.png'),
      inactive: require('../assets/tabs/home.png'),
    },
    Journal: {
      active: require('../assets/tabs/book-f.png'),
      inactive: require('../assets/tabs/book.png'),
    },
    Goals: {
      active: require('../assets/tabs/activity-f.png'),
      inactive: require('../assets/tabs/activity.png'),
    },
    Library: {
      active: require('../assets/tabs/search-f.png'),
      inactive: require('../assets/tabs/search.png'),
    },
    Coach: {
      active: require('../assets/tabs/messages-f.png'),
      inactive: require('../assets/tabs/messages.png'),
    },
  };

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} images={images} />}
      screenOptions={{headerShown: false}}
      initialRouteName={userData?.status === 'login' ? 'Home' : 'Goals'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Journal" component={Journal} />
      <Tab.Screen name="Goals" component={Goals} />
      <Tab.Screen name="Coach" component={Coach} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

// create a component
const Mainstack = (Drawer, userData) => {
  return (
    <Drawer.Navigator
      useLegacyImplementation="true"
      initialRouteName={'Tab'}
      backBehavior="history"
      drawerPosition="right"
      openByDefault={false}
      drawerWidth={200}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Drawer.Screen name="Tab">
        {props => <Tabs {...props} userData={userData} />}
      </Drawer.Screen>
      <Drawer.Screen name="GetStarted" component={GetStarted} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="WealthAssets" component={WealthAssets} />
      <Drawer.Screen name="SOP" component={SOP} />
      <Drawer.Screen name="EditWealth" component={EditWealth} />
      <Drawer.Screen name="AddWealth" component={AddWealth} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="EditDependants" component={EditDependants} />
      <Drawer.Screen name="EditEmployment" component={EditEmployment} />
      <Drawer.Screen name="EditEstate" component={EditEstate} />
      <Drawer.Screen name="EditExpenses" component={EditExpenses} />
      <Drawer.Screen name="EditIncome" component={EditIncome} />
      <Drawer.Screen name="EditInsurance" component={EditInsurance} />
      <Drawer.Screen name="EditRetirement" component={EditRetirement} />
      <Drawer.Screen
        name="AddANewGoalGoalDate"
        component={AddANewGoalGoalDate}
      />
      <Drawer.Screen
        name="AddANewGoalGoalFrequenc"
        component={AddANewGoalGoalFrequenc}
      />
      <Drawer.Screen
        name="AddANewGoalGoalImportan"
        component={AddANewGoalGoalImportan}
      />
      <Drawer.Screen
        name="AddANewGoalGoalMoney"
        component={AddANewGoalGoalMoney}
      />
      <Drawer.Screen
        name="AddANewGoalGoalResponsi"
        component={AddANewGoalGoalResponsi}
      />
      <Drawer.Screen
        name="AddANewGoalGoalSummary"
        component={AddANewGoalGoalSummary}
      />
      <Drawer.Screen
        name="AddANewGoalGoalType"
        component={AddANewGoalGoalType}
      />
      <Drawer.Screen name="GoalImportance" component={GoalImportance} />
      <Drawer.Screen name="Accounts" component={Accounts} />
      <Drawer.Screen name="EditAccount" component={EditAccount} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderColor: '#ffeccf',
    borderWidth: 1,
    bottom: 0,
    elevation: 40,
    flexDirection: 'row',
    position: 'relative',
    shadowColor: 'rgba(32, 34, 36, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
});

//make this component available to the app
export default Mainstack;
