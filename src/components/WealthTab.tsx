import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const WealthTab = ({ tabs, activeTab, onTabPress }:any) => {
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
          {activeTab === index && <View style={[{left: index == 1 ? 27 : (index == 2 ? 44 : 36) } ]} />}
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
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 40,
    shadowOpacity: 0.04,
    borderColor: "#ffeccf",
    borderWidth: 1,
    paddingHorizontal: 0,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.white1,
    height: 54,
    marginHorizontal: 24,
    marginVertical: 20
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  activeTabItem: {
    backgroundColor: '#EF9F27',
  },
  tabItemText: {
    fontSize: 14,
    color: '#555',
  },
  activeTabItemText: {
    color: '#fff',
  },
});

export default WealthTab;
