import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CircleProgressBar = ({ progress1, progress2, radius, strokeWidth, color1, color2, netWorth }:any) => {
    const circumference = 2 * Math.PI * radius;
    const progress1Offset = (1 - progress1) * circumference;
    const progress2Offset = (1 - progress2) * circumference;
  
    return (
      <View style={styles.container}>
        <Svg width={radius * 2} height={radius * 2}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke={color1}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke={color2}
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress2Offset}, ${progress1Offset}`}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
        <View style={styles.progressTextContainer}>
          <Text style={styles.netWorthLabel}>Net Worth</Text>
          <Text style={styles.netWorthValue}>${netWorth}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressTextContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingHorizontal: 12
    },
    netWorthLabel: {
      fontSize: 14,
      color: '#4b4b4b',
      textAlign: 'center'
    },
    netWorthValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#262627',
      marginTop: 5,
      textAlign: 'center',
      flexWrap: 'nowrap',
      width: '100%'
    },
});  

export default CircleProgressBar;
  
  