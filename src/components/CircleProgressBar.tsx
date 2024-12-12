import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CircleProgressBar = ({ progress1, total, radius, strokeWidth, color1, color2, netWorth }:any) => {
  const progress1Percentage = progress1 ? progress1 * 100 : 0;
  // console.log("progress1", progress1);
  // const progress2Percentage = progress2 * 100;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={radius * 2}
        width={strokeWidth}
        fill={progress1Percentage}
        tintColor={color2}
        backgroundColor={color1}
        rotation={0}
        lineCap="round"
        arcSweepAngle={360}
        renderCap={({ center }) => (
          <View style={[styles.cap, { backgroundColor: color1, left: center.x, top: center.y - strokeWidth / 2,   width: strokeWidth, borderRadius: strokeWidth / 2 }]} />
        )}
      >
        {() => (
          <View style={styles.netWorthContainer}>
            <Text style={styles.netWorthLabel}>Net Worth</Text>
            <Text style={styles.netWorthValue}>
              {netWorth ? "$"+netWorth?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',',) : "N/A"}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  cap: {
    position: 'absolute',
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  netWorthContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  netWorthLabel: {
    fontSize: 12,
    color: '#4b4b4b',
  },
  netWorthValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262627',
    marginTop: 5,
  },
});

export default CircleProgressBar;
