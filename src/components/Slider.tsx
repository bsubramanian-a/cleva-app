import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HeroSectionDashboard from "../components/HeroSectionDashboard";

const Slider = ({ items }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event:any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
    setCurrentIndex(Math.round(currentIndex));
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
    >
      {items.map((item:any, index:any) => (
        <HeroSectionDashboard item={item}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#FBB142',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Slider;