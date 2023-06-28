import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Modal, Button, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { format, isAfter, isBefore, isToday } from 'date-fns';

const CustomDatePicker = ({ defaultValue, onValueChange, minimumDate, maximumDate, disableFutureDates, disablePastDates, shouldExecuteUseEffect=false }: any) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: any) => {
    const currentDate = new Date();
    const selected = new Date(date);

    if ((!disableFutureDates && isAfter(selected, currentDate)) || (!disablePastDates && isBefore(selected, currentDate)) || isToday(selected)) {
      setSelectedDate(selected);
      onValueChange(format(selected, 'yyyy-MM-dd'));
    }
  };

  if(shouldExecuteUseEffect){
    useEffect(() => {
      if(defaultValue){
        setSelectedDate(defaultValue);
      }
    }, [defaultValue]);
  }
  
  const openDatePicker = () => {
    setOpen(!open);
  };

  const closeDatePicker = () => {
    setOpen(false);
  };

  const formattedDate = selectedDate ? format(selectedDate, 'dd-MM-yyyy') : null;

  return (
    <View>
      <TouchableOpacity onPress={openDatePicker}>
        <View style={styles.dtpStyle}>
          <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <DatePicker
              date={selectedDate || new Date()}
              onDateChange={handleDateChange}
              mode="date"
              maximumDate={disableFutureDates ? new Date() : maximumDate || undefined}
              minimumDate={disablePastDates ? new Date() : minimumDate || undefined}
              textColor="#000"
            />
            <Button title="Close" onPress={closeDatePicker} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dtpStyle: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 4,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
});

export default CustomDatePicker;
