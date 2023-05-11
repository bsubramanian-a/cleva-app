import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const ChapterTab = ({ tabs, activeTab, onTabPress }:any) => {
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
          {activeTab === index && <View style={[styles.activeTabItemLine, {left: index == 1 ? 39 : (index == 2 ? 44 : 36) } ]} />}
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
