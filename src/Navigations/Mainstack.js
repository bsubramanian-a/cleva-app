//import liraries
import React, { Component } from 'react';

// create a component
const Mainstack = (Drawer, initialRoute) => {
    return (
        <Drawer.Navigator useLegacyImplementation='true' initialRouteName={initialRoute} backBehavior="history" drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerPosition: "right",
            openByDefault: false,
            drawerWidth: 200,
        }}>            
            {/* <Drawer.Screen name="HomeNewUser" component={HomeNewUser} /> */}
        </Drawer.Navigator>
    );
};

//make this component available to the app
export default Mainstack;
