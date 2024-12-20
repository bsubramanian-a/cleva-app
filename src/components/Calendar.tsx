import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = ({onChange}: any) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().split('T')[0]);

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    onChange(day?.dateString);
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
    console.log("handle date", date);
  
    // Prevent moving to previous months if the selected month is before the current month
    if (date.year < new Date().getFullYear() || (date.year === new Date().getFullYear() && date.month < new Date().getMonth() + 1)) {
      return currentMonth;
    }
  
    // Format the date manually as "YYYY-MM" for the current month
    const formattedDate = `${date.year}-${date.month.toString().padStart(2, '0')}`;
    return formattedDate;
  };  

  // Function to render custom arrows and hide the left arrow for the current month
  const renderCustomArrows = (direction: string) => {
    // Get the current date
    const currentDate = new Date();
    
    // Check if the displayed month is the same as the current month
    const isCurrentMonth = currentMonth.substring(0, 7) === currentDate.toISOString().substring(0, 7);
    
    if (direction === 'left' && isCurrentMonth) {
      return null; // Hide the left arrow for the current month
    }
    
    return direction === 'left' ? renderCustomLeftArrow() : renderCustomRightArrow();
  };

  const generateDisabledDates = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth - 1, 1); // First day of the current month

    const markedDates: any = {};

    // Iterate through dates and mark them as disabled if they are in the past
    for (let date = firstDayOfCurrentMonth; date <= currentDate; date.setDate(date.getDate() + 1)) {
      markedDates[date.toISOString().split('T')[0]] = {
        disabled: true,
        disableTouchEvent: true,
        dotColor: 'red', // You can customize the dot color for disabled dates
      };
    }

    // Mark the selected date as selected
    if (selectedDate) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#EF9F27', // Customize the selected day background color
        textColor: 'white', // Customize the selected day text color
      };
    }

    return markedDates;
  };

  const customTheme = {
    selectedColor: '#EF9F27',
    selectedDayTextColor: 'white',
  };

  return (
    <View style={styles.container}> 
      <Calendar
        onDayPress={handleDayPress}
        renderArrow={renderCustomArrows}
        renderHeader={renderCustomHeader}
        onMonthChange={(date: any) => setCurrentMonth(handleMonthChange(date))}
        markedDates={generateDisabledDates()}
        theme={customTheme}
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden'
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
