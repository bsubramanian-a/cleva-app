import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const ChapterTab = ({ tabs, activeTab, onTabPress, type }:any) => {
  return (
    <View style={styles.tabsContainer}>
      {tabs.map((tab:any, index:any) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index && styles.activeTabItem,
          ]}
          onPress={() => onTabPress(index)}
        >
          <Text
            style={[
              styles.tabItemText,
              activeTab === index && styles.activeTabItemText,
            ]}
          >
            {tab}
          </Text>
          {(activeTab === index && type == "tab") && <View style={[styles.activeTabItemLine, {left: index == 0 ? 20 : (index == 1 ? 15 : (index == 2)? 26 : 17) } ]} />}
          {(activeTab === index && type == "subtab") && <View style={[styles.activeTabItemLine, {left: index == 0 ? 35 : (index == 1 ? 25 : (index == 2)? 48 : 12) } ]} />}
          {(activeTab === index && type == "user-tab") && <View style={[styles.activeTabItemLine, {left: index == 0 ? 40 : (index == 1 ? 43 : (index == 2)? 43 : 12) } ]} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom:15
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTabItem: {
    // borderBottomWidth: 2,
    // borderBottomColor: Color.goldenrod,
    // paddingBottom: 2,
  },
  tabItemText: {
    fontSize: 14,
    color: '#555',
  },
  activeTabItemText: {
    color: Color.goldenrod,
  },
  activeTabItemLine: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    width: 20,
    backgroundColor: Color.goldenrod,
  },  
});

export default ChapterTab;
