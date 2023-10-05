import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  // Custom function to render the left arrow
  const renderCustomLeftArrow = () => {
    return (
        <Image source={require('../components/icon/icons/arrow-left.png')} style={styles.customArrow} />
    );
  };

  // Custom function to render the right arrow
  const renderCustomRightArrow = () => {
    return (
        <Image source={require('../components/icon/icons/arrow-right.png')} style={styles.customArrow} />
    );
  };

  const renderCustomHeader = (date: any) => {
    const monthYearString = date.toString('MMMM yyyy'); // Format the date as "Month Year"
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.customHeaderText}>{monthYearString}</Text>
      </View>
    );
  };

  // Function to handle month change
  const handleMonthChange = (date: any) => {
    // Prevent moving to previous months if the selected month is before the current month
    if (date < new Date()) {
      return currentMonth;
    }
    return date;
  };

  // Function to render custom arrows and hide the left arrow for the current month
  const renderCustomArrows = (direction: any) => {
    // Check if the displayed month is the same as the current month
    const isCurrentMonth = currentMonth.getMonth() === new Date().getMonth();
    
    if (direction === 'left' && isCurrentMonth) {
      return null; // Hide the left arrow for the current month
    }
    
    return direction === 'left' ? renderCustomLeftArrow() : renderCustomRightArrow();
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.label}>Select Date for Your Zoom Meeting</Text>
      <Calendar
        onDayPress={handleDayPress}
        renderArrow={renderCustomArrows}
        renderHeader={renderCustomHeader}
        onMonthChange={(date) => setCurrentMonth(handleMonthChange(date))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  customArrow: {
    width: 13, 
    height: 13, 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000"
  },
});

export default CustomCalendar;
