import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';

const CustomDatePicker = ({ defaultValue, onValueChange }: any) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    onValueChange(format(date, 'yyyy-MM-dd'));
  };

  const openDatePicker = () => {
    setOpen(true);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  return (
    <View>
      <TouchableOpacity onPress={openDatePicker}>
        <TextInput value={formattedDate} editable={false} />
      </TouchableOpacity>
      {open && (
        <DatePicker
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
          onConfirm={(date) => {
            setOpen(false)
            handleDateChange(date)
        }}
        onCancel={() => {
            setOpen(false)
        }}
          maximumDate={today}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
